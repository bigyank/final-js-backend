import './env.js';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import 'express-async-errors';

import json from './middlewares/json.js';

import routes from './routes/index.js';
import {
  genericErrorHandler,
  methodNotAllowed,
} from './middlewares/errorHandler.js';
import rateLimiter from './middlewares/rateLimiter.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));
app.use(json);
app.use(rateLimiter);

// routes
app.use('/api', routes);

// error handlers
app.use(genericErrorHandler);
app.use(methodNotAllowed);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
