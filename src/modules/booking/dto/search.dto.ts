import { ApiProperty } from "@nestjs/swagger";

export class SearchDTO {
  
  @ApiProperty({})
  from: string;

  @ApiProperty({})
  to: string;

  @ApiProperty({})
  date: Date;
}
