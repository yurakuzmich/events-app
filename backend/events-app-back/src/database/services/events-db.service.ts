import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventDBEntity } from '../entities/event.entity';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

@Injectable()
export class EventsDBService {

  constructor(
    @InjectRepository(EventDBEntity)
    private readonly eventRepository: Repository<EventDBEntity>) {}
      
  async create(createEvent: CreateEventDto) {
    const event = this.eventRepository.create(createEvent);
    return this.eventRepository.save(event);
  }

  async findAll() {
    const events = await this.eventRepository.find();
    return events;
  }

  async findOne(id: string) {
    const event = await this.eventRepository.findOne({where: {id}});
    return event;
  }

  filter() {}

  async update(id, updateEvent: UpdateEventDto) {
    const eventToUpdate = await this.eventRepository.findOne({where: {id}});
    this.eventRepository.merge(await eventToUpdate, updateEvent); 
    return this.eventRepository.save(eventToUpdate);
  }

  async remove(id: string) {
    const eventToRemove = await this.eventRepository.findOne({where: {id}});

    if (!eventToRemove) {
      throw new NotFoundException(`Event with id ${id} not found`);
    }

    const deleteResult: DeleteResult = await this.eventRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new NotFoundException(`Event with id ${id} not found`);
    }
    return eventToRemove;
  }
}
