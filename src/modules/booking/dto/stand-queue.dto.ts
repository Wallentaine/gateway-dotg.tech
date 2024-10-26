import { ApiProperty } from "@nestjs/swagger";

export class StandQueueDTO {
  
  @ApiProperty({})
  dateFrom: string;

  @ApiProperty({})
  dateTo: string

  @ApiProperty({})
  from: string;

  @ApiProperty({})
  to: string;

  @ApiProperty({})
  priceFrom: number;

  @ApiProperty({})
  priceTo: number;

  @ApiProperty({})
  wagonType: 'COUPE' | 'PLATZCART';

  @ApiProperty({})
  seatCount: number;
}
