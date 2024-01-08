import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { LocationDBEntity } from '../entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLocationDto } from '../dto/create-location.dto';
import { UpdateLocationDTO } from '../dto/update-location.dto';

@Injectable()
export class LocationDBService {

  constructor(
      @InjectRepository(LocationDBEntity)
      private readonly locationRepository: Repository<LocationDBEntity>) {}
      
  async create(createLocation: CreateLocationDto) {
    const location = await this.locationRepository.create(createLocation);
    return this.locationRepository.save(location);
  }

  async findAll() {
    const locations = await this.locationRepository.find();
    return locations;
  }

  async findOne(id: string) {
    const location = await this.locationRepository.findOne({where: {id}});
    return location;
  }

  filter() {}

  async update(id, updateLocation: UpdateLocationDTO) {
    const locationToUpdate = await this.locationRepository.findOne({where: {id}});
    this.locationRepository.merge(await locationToUpdate, updateLocation); 
    return this.locationRepository.save(locationToUpdate);
  }

  async remove(id: string) {
    const locationToRemove = await this.locationRepository.findOne({where: {id}});

    if (!locationToRemove) {
      throw new NotFoundException(`Location with id ${id} not found`);
    }

    const deleteResult: DeleteResult = await this.locationRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Location with id ${id} not found`);
    }
    return locationToRemove;
  }
}
