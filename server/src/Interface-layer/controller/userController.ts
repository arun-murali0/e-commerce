import { Request, Response } from 'express';
import { registerUsecase } from '../../Application-layer/use-cases/user/register_useCase';

export const userController = async (req: Request, res: Response) => {
	try {
		const userData = req.body;
		const newUser = await registerUsecase(userData);
		return res.status(200).json({ message: 'user created successfully', user: newUser });
	} catch (error) {
		console.error({ error: error });
		return res.status(400).json({ error: error.message });
	}
};
