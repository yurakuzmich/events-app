import { ObjectType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
export class Event {
  @Field(() => String, { description: 'Event ID' })
  id: UUID;

  @Field(() => String, { description: 'Event name' })
  name: string;

  @Field(() => String, { description: 'Event begins' })
  startDate: string;

  @Field(() => String, { description: 'Event ends' })
  endDate: string;

  @Field(() => String, { description: 'Event description' })
  description: string;

  @Field(() => String, { description: 'Event location' })
  locationId: UUID;
}
