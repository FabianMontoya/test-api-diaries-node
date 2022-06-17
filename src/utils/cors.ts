const isDevelopment = process.env.NODE_ENV === 'development';

const getAllowedOrigins = (): string[] => {
  if (isDevelopment) {
    return ['http://localhost:3000'];
  }

  return process.env.ALLOWED_ORIGINS?.split(',') ?? [];
};

export { isDevelopment, getAllowedOrigins };
