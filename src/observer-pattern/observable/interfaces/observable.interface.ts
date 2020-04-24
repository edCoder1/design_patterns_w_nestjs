import { IObserver } from 'src/observer-pattern/observer/interfaces/observer.interface';

export interface IObservable {
  observers: Set<IObserver>;
  subscribe(observer: IObserver): void;
  notify(data: any): void;
}
