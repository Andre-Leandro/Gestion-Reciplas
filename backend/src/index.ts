import express, { Application, json } from 'express';
import { PrismaClient } from '@prisma/client';
import { createRouter } from './router';

const prismaClient = new PrismaClient();
prismaClient
  .$connect()
  .then(() => console.info('Conexión exitosa con la base de datos'));

const app: Application = express();

// Agrega middleware para manejar JSON y URLencoded
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use("/", createRouter(prismaClient));

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
