import mongoose from 'mongoose';
import { Config } from '../../config/index';

// database connection
export const databaseConnection = async () => {
	try {
		const newConnection = await mongoose.connect(Config.MONGO_STRING!);
		if (newConnection) {
			console.info('database connected');
		}
	} catch (error) {
		console.error({ error: { error } });
		process.exit(1);
	}
};

// shutdown gracefully
process.on('SIGINT', async () => {
	console.info('shutdown gracefully');
	await mongoose.disconnect();
	process.exit(0);
});
