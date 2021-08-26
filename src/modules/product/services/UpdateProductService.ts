import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import RedisCache from '@shared/cache/RedisCache';

interface IRequest {
    id_product: string;
    desc_product: string;
    price: number;
    quantity: number;
}

class UpdateProductService {
    public async execute({
        id_product,
        desc_product,
        price,
        quantity,
    }: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id_product);

        if (!product) {
            throw new AppError('Product not found');
        }

        const productExists = await productRepository.findByName(desc_product);

        if (productExists) {
            throw new AppError('There is already product with this name');
        }

        const redisCache = new RedisCache();
        await redisCache.invalidate('api-sales-product-list');

        product.desc_product = desc_product;
        product.price = price;
        product.quantity = quantity;

        await productRepository.save(product);

        return product;
    }
}

export default UpdateProductService;
