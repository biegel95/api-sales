import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

interface IRequest {
    full_name: string;
    email: string;
}

class CreateCustomerService {
    public async execute({ full_name, email }: IRequest): Promise<Customer> {
        const customerRepository = getCustomRepository(CustomerRepository);
        const emailExists = await customerRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('Email already exists');
        }

        const customer = customerRepository.create({
            full_name,
            email,
        });

        await customerRepository.save(customer);

        return customer;
    }
}

export default CreateCustomerService;
