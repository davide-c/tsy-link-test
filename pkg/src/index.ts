import { injectable, container } from '@tsy-link/utils/lib/tsyringe';

@injectable()
export class SomeService {
  public value = 789;

  public run() {
    console.log(this.value);
  }
}

@injectable()
export class AnotherService {
  constructor(private label: string) {}

  public run(): void {
    console.log('*', this.label);
  }

  public getLabel(): string {
    return this.label;
  }
}

container.register<AnotherService>(AnotherService, {
  useValue: new AnotherService('label_1234567890'),
});
