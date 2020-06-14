import { injectable, container } from '@tsy-link/utils/lib/tsyringe';
import { Config } from '@tsy-link/utils';

@injectable()
export class SomeService {
  public value = 789;

  constructor(private config: Config) {}

  public run() {
    console.log(this.value);
  }
}
