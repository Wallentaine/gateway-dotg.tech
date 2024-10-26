import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookDTO, SearchDTO, StandQueueDTO } from './dto';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get('search')
  public async search(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('date') date: Date,
  ) {
    return await this.bookingService.search({ from, to, date });
  }

  @Post('book')
  public async book(@Body() bookDto: BookDTO) {
    return await this.bookingService.book(bookDto);
  }

  @Post('stand-queue')
  public async standQueue(@Body() standQueueDto: StandQueueDTO) {
    return await this.bookingService.standQueue(standQueueDto);
  }
}
