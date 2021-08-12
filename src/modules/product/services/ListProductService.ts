import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class ListProductService {
    public execute(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);

        return productRepository.find();
    }
}

export default ListProductService;
