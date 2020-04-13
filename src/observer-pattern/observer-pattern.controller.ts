import { Controller, Get, Post, Body, UseFilters } from '@nestjs/common';
import { ObservableService } from './observable/observable.service';
import { ObserverDTO } from './observable/DTOS/Observer.dto';
import { IObserver } from './observer/interfaces/IObserver';
import { HttpExceptionFilter } from './exception_filters/http-exeption.filter';

@Controller('observer-pattern')
@UseFilters(HttpExceptionFilter) // Best practice to use Class instead of Instance
export class ObserverPatternController {
  constructor(private _observableService: ObservableService) {}

  @Post()
  addObserver(@Body() body: ObserverDTO): IObserver {
    try {
      const observerAdded: IObserver = this._observableService.subscribe(body);
      this._observableService.notify('YUHU!!!'); // Immediatly notyfying when a new observer is added
      return observerAdded;
    } catch (error) {
      console.error('=(');
      throw new Error('=(');
    }
  }
}
