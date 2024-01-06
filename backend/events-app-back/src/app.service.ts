import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const obj = {
      id: '0',
      begins: '2020-01-01',
      ends: '2020-01-03',
      title: 'title',
      description: 'description of the event',
      location: {
        title: 'location-name',
        lat: '0',
        lng: '0',
      },
    };

    return JSON.stringify(obj);
  }
}
