import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKING_MICROSERVICE } from './booking.di';
import { SearchDTO } from './dto';

@Injectable()
export class BookingService {
  constructor(@Inject(BOOKING_MICROSERVICE) private client: ClientProxy) {}

  public async search(searchDto: SearchDTO) {
    return this.client.send('booking.search', searchDto);
  }
}
