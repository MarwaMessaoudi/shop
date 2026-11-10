import * as typeorm from 'typeorm';
import { CustomerOrder } from '../../orders/entities/order.entity';
@typeorm.Entity('clients')
export class Client {
@typeorm.PrimaryGeneratedColumn() id: number;
@typeorm.Column() fullName: string;
@typeorm.Column({ unique: true }) email: string;
@typeorm.OneToMany(() => CustomerOrder, (o) => o.client) orders: typeorm.Relation<CustomerOrder[]>;
}