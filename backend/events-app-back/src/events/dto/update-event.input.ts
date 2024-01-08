import { UUID } from 'crypto';
import { CreateEventInput } from './create-event.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventInput extends PartialType(CreateEventInput) {
  @Field(() => String, { description: 'Event ID' })
  id: UUID;

  @Field(() => String, { description: 'Event name', nullable: true })
  name: string;

  @Field(() => String, { description: 'Event begins', nullable: true })
  startDate: string;

  @Field(() => String, { description: 'Event ends', nullable: true })
  endDate: string;

  @Field(() => String, { description: 'Event description', nullable: true })
  description: string;

  @Field(() => String, { description: 'Event location', nullable: true })
  locationId: UUID | null;
}
