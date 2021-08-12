import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

interface IRequest {
    desc_product: string;
    price: number;
    quantity: number;
}

class CreateProductService {
    public async execute({
        desc_product,
        price,
        quantity,
    }: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);
        const productExists = await productRepository.findByName(desc_product);

        if (productExists) {
            throw new AppError('There is already product with this name');
        }

        const product = productRepository.create({
            desc_product,
            price,
            quantity,
        });

        await productRepository.save(product);

        return product;
    }
}

export default CreateProductService;
