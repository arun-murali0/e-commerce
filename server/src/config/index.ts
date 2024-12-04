import dotenv from 'dotenv';
dotenv.config();

export const Config = {
	PORT: process.env.PORT,
	MONGO_STRING: process.env.MONGO_STRING,
};
