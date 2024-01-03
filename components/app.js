/* eslint-disable import/newline-after-import */
/* eslint-disable import/order */
import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import { promises as fs } from 'fs';
import swaggerUi from 'swagger-ui-express';
import searchRouter from './search/index.js';
import { router as gatewayRouter } from './gateway/index.js';
import { errorHandler } from '../lib/middleware/error-handler.js';
import { NotFoundError } from '../lib/errors/not-found-error.js';
import { spellerSchedule } from '../lib/schedule/schedule.js';
import { Logger } from '../lib/logger/logger.js';
import morganMiddleware from '../lib/logger/morgan.js';
import cors from 'cors'
const logger = Logger(import.meta.url);
const swaggerDocument = await fs.readFile('./swagger/swagger-output.json');

// speller 스케줄 job
spellerSchedule();

export const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morganMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(JSON.parse(swaggerDocument)));
app.use('/search', searchRouter);
app.use('/gateway', gatewayRouter);

// NOT FOUND
app.use((req, res, next) => {
  next(new NotFoundError(`Cannot ${req.method} ${req.path}`));
});

app.use(errorHandler);

process.on('uncaughtException', err => {
  logger.error(`uncaughtException ${JSON.stringify(err)}`);
  process.exit(1);
});

process.on('unhandledRejection', reason => {
  logger.error(`unhandledRejection ${JSON.stringify(reason)}`);
  process.exit(1);
});
