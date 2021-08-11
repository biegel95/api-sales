import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('product')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id_product: string;

    @Column()
    desc_product: string;

    @Column('decimal')
    price: number;

    @Column('integer')
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Product;
