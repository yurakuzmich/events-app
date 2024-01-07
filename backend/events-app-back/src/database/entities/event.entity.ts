import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('uuid')
  locationId: string;
}
