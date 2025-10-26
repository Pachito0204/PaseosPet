const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

// models to register relations
require('./models/User');
require('./models/Pet');
require('./models/Walk');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('PaseosPet API ok 🚀');
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/pets', require('./routes/pets'));
app.use('/api/walks', require('./routes/walks'));

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('✅ Conectado a PostgreSQL y modelos sincronizados');
    const PORT = process.env.PORT || 10000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (e) {
    console.error('❌ Error inicializando la BD:', e.message);
    process.exit(1);
  }
})();
