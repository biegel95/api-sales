import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface iRequest {
    id_user: string;
}

class ShowProfileService {
    public async execute({ id_user }: iRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findById(id_user);

        if (!user) {
            throw new AppError('user not found');
        }

        return user;
    }
}

export default ShowProfileService;
