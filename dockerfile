FROM node:24-alpine3.21 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VITE_BACKEND_URL
ARG VITE_SOCKET_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_SOCKET_URL=$VITE_SOCKET_URL
RUN npm run build
FROM nginx:1.29.1-alpine3.22-slim
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]