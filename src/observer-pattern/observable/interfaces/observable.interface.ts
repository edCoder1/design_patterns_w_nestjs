import { IObserver } from 'src/observer-pattern/observer/interfaces/observer.interface';
import { Observer } from 'src/observer-pattern/observer/observer';
import { ObserverDTO } from '../dtos/Observer.dto';

export interface IObservable {
  observers: Set<Observer>;
  subscribe(observer: IObserver): void;
  notify(data: ObserverDTO): void;
}
