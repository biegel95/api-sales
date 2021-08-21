import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('customer')
class Customer {
    @PrimaryGeneratedColumn('uuid')
    id_customer: string;

    @Column()
    full_name: string;

    @Column()
    email: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Customer;
