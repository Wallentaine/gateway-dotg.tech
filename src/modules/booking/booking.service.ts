import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKING_MICROSERVICE } from './booking.di';
import { BookDTO, SearchDTO, StandQueueDTO } from './dto';

@Injectable()
export class BookingService {
  private readonly logger = new Logger(BookingService.name);

  constructor(@Inject(BOOKING_MICROSERVICE) private client: ClientProxy) {}

  public async search(searchDto: SearchDTO) {
    return this.client.send('booking.search', searchDto);
  }

  public async book(bookDto: BookDTO) {
    return this.client.send('booking.book', bookDto);
  }

  public async standQueue(standQueueDto: StandQueueDTO) {
    
    this.logger.log(standQueueDto);
    
    return this.client.send('booking.stand.queue', standQueueDto);
  }
}
