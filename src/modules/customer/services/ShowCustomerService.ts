import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

interface iRequest {
    id_customer: string;
}

class ShowCustomerService {
    public async execute({ id_customer }: iRequest): Promise<Customer> {
        const customerRepository = getCustomRepository(CustomerRepository);

        const customer = await customerRepository.findById(id_customer);

        if (!customer) {
            throw new AppError('customer not found');
        }

        return customer;
    }
}

export default ShowCustomerService;
