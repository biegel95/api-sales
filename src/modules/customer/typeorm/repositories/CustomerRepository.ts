import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';

@EntityRepository(Customer)
class CustomerRepository extends Repository<Customer> {
    public async findByName(full_name: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                full_name,
            },
        });

        return customer;
    }

    public async findById(id_customer: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                id_customer,
            },
        });

        return customer;
    }

    public async findByEmail(email: string): Promise<Customer | undefined> {
        const customer = await this.findOne({
            where: {
                email,
            },
        });

        return customer;
    }
}

export default CustomerRepository;
