import { app } from './app.js';

import { config } from './config/index.js';

app.listen(config.PORT, () => {
	console.info(`server running in http://localhost:${config.PORT}`);
});
