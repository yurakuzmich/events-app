import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UUID, randomUUID } from 'crypto';

import { events } from './../mock-data/events';

@Injectable()
export class EventsService {
  create(createEventInput: CreateEventInput) {
    const newEvent = {
      id: randomUUID(),
      name: createEventInput.name,
      startDate: createEventInput.startDate,
      endDate: createEventInput.endDate,
      description: createEventInput.description,
      locationId: randomUUID(),
    };
    events.push(newEvent);
    return newEvent;
  }

  findAll() {
    return events;
  }

  findOne(id: UUID) {
    const event = events.find((e) => e.id === id);
    return event;
  }

  update(id: UUID, updateEventInput: UpdateEventInput) {
    return `This action updates a #${id} event`;
  }

  remove(id: UUID) {
    return events.filter((e) => e.id !== id);
  }
}
