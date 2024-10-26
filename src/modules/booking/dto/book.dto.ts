import { ApiProperty } from "@nestjs/swagger";

export class BookDTO {
  
  @ApiProperty({})
  trainId: number;

  @ApiProperty({})
  wagonId: number;

  @ApiProperty({})
  seatId: number;
}