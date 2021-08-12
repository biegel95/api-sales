import { Router } from 'express';
import productRouter from '@modules/product/routes/product.routes';

const routes = Router();

routes.use('/products', productRouter);

routes.get('/', (request, response) => {
    return response.json({ message: new Date() });
});

export default routes;
