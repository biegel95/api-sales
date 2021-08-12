import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

interface IRequest {
    id_product: string;
}

class ShowProductService {
    public async execute({ id_product }: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id_product);

        if (!product) {
            throw new AppError('Product not found');
        }

        return product;
    }
}

export default ShowProductService;
