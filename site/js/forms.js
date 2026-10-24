/**
 * Front-end for the no-account Submit / Report forms.
 *
 * Progressive enhancement: the forms' HTML action still points at the
 * classic GitHub issue flow, so everything below can fail and the user
 * keeps a working path. With JS available we POST JSON to the Pages
 * Function instead and render every state inline.
 */
(function () {
  'use strict';

  var form = document.getElementById('submit-form') || document.getElementById('report-form');
  if (!form) return;

  var isReport = form.id === 'report-form';
  var endpoint = isReport ? '/api/report' : '/api/submit';
  var ghTemplate = isReport ? 'report_broken.yml' : 'submit_link.yml';

  var btn = document.getElementById('submit-btn');
  var statusBox = document.getElementById('form-status');
  var successBox = document.getElementById('submit-success');
  var successDetail = document.getElementById('submit-success-detail');
  var trackLink = successBox.querySelector('.js-track-issue');
  var anotherLink = successBox.querySelector('.js-submit-another');
  var fallbackLink = form.querySelector('.js-github-fallback');

  function fieldValue(name) {
    var el = form.elements[name];
    return el ? el.value.trim() : '';
  }

  function showStatus(kind, html) {
    statusBox.className = 'form-status show form-status-' + kind;
    statusBox.innerHTML = html;
  }

  function clearStatus() {
    statusBox.className = 'form-status';
    statusBox.innerHTML = '';
  }

  function setBusy(busy) {
    btn.setAttribute('aria-busy', busy ? 'true' : 'false');
    btn.disabled = busy;
  }

  // Pre-fill from query params (e.g. directory links that carry resource_name/current_url)
  (function prefill() {
    var params = new URLSearchParams(window.location.search);
    ['resource_name', 'current_url', 'url', 'name'].forEach(function (key) {
      var value = params.get(key);
      if (!value) return;
      var el = form.elements[key];
      if (el && !el.value) el.value = value;
    });
  })();

  function githubFallbackUrl() {
    var params = new URLSearchParams();
    params.set('template', ghTemplate);
    var fields = isReport
      ? ['resource_name', 'current_url', 'issue_type', 'new_url', 'details']
      : ['name', 'url', 'level', 'jurisdiction', 'category', 'description', 'tags', 'notes'];
    fields.forEach(function (f) {
      var v = fieldValue(f);
      if (v) params.set(f, v);
    });
    return 'https://github.com/wra-sol/awesome-canada/issues/new?' + params.toString();
  }

  function payload() {
    var body = {
      website: fieldValue('website'),
    };
    var fields = isReport
      ? ['resource_name', 'current_url', 'issue_type', 'new_url', 'details']
      : ['name', 'url', 'level', 'jurisdiction', 'category', 'description', 'tags', 'notes'];
    fields.forEach(function (f) {
      body[f] = fieldValue(f);
    });
    return body;
  }

  function succeed(data) {
    form.hidden = true;
    clearStatus();
    if (typeof window.acTrack === 'function') {
      window.acTrack(isReport ? 'report_link_success' : 'submit_link_success', { method: data && data.issueUrl ? 'api' : 'fallback' });
    }
    if (data && data.issueUrl && trackLink) {
      trackLink.href = data.issueUrl;
      trackLink.hidden = false;
    } else if (trackLink) {
      trackLink.hidden = true;
    }
    if (!isReport && successDetail && !(data && data.issueUrl)) {
      successDetail.textContent =
        'A maintainer will review it shortly. Accepted links usually appear in the directory within a day or two.';
    }
    successBox.hidden = false;
    successBox.classList.add('show');
    successBox.setAttribute('tabindex', '-1');
    successBox.focus();
  }

  fallbackLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.open(githubFallbackUrl(), '_blank', 'noopener');
  });

  anotherLink.addEventListener('click', function (e) {
    e.preventDefault();
    successBox.classList.remove('show');
    successBox.hidden = true;
    form.reset();
    form.hidden = false;
    form.elements[isReport ? 'resource_name' : 'name'].focus();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (fieldValue('website') !== '') {
      succeed(null);
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setBusy(true);
    clearStatus();

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload()),
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          return { status: res.status, data: data };
        });
      })
      .then(function (r) {
        if (r.status === 200 && r.data.ok) {
          succeed(r.data);
          return;
        }
        setBusy(false);

        if (r.status === 400 && r.data.error === 'invalid_fields') {
          var items = Object.keys(r.data.fields || {}).map(function (k) {
            return '<li>' + r.data.fields[k] + '</li>';
          }).join('');
          showStatus('error',
            '<strong>Almost there — a couple of things need fixing:</strong><ul>' + items + '</ul>');
          var firstBad = Object.keys(r.data.fields || {})[0];
          if (firstBad && form.elements[firstBad]) form.elements[firstBad].focus();
          return;
        }

        if (r.status === 429) {
          showStatus('error',
            '<strong>Hold on a moment.</strong> ' +
            ((r.data && r.data.message) || 'You’ve reached the limit for now — please try again later.') +
            ' Need to send something urgently? <a href="' + githubFallbackUrl() +
            '" target="_blank" rel="noopener">Use GitHub instead</a>.');
          return;
        }

        if (r.status === 503 || (r.status === 502 && r.data.reason === 'auth')) {
          // Backend not wired up (or token lost access): degrade to the GitHub flow.
          showStatus('error',
            '<strong>Direct submission isn’t available right now.</strong> Opening GitHub with your answers pre-filled…');
          window.open(githubFallbackUrl(), '_blank', 'noopener');
          return;
        }

        showStatus('error',
          '<strong>Something went wrong on our side.</strong> Your submission wasn’t sent — please try again, or <a href="' +
          githubFallbackUrl() + '" target="_blank" rel="noopener">use GitHub instead</a>.');
      })
      .catch(function () {
        setBusy(false);
        showStatus('error',
          '<strong>Couldn’t reach the server.</strong> Check your connection and try again — your answers are still here. Or <a href="' +
          githubFallbackUrl() + '" target="_blank" rel="noopener">use GitHub instead</a>.');
      });
  });
})();
