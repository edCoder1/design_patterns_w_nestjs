import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ObservableService } from './observable/observable.service';
import { ObserverDTO } from './observable/dtos/Observer.dto';
import { IObserver } from './observer/interfaces/observer.interface';
import { HttpExceptionFilter } from './exception_filters/http-exeption.filter';

@Controller('observer-pattern')
@UseFilters(HttpExceptionFilter) // Best practice to use Class instead of Instance
export class ObserverPatternController {
  constructor(private _observableService: ObservableService) {}

  @Get()
  async getError() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Post()
  addObserver(@Body() body: ObserverDTO): IObserver {
    try {
      const observerAdded: IObserver = this._observableService.subscribe(body);
      this._observableService.notify(body); // Immediatly notyfying when a new observer is added
      return observerAdded;
    } catch (error) {
      console.error('=(');
      throw new Error('=..(');
    }
  }
}
