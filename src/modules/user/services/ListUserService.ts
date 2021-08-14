import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

class ListUserService {
    public execute(): Promise<User[]> {
        const userRepository = getCustomRepository(UserRepository);

        return userRepository.find();
    }
}

export default ListUserService;
