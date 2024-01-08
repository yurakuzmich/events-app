import { Inject, Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { LocationDBService } from '../database/services/locations-db.service';

import { locations } from 'src/mock-data/locations';
import { randomUUID } from 'crypto';

@Injectable()
export class LocationsService {

  constructor(
    @Inject(LocationDBService) private dbService: LocationDBService,
  ) {}

  async create(createLocationInput: CreateLocationInput) {
    const newLocation = {
      name: createLocationInput.name,
      description: createLocationInput.description,
    };

    try {
      return await this.dbService.create(newLocation);
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.dbService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string) {
    try {
      return await this.dbService.findOne(id)
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, updateLocationInput: UpdateLocationInput) {
    try {
      return await this.dbService.update(id, updateLocationInput);
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: string) {
    try {
      return await this.dbService.remove(id);
    } catch (error) {
      console.log(error)
    }
  }
}
