import express, { json } from 'express' // require -> commonJS
const app = express()
import { authRoute } from './routes/auth.js';
import { userRoute } from './routes/users.js';
import { verifyRoute } from './routes/verify.js';
import cors from 'cors';
import { config } from './config.js';
import cookieParser from 'cookie-parser';
import { randomUUID } from 'crypto';

app.use(cors(config.application.cors.server));
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(json());
app.disable('x-powered-by');
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/auth/users', userRoute);
app.use('/api/auth', verifyRoute)

const port = process.env.PORT ?? 2000

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
