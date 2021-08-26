import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import RedisCache from '@shared/cache/RedisCache';

interface IRequest {
    id_product: string;
}

class DeleteProductService {
    public async execute({ id_product }: IRequest): Promise<void> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id_product);

        if (!product) {
            throw new AppError('Product not found');
        }

        const redisCache = new RedisCache();
        await redisCache.invalidate('api-sales-product-list');

        await productRepository.remove(product);
    }
}

export default DeleteProductService;
