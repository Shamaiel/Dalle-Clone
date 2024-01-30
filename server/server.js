import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'


import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();

app.use(cors({ origin: '*' }))

app.use(express.json());

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from Image Gen!',
  });
});

const startServer = async () => {
 
  try {

    connectDB(process.env.MONGODB_URL);
    app.listen(3000, () => console.log('Server started on port ${3000} '));
  } catch (error) {
    console.log(error);
  }

}

startServer();








