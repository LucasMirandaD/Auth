import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
});

export default app;