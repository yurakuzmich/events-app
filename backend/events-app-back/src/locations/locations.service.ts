import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';

import { locations } from 'src/mock-data/locations';
import { randomUUID } from 'crypto';

@Injectable()
export class LocationsService {
  create(createLocationInput: CreateLocationInput) {
    const newLocation = {
      id: randomUUID(),
      name: createLocationInput.name,
      description: createLocationInput.description,
    };

    locations.push(newLocation);

    return newLocation;
  }

  findAll() {
    return locations;
  }

  findOne(id: string) {
    const location = locations.find((location) => location.id === id);
    return location;
  }

  update(id: string, updateLocationInput: UpdateLocationInput) {
    const locationToUpdateIndex = locations.findIndex(
      (location) => location.id === id,
    );

    locations[locationToUpdateIndex] = { ...locations, ...updateLocationInput };

    return locations[locationToUpdateIndex];
  }

  remove(id: string) {
    const elementToRemoveIndex = locations.findIndex(
      (location) => location.id === id,
    );
    return locations.splice(elementToRemoveIndex, 1);
  }
}
