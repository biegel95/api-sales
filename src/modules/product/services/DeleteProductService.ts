import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

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

        await productRepository.remove(product);
    }
}

export default DeleteProductService;
