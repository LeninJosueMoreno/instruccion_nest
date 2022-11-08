import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
