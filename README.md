# Hello World: FastAPI (Python) + Angular + Docker Compose
Start dev: docker-compose up -d frontend-dev

Logi dev: docker-compose logs -f frontend-dev

Restart dev: docker-compose restart frontend-dev

Stop dev: docker-compose stop frontend-dev

Backend health: http://localhost:8000/health

## Tryb developerski (hot-reload) – `frontend-dev`

W compose jest serwis **`frontend-dev`** z `ng serve` (hot-reload) obok produkcyjnego frontu (Nginx).

### Start
```bash
docker-compose up -d frontend-dev

Ten projekt zawiera:
- **backend/**: FastAPI (Python) – `GET /health`, `GET /hello`
- **frontend/**: minimalny Angular (standalone) wyświetlający "Hello from Angular"
- **docker-compose.yml**: uruchamia oba serwisy w Docker Desktop

## Szybki start (Docker Desktop)
```bash
docker compose build
docker compose up -d
```

Odwiedź:
- Backend: http://localhost:8000/health oraz http://localhost:8000/hello
- Frontend: http://localhost:4200

## Struktura
```
backend/
  app.py
  requirements.txt
  Dockerfile
frontend/
  Dockerfile
  package.json
  angular.json
  tsconfig.json
  tsconfig.app.json
  src/
    index.html
    main.ts
    app/
      app.component.ts
      app.component.html
      app.component.css
docker-compose.yml
```

## Dev wskazówki
- Backend obraz: `python:3.11-slim`, serwowany przez uvicorn na `:8000`.
- Frontend budowany `ng build` i serwowany przez Nginx na porcie `80`, mapowany na `:4200` w Compose.

## Komendy pomocnicze
```bash
docker compose logs -f backend
docker compose logs -f frontend
docker compose down -v
```
