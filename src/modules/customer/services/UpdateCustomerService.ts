import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

interface iRequest {
    id_customer: string;
    full_name: string;
    email: string;
}

class UpdateCustomerService {
    public async execute({
        id_customer,
        full_name,
        email,
    }: iRequest): Promise<Customer> {
        const customerRepository = getCustomRepository(CustomerRepository);

        const customer = await customerRepository.findById(id_customer);

        if (!customer) {
            throw new AppError('customer not found');
        }

        const customerUpdateEmail = await customerRepository.findByEmail(email);

        if (
            customerUpdateEmail &&
            customerUpdateEmail.id_customer !== id_customer
        ) {
            throw new AppError('There is already one customer with this email');
        }

        customer.full_name = full_name;
        customer.email = email;

        await customerRepository.save(customer);

        return customer;
    }
}

export default UpdateCustomerService;
