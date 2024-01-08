import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EventDBEntity } from './event.entity';

@Entity()
export class LocationDBEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(type => EventDBEntity, event => event.location, {onDelete: 'CASCADE'})
  events: EventDBEntity[];
}