# Entrega 1 - Ecommerce (Users + Auth)

Proyecto preparado para la Entrega N°1: CRUD de usuarios + Autenticación y Autorización (Passport + JWT).

## Estructura
- src/
  - models/user.model.js
  - config/passport.js
  - controllers/sessions.controller.js
  - routes/sessions.routes.js
  - middlewares/auth.middleware.js
  - app.js

## Setup (local)
1. Copiar `.env.example` a `.env` y completar `MONGO_URI` y `JWT_SECRET`.
2. Instalar dependencias:
   ```
   npm install
   ```
3. Ejecutar:
   ```
   npm run dev
   ```
4. Endpoints principales:
   - POST /api/sessions/register
   - POST /api/sessions/login
   - GET  /api/sessions/current  (requiere Authorization: Bearer <TOKEN>)

## Notas importantes
- La contraseña se encripta con `bcrypt.hashSync`.
- El token JWT vence en 1 hora (configurable en `src/controllers/sessions.controller.js`).
- Añadí validaciones básicas; en producción recomendá usar HTTPS, rate-limiter y refresh tokens.

## Tests rápidos (curl)

Registro:
```
curl -X POST http://localhost:3000/api/sessions/register \
 -H "Content-Type: application/json" \
 -d '{"first_name":"Mati","last_name":"Torres","email":"mati@example.com","age":30,"password":"Pass1234"}'
```

Login:
```
curl -X POST http://localhost:3000/api/sessions/login \
 -H "Content-Type: application/json" \
 -d '{"email":"mati@example.com","password":"Pass1234"}'
```

Current:
```
curl -X GET http://localhost:3000/api/sessions/current \
 -H "Authorization: Bearer <TOKEN_OBTENIDO>"
```
