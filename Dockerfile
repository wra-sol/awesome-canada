# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --production

# Production stage
FROM node:20-alpine
RUN apk add --no-cache python3 ca-certificates && update-ca-certificates
WORKDIR /app

# Copy production deps
COPY --from=builder /app/node_modules ./node_modules

# Copy application
COPY package.json server.js ./
COPY data/ ./data/
COPY docs/ ./docs/
COPY scripts/ ./scripts/

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000
CMD ["node", "server.js"]
