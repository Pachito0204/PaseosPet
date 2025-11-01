# PaseosPet Frontend (Expo / React Native)

## Requisitos
- Node.js 18+
- Expo CLI (`npm i -g expo`)

## Configuración
1. Descomprime el ZIP.
2. Instala dependencias:
```
npm install
```
3. Crea un archivo `.env` con:
```
EXPO_PUBLIC_API_URL=http://10.0.2.2:3000
```
> Android emulador: `10.0.2.2` apunta al `localhost` de tu PC. En dispositivo físico usa tu IP local.

## Ejecutar
```
npm run start
```
Abre la app y prueba **Login/Register**. El botón "Iniciar paseo (demo)" registra puntos de ubicación (requiere permisos). El chat es local (mock) listo para conectar a Socket.io.
