import 'reflect-metadata';
import { SomeService, AnotherService } from '@tsy-link/pkg';
import { container, injectable } from '@tsy-link/utils/lib/tsyringe';

@injectable()
class RequiresService {
  constructor(private s: SomeService) {}

  get service() {
    console.log('>', container.resolve(SomeService));
    console.log('>', container.resolve(AnotherService));
    return this.s;
  }
}

const rs0 = container.resolve(RequiresService);
console.log(rs0);
rs0.service.run();

const s1 = container.resolve(SomeService);
console.log('s1:', s1);
