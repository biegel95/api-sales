import { Router } from 'express';
import productRouter from '@modules/product/routes/product.routes';
import userRouter from '@modules/user/routes/user.routes';

const routes = Router();

routes.use('/products', productRouter);

routes.use('/users', userRouter);

routes.get('/', (request, response) => {
    return response.json({ message: new Date() });
});

export default routes;
