import { InputType, Int, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@InputType()
export class CreateEventInput {
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
