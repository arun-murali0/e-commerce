import { app } from './app';
import { Config } from './config';

app.listen(Config.PORT, () => {
	console.info(`server running in http://localhost:${Config.PORT}`);
});
