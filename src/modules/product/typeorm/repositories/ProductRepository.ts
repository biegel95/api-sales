import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
    public async findByName(
        desc_product: string,
    ): Promise<Product | undefined> {
        const product = await this.findOne({
            where: {
                desc_product,
            },
        });

        return product;
    }
}
