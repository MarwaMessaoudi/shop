import * as typeorm from 'typeorm';
import { Product } from '../../products/entities/product.entity';
@typeorm.Entity('categories')
export class Category {
@typeorm.PrimaryGeneratedColumn() id: number;
@typeorm.Column({ unique: true }) name: string;
@typeorm.OneToMany(() => Product, (p) => p.category) products:  typeorm.Relation<Product[]>;
}