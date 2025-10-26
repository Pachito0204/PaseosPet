# PaseosPet Backend (Express + Sequelize + PostgreSQL)

## Requisitos
- Node 18+
- PostgreSQL (Render DB)
- Variables de entorno configuradas

## Variables de entorno
Crea `.env` (o usa Environment en Render):
```
PORT=10000
JWT_SECRET=supersecretkeychangeit
DATABASE_URL=postgres://USER:PASSWORD@HOST:5432/DBNAME
```

> En Render usa **DATABASE_URL** tal cual entrega el panel y deja **SSL enabled**.

## Instalación local
```
npm install
npm run dev
```

## Endpoints principales
- `POST /api/auth/register` `{ name, email, password, role? }`
- `POST /api/auth/login` `{ email, password }` → `{ token, user }`
- `GET /api/pets` (Bearer token)
- `POST /api/pets` `{ name, species?, breed?, age?, weight? }`
- `PUT /api/pets/:id`
- `DELETE /api/pets/:id`
- `GET /api/walks?petId=ID`
- `POST /api/walks` `{ petId, distanceKm, durationMin, route? }`

## Despliegue en Render
1. Crea un **Web Service** desde tu repo.
2. **Build command:** `npm install` (Render lo hace por defecto)
3. **Start command:** `npm start`
4. Variables de entorno:
   - `DATABASE_URL=...`
   - `JWT_SECRET=algo-seguro`
   - (opcional) `PORT=10000`
5. Deploy. Verás *PaseosPet API ok 🚀* en `GET /`.

## Pruebas rápidas
```bash
# Registro
curl -X POST $API/api/auth/register -H "Content-Type: application/json"   -d '{"name":"Jorge","email":"jorge@demo.com","password":"123456"}'

# Login
curl -X POST $API/api/auth/login -H "Content-Type: application/json"   -d '{"email":"jorge@demo.com","password":"123456"}'
# => copia el token
TOKEN=ey...

# Crear mascota
curl -X POST $API/api/pets -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json"   -d '{"name":"Firulais","breed":"Labrador","age":4}'
```

## Frontend (conexión)
Ejemplo en React:
```js
const API = import.meta.env.VITE_API_BASE_URL;
await fetch(`${API}/auth/register`, {
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify(form)
});
```
