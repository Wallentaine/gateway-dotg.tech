import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class SearchResponseDTO {

    @ApiProperty({})
    train_id: number;

    @ApiProperty({ example: 'Ростов-на-Дону->Москва'})
    global_route: string;

    @ApiProperty({ example: '25.10.2024 11:07:00'})
    startpoint_departure: string;

    @ApiProperty({ example: '26.10.2024 13:09:00'})
    endpoint_arrival: string;

    @ApiProperty({ type: () => DetailedRoute, isArray: true })
    @Type()
    detailed_route: DetailedRoute[];

    @ApiProperty({ type: () => Wagon, isArray: true })
    wagons_info: Wagon[];

    @ApiProperty({})
    available_seats_count: number
}

class DetailedRoute {

    @ApiProperty({})
    name: string;

    @ApiProperty({})
    num: number;

    @ApiProperty({ example: '25.10.2024 11:07:00'})
    arrival: string | null;

    @ApiProperty({ example: '26.10.2024 13:09:00'})
    departure: string | null
}

class WagonsInfo {
    
    @ApiProperty({})
    wagon_id: 0;

    @ApiProperty({})
    type: WagonType
  }

class Wagon extends WagonsInfo {
 
    @ApiProperty({ type: () => Seat, isArray: true})
    seats: Seat[]
}

class Seat {

    @ApiProperty({})
    seat_id: number;

    @ApiProperty({})
    seatNum: string;

    @ApiProperty({})
    block: string;

    @ApiProperty({})
    price: number;

    @ApiProperty({})
    bookingStatus: BookingStatus
  }
type BookingStatus = 'CLOSED' | 'BOOKED' | 'FREE'
type WagonType = 'PLATZCART' | 'COUPE'