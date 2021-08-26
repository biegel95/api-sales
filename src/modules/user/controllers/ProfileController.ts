import { Request, Response } from 'express';
import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';
import { classToClass } from 'class-transformer';

class ProfileController {
    public async show(request: Request, response: Response): Promise<Response> {
        const showProfile = new ShowProfileService();
        const id_user = request.user.id_user;

        const user = await showProfile.execute({
            id_user,
        });

        return response.json(classToClass(user));
    }

    public async update(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const id_user = request.user.id_user;
        const { full_name, email, password, old_password } = request.body;

        const updateProfile = new UpdateProfileService();

        const user = await updateProfile.execute({
            id_user,
            full_name,
            email,
            password,
            old_password,
        });

        return response.json(classToClass(user));
    }
}

export default ProfileController;
