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

  filter(start: string, end: string, locationId: UUID) {
    const filteredEvents = events.filter((event) => {
      const rangeStart = start ? new Date(start).getTime() : 0;
      const rangeEnd = end ? new Date(end).getTime() : Date.now();
      const eventStarts = new Date(event.startDate).getTime();

      const isEventInsideRange =
        eventStarts > rangeStart && eventStarts < rangeEnd;

      const isEventInLocation = locationId
        ? event.locationId === locationId
        : true;

      return isEventInsideRange && isEventInLocation;
    });

    return filteredEvents;
  }

  update(id: UUID, updateEventInput: UpdateEventInput) {
    const eventToUpdateIndex = events.findIndex((event) => event.id === id);

    events[eventToUpdateIndex] = { ...events, ...updateEventInput };

    return events[eventToUpdateIndex];
  }

  remove(id: UUID) {
    return events.filter((e) => e.id !== id);
  }
}
