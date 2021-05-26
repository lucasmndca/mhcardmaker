import config from './src/config/config.json';
import app from './src/config/app';
import cors from 'cors';
import corsConfig from './src/config/cors';
import cardsRouter from './src/routes/cards';
import authRouter from './src/routes/auth';

app.use(cors(corsConfig()));
app.use('/cards', cardsRouter);
app.use('/auth', authRouter);

app.listen(config.defaultPort, () => console.log(`Server running on port ${config.defaultPort}`));