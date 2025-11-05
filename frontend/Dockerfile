# ========= Build stage =========
FROM node:20-alpine AS build
WORKDIR /app

# Skopiuj pliki zależności i zainstaluj
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Skopiuj resztę źródeł
COPY . .

# Zbuduj aplikację (zgodnie z angular.json -> outputPath: dist/hello-angular)
RUN npx ng build --configuration production

# ========= Run stage (Nginx) =========
FROM nginx:alpine AS run

# (Opcjonalnie) własna konfiguracja Nginx dla SPA:
#   - Jeśli masz plik nginx.conf w katalogu projektu, odkomentuj poniższą linię:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Skopiuj zbudowane artefakty do katalogu serwowanego przez Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/hello-angular /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
