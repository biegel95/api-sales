import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class UserAvatarController {
    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const updateAvatar = new UpdateUserAvatarService();

        const user = updateAvatar.execute({
            id_user: request.user.id_user,
            avatarFilename: request.file?.filename || '',
        });

        return response.json(classToClass(user));
    }
}

export default UserAvatarController;
