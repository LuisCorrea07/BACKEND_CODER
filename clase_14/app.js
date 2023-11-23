import express from 'express';
import mongoose from 'mongoose';
import studentRoutes from './src/routes/student.routes.js';

const PORT = 5000;
const MONGOOSE_URL = 'mongodb://127.0.0.1:27017/coder_55605';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', studentRoutes);

async function main() {
  try {
    await mongoose.connect(MONGOOSE_URL);
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en puerto ${PORT}`);
    });
  } catch (error) {
    console.error(`Error al inicializar servidor: ${error.message}`);
  }
}

main();