# Stage 1: Build the Vue.js application
FROM node:14.16.1-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Copy custom nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE ${PRIVATE_PORT}
CMD ["nginx", "-g", "daemon off;"]