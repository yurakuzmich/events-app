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

  // @Column('uuid')
  // locationId: string;

  // @OneToOne(() => LocationDBEntity, location => location.id)
  // locationId: LocationDBEntity

  @ManyToOne(() => LocationDBEntity, location => location.id, {onDelete: 'NO ACTION'})
  @JoinColumn({name: 'locationId'})
  location: LocationDBEntity;
}
