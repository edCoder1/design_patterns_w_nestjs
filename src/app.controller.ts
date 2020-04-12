import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ObservableService } from './observer-pattern/observable/observable.service';
import { ObserverDTO } from './observer-pattern/observable/DTOS/Observer.dto';
import { IObserver } from './observer-pattern/observer/interfaces/IObserver';

@Controller('')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private _observableService: ObservableService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
