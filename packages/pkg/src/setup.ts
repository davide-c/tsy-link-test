import { container } from '@tsy-link/utils/lib/tsyringe';
import { AnotherService } from './AnotherService';

export const setup = () => {
  container.register<AnotherService>(AnotherService, {
    useValue: new AnotherService('label_1234567890'),
  });
};
