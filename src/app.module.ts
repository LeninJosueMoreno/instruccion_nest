import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
