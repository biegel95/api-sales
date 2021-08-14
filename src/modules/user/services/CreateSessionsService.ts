import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string;
}

class CreateSessionsService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Invalid email or password', 401);
        }

        const passwordConfirmed = await compare(password, user.password);

        if (!passwordConfirmed) {
            throw new AppError('Invalid email or password', 401);
        }

        const token = sign({}, '995c10f891d2a01062c2eb3b96774881', {
            subject: user.id_user,
            expiresIn: '1d',
        });

        return {
            user,
            token,
        };
    }
}

export default CreateSessionsService;
