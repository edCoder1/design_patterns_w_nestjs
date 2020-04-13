import { Injectable } from '@nestjs/common';
import { ObserverDTO } from './DTOS/Observer.dto';
import { Observer } from '../observer/Observer';
import { IObservable } from './interfaces/IObservable';
import { IObserver } from '../observer/interfaces/IObserver';

@Injectable()
export class ObservableService implements IObservable {
  public observers: Set<IObserver> = new Set<IObserver>();

  public subscribe(observer: ObserverDTO): Observer {
    const observerToAdd = new Observer(observer.name, observer.description);
    this.observers.add(observerToAdd);
    return observerToAdd;
  }

  public notify(data: string): void {
    console.error('ok!', this.observers);

    this.observers.forEach((observer: IObserver) => {
      observer.update(data);
    });
  }
}
