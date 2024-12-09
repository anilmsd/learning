# Step 1: Use a Node.js base image for building the app    git  
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use an Nginx base image to serve the built app
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to make the app accessible
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
