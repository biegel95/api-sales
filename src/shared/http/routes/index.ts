import { Router } from 'express';
import productRouter from '@modules/product/routes/product.routes';
import userRouter from '@modules/user/routes/user.routes';
import sessionsRouter from '@modules/user/routes/sessions.routes';
import profileRouter from '@modules/user/routes/profile.routes';
import customerRouter from '@modules/customer/routes/customer.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/users', userRouter);
routes.use('/login', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/customers', customerRouter);

routes.get('/', (request, response) => {
    return response.json({ message: new Date() });
});

export default routes;
