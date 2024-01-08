import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsResolver } from './locations.resolver';
import { LocationDBService } from 'src/database/services/locations-db.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LocationsResolver, LocationsService],
})
export class LocationsModule {}
