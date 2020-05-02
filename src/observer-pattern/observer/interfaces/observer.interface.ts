import { ObserverDTO } from 'src/observer-pattern/observable/dtos/Observer.dto';

export interface IObserver {
  name: string;
  description: string;
  update(data: ObserverDTO): void;
}
