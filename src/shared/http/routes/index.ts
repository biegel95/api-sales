import { Router } from 'express';
import productRouter from '@modules/product/routes/product.routes';
import userRouter from '@modules/user/routes/user.routes';
import sessionsRouter from '@modules/user/routes/sessions.routes';

const routes = Router();

routes.use('/products', productRouter);

routes.use('/users', userRouter);

routes.use('/login', sessionsRouter);

routes.get('/', (request, response) => {
    return response.json({ message: new Date() });
});

export default routes;
