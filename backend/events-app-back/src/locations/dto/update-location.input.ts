import { UUID } from 'crypto';
import { CreateLocationInput } from './create-location.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLocationInput extends PartialType(CreateLocationInput) {
  @Field(() => String, { description: 'Location ID' })
  id: UUID;

  @Field(() => String, { description: 'Location Name' })
  name: string;

  @Field(() => String, { description: 'Location Description' })
  description: string;
}
