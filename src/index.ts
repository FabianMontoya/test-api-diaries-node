import express from 'express';
import diariesRoute from './routes/diaries';
import middlewares from './middlewares';

// * Init express
const app = express();

// * Settings
const PORT = process.env.PORT ?? 3001;
app.set('port', PORT);

// * Middlewares
app.use(express.json());

// * Add headers
app.use(middlewares.headers.VerifyRequestHeaders);
app.use(middlewares.headers.SetResponseHeaders);

// * Routes
app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diaries', diariesRoute);

// * 404 Not Found Middleware
app.use((req, res) => {
  res.status(404).send({ code: 404, error: true, message: `The URL ${req.originalUrl} not found in this server, please verify.` });
});

// * Starting the server on port 3000 -- app.get('port')
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
