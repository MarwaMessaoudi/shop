import * as typeorm from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { OrderItem } from '../../orders/entities/order-item.entity';
@typeorm.Entity('products')
export class Product {
@typeorm.PrimaryGeneratedColumn() id: number;
@typeorm.Column() name: string;
@typeorm.Column('decimal', { precision: 10, scale: 2 }) price: string;
@typeorm.Column('int', { default: 0 }) stock: number;
@typeorm.ManyToOne(() => Category, (c) => c.products, { onDelete: 'RESTRICT' })
@typeorm.JoinColumn({ name: 'categoryId' }) category: typeorm.Relation<Category>;
@typeorm.Column() categoryId: number;
@typeorm.OneToMany(() => OrderItem, (item) => item.product) items:typeorm.Relation<OrderItem>;
}