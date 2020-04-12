import { IObservable } from './interfaces/IObservable';
import { IObserver } from '../observer/interfaces/IObserver';

export class Observable implements IObservable {
  public observers = new Set<IObserver>();

  public subscribe(observer: IObserver): void {
    this.observers.add(observer);
  }

  public notify(data: string): void {
    this.observers.forEach((observer: IObserver) => {
      observer.update(data);
    });
  }
}
