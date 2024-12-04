import express from 'express';
import { databaseConnection } from './Infrastracture-layer/DB/db';

const app = express();

// database connection
databaseConnection();

export { app };
