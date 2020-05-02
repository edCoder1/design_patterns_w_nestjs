import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  HttpException,
  HttpStatus,
  UsePipes,
} from '@nestjs/common';
import { ObservableService } from './observable/observable.service';
import { ObserverDTO } from './observable/dtos/Observer.dto';
import { IObserver } from './observer/interfaces/observer.interface';
import { HttpExceptionFilter } from './exception_filters/http-exeption.filter';
import { Observer } from './observer/observer';
import { JoiValidationPipe } from './pipes/validation.pipe.ts ';
import { ObserverSchema } from './pipes/observer.schema';

@Controller('observer-pattern')
@UseFilters(HttpExceptionFilter) // Best practice to use Class instead of Instance
export class ObserverPatternController {
  constructor(private _observableService: ObservableService) {}

  @Get()
  async getError() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(ObserverSchema))
  addObserver(@Body() body: ObserverDTO): Observer {
    try {
      const newObserver: Observer = this._observableService.createObserver(
        body,
      );

      this._observableService.subscribe(newObserver);

      this._observableService.notify(body); // Immediatly notyfying when a new observer is added

      return newObserver;
    } catch (error) {
      console.error('=(');
      throw new Error('=..(');
    }
  }
}
