# Build Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .
RUN npx ng build --configuration production

# Serve with Nginx
FROM nginx:alpine AS run
# ⬇️ TU JEST ZMIANA – bez /browser
COPY --from=build /app/dist/hello-angular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


