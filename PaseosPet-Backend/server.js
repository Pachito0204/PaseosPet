const express = require('express');
const cors = require('cors');
const { sequelize } = require('./src/config/db'); // o tu conexión a Postgres
const authRoutes = require('./src/routes/auth'); // 🔹 Importa tu archivo de rutas

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// 🔹 Rutas principales
app.use('/api/auth', authRoutes);  // <-- Aquí se conecta la ruta del registro

app.get('/', (req, res) => res.send('PaseosPet API ok 🚀'));

// 🔹 Sincronización con la base de datos
sequelize.sync().then(() => {
  console.log('✅ Conectado a PostgreSQL y modelos sincronizados');
  app.listen(10000, () => console.log('🚀 Server running on port 10000'));
});
