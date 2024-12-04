import { User } from '../model/userModel';

export const userRespository = {
	create: async (userData) => {
		return await User.create(userData);
	},
	findByEmail: async (userData) => {
		return await User.findOne({ email: userData.email });
	},
};
