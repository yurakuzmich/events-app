import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345',
  database: 'events_db',
  entities: ['entities/*.ts'],
  logging: true,
  synchronize: true,
});
