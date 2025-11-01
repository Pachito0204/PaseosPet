import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from './models/index.js';
import authRoutes from './routes/auth.js';
import petsRoutes from './routes/pets.js';
import serviceRoutes from './routes/serviceTypes.js';
import walkersRoutes from './routes/walkers.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API PaseosPet funcionando 🚀' }));

app.use('/auth', authRoutes);
app.use('/pets', petsRoutes);
app.use('/service-types', serviceRoutes);
app.use('/walkers', walkersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado a la base de datos');
  } catch (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
  }
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
