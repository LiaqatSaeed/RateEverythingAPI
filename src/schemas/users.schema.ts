import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  age: string;

  @Prop()
  userId: string;

  @Prop()
  password: string;

  @Prop()
  created_Date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);