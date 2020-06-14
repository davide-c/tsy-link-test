import { injectable } from './tsyringe';

@injectable()
export class Config {
  public value = {
    test: true,
  };
  constructor(protected cfg: { test: boolean }) {}
}
