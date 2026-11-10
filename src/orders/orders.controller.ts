import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

// orders/orders.controller.ts
@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
constructor(private readonly service: OrdersService) {}
@Post() @ApiOperation({ summary: 'Commander avec verification du stock' })
create(@Body() dto: CreateOrderDto) { return this.service.create(dto); }
@Get() findAll() { return this.service.findAll(); }
}