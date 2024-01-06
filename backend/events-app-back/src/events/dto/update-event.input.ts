import { UUID } from 'crypto';
import { CreateEventInput } from './create-event.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
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
  locationId: UUID | null;
}
