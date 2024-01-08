import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { LocationDBEntity } from './location.entity';

@Entity()
export class EventDBEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  description: string;

  @ManyToOne(() => LocationDBEntity, location => location.id, {onDelete: 'SET NULL'})
  @JoinColumn({name: 'locationId'})
  location: LocationDBEntity;
}
