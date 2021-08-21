import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

interface iRequest {
    id_customer: string;
}

class DeleteCustomerService {
    public async execute({ id_customer }: iRequest): Promise<void> {
        const customerRepository = getCustomRepository(CustomerRepository);

        const customer = await customerRepository.findById(id_customer);

        if (!customer) {
            throw new AppError('customer not found');
        }

        await customerRepository.remove(customer);
    }
}

export default DeleteCustomerService;
