import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UUID, randomUUID } from 'crypto';
// import { UUID } from 'crypto';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  @Query(() => [Event], { name: 'events' })
  findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => Event, { name: 'event' })
  findOne(@Args('id', { type: () => String }) id: UUID) {
    return this.eventsService.findOne(id);
  }

  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Event)
  removeEvent(@Args('id', { type: () => Int }) id: UUID) {
    return this.eventsService.remove(id);
  }
}
