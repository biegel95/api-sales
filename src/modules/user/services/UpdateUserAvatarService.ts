import AppError from '@shared/errors/AppError';
import path from 'path';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';
import uploadConfig from '@config/upload';
import fs from 'fs';

interface IRequest {
    id_user: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({ id_user, avatarFilename }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findById(id_user);

        if (!user) {
            throw new AppError('User not found.');
        }

        const { avatar } = user;

        if (avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                avatar,
            );

            const userAvatarFileExists = await fs.promises.stat(
                userAvatarFilePath,
            );

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;

        await userRepository.save(user);

        return user;
    }
}

export default UpdateUserAvatarService;
