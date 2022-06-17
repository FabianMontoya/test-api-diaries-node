import { Request, Response, NextFunction } from 'express';
import { getAllowedOrigins } from '../utils/cors';
import { LOCAL_ORIGIN_IP } from '../consts';

export const VerifyRequestHeaders = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin ?? '';
  const originIP = req.headers['x-forwarded-for'] ?? LOCAL_ORIGIN_IP;

  if (origin.length === 0) {
    res.status(403).json({ code: 403, error: true, message: 'Forbidden: required request headers missing' });
    return;
  }

  req.app.locals.origin = origin;
  req.app.locals.originIP = originIP;

  next();
};

export const SetResponseHeaders = (req: Request, res: Response, next: NextFunction): void => {
  res.charset = 'utf-8';

  const allowedOrigins = getAllowedOrigins();
  const { origin, originIP } = req.app.locals;

  // console.log('[req.headers]: ', req.headers);
  console.log('[origin]: ', origin);
  console.log('[originIP]: ', originIP);
  console.log('[allowedOrigins]: ', allowedOrigins);

  // Website you wish to allow to connect
  if (allowedOrigins.length > 0 && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  // Pass to next layer of middleware
  next();
};
