import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookDTO, SearchDTO, StandQueueDTO, SearchResponseDTO } from './dto';
import { BookingService } from './booking.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Сервис бронирования')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOkResponse({ type: SearchResponseDTO, status: 200 })
  @Get('search')
  public async search(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('date') date: Date,
  ) {
    return await this.bookingService.search({ from, to, date });
  }

  @ApiOkResponse({ status: 201 })
  @Post('book')
  public async book(@Body() bookDto: BookDTO) {
    return await this.bookingService.book(bookDto);
  }

  @ApiOkResponse({ status: 201 })
  @Post('stand-queue')
  public async standQueue(@Body() standQueueDto: StandQueueDTO) {
    return await this.bookingService.standQueue(standQueueDto);
  }
}
