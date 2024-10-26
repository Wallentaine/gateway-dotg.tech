import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BOOKING_MICROSERVICE } from './booking.di';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: BOOKING_MICROSERVICE,
        transport: Transport.TCP,
        options: {
          host: '176.124.219.2',
          port: 5051,
        },
      },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
