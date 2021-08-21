import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

class ListCustomerService {
    public execute(): Promise<Customer[]> {
        const customerRepository = getCustomRepository(CustomerRepository);

        return customerRepository.find();
    }
}

export default ListCustomerService;
