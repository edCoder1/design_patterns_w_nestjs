import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ObservableService } from './observer-pattern/observable/observable.service';
import { ObserverDTO } from './observer-pattern/observable/DTOS/Observer.dto';
import { IObserver } from './observer-pattern/observer/interfaces/IObserver';

@Controller('observer-pattern')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private _observableService: ObservableService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addObserver(@Body() body: ObserverDTO): IObserver {
    const observerAdded: IObserver = this._observableService.subscribe(body);
    this._observableService.notify('YUHU!!!'); // Immediatly notyting when a new observer is added
    return observerAdded;
  }
}
