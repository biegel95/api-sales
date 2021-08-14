import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async findByName(full_name: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                full_name,
            },
        });

        return user;
    }

    public async findById(id_user: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                id_user,
            },
        });

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.findOne({
            where: {
                email,
            },
        });

        return user;
    }
}

export default UserRepository;
