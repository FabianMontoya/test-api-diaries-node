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
// app.use();

// * Add headers
app.use(middlewares.headers.SetResponseHeaders);
// app.use(middlewares.headers.VerifyRequestHeaders);

// * Routes
const router = express.Router();

// this is for the root path and addmit all the options request for the cors
router.options('*', (_req, res) => {
  res.sendStatus(200);
});

router.use('/ping', (_req, res) => {
  res.send('pong');
});
/* app.use('/api/ping', (_req, res) => {
  res.send('pong');
}); */

router.use('/diaries', middlewares.headers.VerifyRequestHeaders, diariesRoute);
// app.use('/diaries', diariesRoute); // Consume how: localhost:[port]/diaries

// * Init default path
app.use('/api', router); // Consume how: localhost:[port]/api/[route_path]

// * 404 Not Found Middleware
app.use((req, res) => {
  res.status(404).send({ code: 404, error: true, message: `The URL ${req.originalUrl} not found in this server, please verify.` });
});

// * Starting the server on port 3000 -- app.get('port')
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
