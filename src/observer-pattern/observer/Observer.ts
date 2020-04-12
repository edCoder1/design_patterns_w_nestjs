import { IObserver } from './interfaces/IObserver';

export class Observer implements IObserver {
  constructor(public name: string, public description: string) {}

  public update(data: string): void {
    console.error(data);
  }
}
