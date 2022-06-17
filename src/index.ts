import express from 'express';
import diariesRoute from './routes/diaries';

// * Init express
const app = express();

// * Settings
const PORT = process.env.PORT ?? 3001;
app.set('port', PORT);

// * Middlewares
app.use(express.json());

// * Add headers
app.use((req, res, next) => {
  res.charset = 'utf-8';
  const allowedOrigins = ['http://127.0.0.1:3001', 'http://localhost:3001'];
  const origin = req.headers.origin ?? '';
  // Website you wish to allow to connect
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.setHeader('Access-Control-Allow-Origin', 'http://example.com');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // Pass to next layer of middleware
  next();
});

// * Routes
app.get('/ping', (_req, res) => {
  console.log('someone pinged');
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
