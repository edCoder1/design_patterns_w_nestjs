import { Injectable } from '@nestjs/common';
import { ObserverDTO } from './dtos/Observer.dto';
import { IObservable } from './interfaces/observable.interface';
import { IObserver } from '../observer/interfaces/observer.interface';
import { Observer } from '../observer/observer';

@Injectable()
export class ObservableService implements IObservable {
  public observers: Set<IObserver> = new Set<IObserver>();

  public subscribe(observer: ObserverDTO): IObserver {
    const observerToAdd: IObserver = new Observer(
      observer.name,
      observer.description,
    ); // Creates a different object on each new Observer
    // const obs: any = observer.name; // With this fails.. as it does not meet IOBserver I think
    this.observers.add(observerToAdd);
    return observerToAdd;
  }

  public notify(data: ObserverDTO): void {
    console.log(1, this.observers);

    this.observers.forEach((observer: IObserver) => {
      observer.update(data.name);
      console.log(3, observer);
    });
  }
}
