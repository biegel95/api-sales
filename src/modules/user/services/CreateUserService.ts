import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    full_name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({
        full_name,
        email,
        password,
    }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const emailExists = await userRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('Email already exists');
        }

        const user = userRepository.create({
            full_name,
            email,
            password,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
