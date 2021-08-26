import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import RedisCache from '@shared/cache/RedisCache';

class ListProductService {
    public async execute(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);

        const redisCache = new RedisCache();

        let products = await redisCache.recover<Product[]>(
            'api-sales-product-list',
        );

        if (!products) {
            products = await productRepository.find();
            await redisCache.save('api-sales-product-list', products);
        }

        return products;
    }
}

export default ListProductService;
