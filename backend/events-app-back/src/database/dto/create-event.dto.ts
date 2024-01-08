import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @IsString()
  @IsDateString()
  endDate: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  locationId: any;
}
