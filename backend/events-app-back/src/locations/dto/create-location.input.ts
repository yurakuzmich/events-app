import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field(() => String, { description: 'Location Name' })
  name: string;

  @Field(() => String, { description: 'Location Description' })
  description: string;
}
