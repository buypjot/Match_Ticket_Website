# Stage 1: Build the React application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package manifest
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the application using Node.js
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package manifest
COPY package.json package-lock.json* ./

# Install production dependencies
RUN npm install --omit=dev

# Copy the Express server file
COPY server.js ./

# Copy built static assets from the build stage
COPY --from=build /app/build ./build

# Expose port 80 for traffic
EXPOSE 80

# Start the Node.js server
ENV NODE_ENV=production
ENV PORT=80
CMD ["node", "server.js"]
