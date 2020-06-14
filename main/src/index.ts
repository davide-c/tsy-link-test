import 'reflect-metadata';
import { SomeService, AnotherService, setup } from '@tsy-link/pkg';
import { container, injectable } from '@tsy-link/utils/lib/tsyringe';
import { Config } from '@tsy-link/utils';

@injectable()
class RequiresService {
  constructor(
    private s: SomeService,
    private as: AnotherService,
    private config: Config
  ) {}
}

setup();

container.register(Config, {
  useFactory: () => new Config({ test: true }),
});

const s0 = container.resolve(SomeService);
const a0 = container.resolve(AnotherService);
const rs0 = container.resolve(RequiresService);

console.log(s0, a0, rs0);

// childContainer
const childContainer = container.createChildContainer();

const s1 = childContainer.resolve(SomeService);
const a1 = childContainer.resolve(AnotherService);
const rs1 = childContainer.resolve(RequiresService);

console.log(s1, a1, rs1);
