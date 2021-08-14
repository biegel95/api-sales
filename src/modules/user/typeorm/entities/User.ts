import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('user')
class User {
    @PrimaryGeneratedColumn('uuid')
    id_user: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
