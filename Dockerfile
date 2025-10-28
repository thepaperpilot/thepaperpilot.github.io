# build step
FROM node:25-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only the dependency manifests first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the project
COPY . .

# Build Nuxt app
RUN npm run build


# production step
FROM node:25-alpine AS runner

WORKDIR /app

# Copy only what's needed for runtime
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Expose Nuxt’s default port
EXPOSE 3000

# Set NODE_ENV to production
ENV NODE_ENV=production

# Run the Nuxt server
CMD ["node", ".output/server/index.mjs"]
