import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
export class Location {
  @Field(() => String, { description: 'Location ID' })
  id: UUID;

  @Field(() => String, { description: 'Location Name' })
  name: string;

  @Field(() => String, { description: 'Location Description' })
  description: string;

  //TODO will be good to add [lat, lng] field
}
