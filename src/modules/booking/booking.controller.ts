import { Controller, Get, Query } from '@nestjs/common';
import { SearchDTO } from './dto';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get('search')
  public async search(@Query() searchDto: SearchDTO) {
    return await this.bookingService.search(searchDto);
  }
}
