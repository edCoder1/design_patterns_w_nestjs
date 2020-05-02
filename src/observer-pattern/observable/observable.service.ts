import { Injectable } from '@nestjs/common';
import { ObserverDTO } from './dtos/Observer.dto';
import { IObservable } from './interfaces/observable.interface';
import { Observer } from '../observer/observer';

@Injectable()
export class ObservableService implements IObservable {
  public observers: Set<Observer> = new Set<Observer>();

  public createObserver(observer: ObserverDTO): Observer {
    console.log(0, observer);

    const newObserver: Observer = new Observer(
      observer.name,
      observer.description, // Creates a different object on each new Observer
    );
    return newObserver;
  }

  public subscribe(observerToAdd: Observer): void {
    this.observers.add(observerToAdd);
  }

  public notify(data: ObserverDTO): void {
    console.log(1, this.observers);

    this.observers.forEach((observer: Observer) => {
      observer.update(data);
      console.log(3, observer);
    });
  }
}
