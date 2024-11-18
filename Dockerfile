# Stage 1: Build the NestJS app
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS app
RUN npm run build

# Stage 2: Run the NestJS app
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the build output
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json

# Expose port 4000
EXPOSE 4000

# Start the NestJS app
CMD ["node", "dist/main"]