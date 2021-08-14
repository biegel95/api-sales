import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.index);

userRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            full_name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
        },
    }),
    userController.create,
);

export default userRouter;
