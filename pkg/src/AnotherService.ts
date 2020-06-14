import { injectable } from '@tsy-link/utils/lib/tsyringe';

@injectable()
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
