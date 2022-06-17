import { LOCAL_ORIGINS } from '../consts';

const isDevelopment = process.env.NODE_ENV === 'development';

const getAllowedOrigins = (): string[] => {
  if (isDevelopment) {
    return LOCAL_ORIGINS;
  }

  return process.env.ALLOWED_ORIGINS?.split(',') ?? [];
};

export { isDevelopment, getAllowedOrigins };
