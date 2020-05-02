import { IObserver } from './interfaces/observer.interface';
import { ObserverDTO } from '../observable/dtos/Observer.dto';

export class Observer implements IObserver {
  constructor(public name, public description) {}

  update(data: ObserverDTO) {
    console.log(2, data.data_passed);
  }
}
