import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventDBEntity } from './entities/event.entity';
import { LocationDBEntity } from './entities/location.entity';
import { LocationDBService } from './services/locations-db.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventDBEntity, LocationDBEntity])
  ],
  providers: [LocationDBService],
  exports: [LocationDBService],
})
export class DatabaseModule {}
