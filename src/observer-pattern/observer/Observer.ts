import { IObserver } from './interfaces/observer.interface';

export class Observer implements IObserver {
  constructor(public name, public description) {}

  update(data: string) {
    console.log(2, data);
  }
}
