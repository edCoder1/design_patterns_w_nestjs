import { IObserver } from 'src/observer-pattern/observer/interfaces/IObserver';

export interface IObservable {
  observers: Set<IObserver>;
  subscribe(observer: IObserver): void;
  notify(data: string): void;
}
