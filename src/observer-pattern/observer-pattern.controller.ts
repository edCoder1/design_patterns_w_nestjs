import { Controller, Get, Post, Body } from '@nestjs/common';
import { ObservableService } from './observable/observable.service';
import { ObserverDTO } from './observable/DTOS/Observer.dto';
import { IObserver } from './observer/interfaces/IObserver';

@Controller('observer-pattern')
export class ObserverPatternController {
  constructor(private _observableService: ObservableService) {}

  @Post()
  addObserver(@Body() body: ObserverDTO): IObserver {
    const observerAdded: IObserver = this._observableService.subscribe(body);
    this._observableService.notify('YUHU!!!'); // Immediatly notyfying when a new observer is added
    return observerAdded;
  }
}
