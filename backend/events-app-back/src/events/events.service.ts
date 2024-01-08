import { Inject, Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UUID } from 'crypto';

import { EventsDBService } from 'src/database/services/events-db.service';

@Injectable()
export class EventsService {

  constructor(
    @Inject(EventsDBService) private dbService: EventsDBService,
  ) {}

  async create(createEventInput: CreateEventInput) {
    const newEvent = {
      name: createEventInput.name,
      startDate: createEventInput.startDate,
      endDate: createEventInput.endDate,
      description: createEventInput.description,
      locationId: createEventInput.locationId,
    };

    console.log(newEvent);
    try {
      return await this.dbService.create(newEvent);
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

  async findOne(id: UUID) {
    try {
      return await this.dbService.findOne(id)
    } catch (error) {
      console.log(error);
    }
  }

  async filter(start: string, end: string, locationId: UUID) {}

  async update(id: UUID, updateEventInput: UpdateEventInput) {
    try {
      return await this.dbService.update(id, updateEventInput);
    } catch (error) {
      console.log(error)
    }
  }

  async remove(id: UUID) {
    try {
      return await this.dbService.remove(id);
    } catch (error) {
      console.log(error)
    }
  }
}
