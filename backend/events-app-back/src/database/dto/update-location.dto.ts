import { UUID } from 'crypto';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateLocationDTO {
  @IsNotEmpty()
  id: UUID;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
