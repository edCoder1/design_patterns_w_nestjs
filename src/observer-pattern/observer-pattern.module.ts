import { Module } from '@nestjs/common';
import { ObserverService } from './observer/observer.service';
import { ObservableService } from './observable/observable.service';
import { ObserverPatternController } from './observer-pattern.controller';
// import { APP_FILTER } from '@nestjs/core/constants';
// import { HttpExceptionFilter } from './exception_filters/http-exeption.filter';
// import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [ObserverPatternController],
  providers: [
    ObserverService,
    ObservableService,
    // This way or on each controller like I'm doing it right now
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // This way or on each controller like I'm doing it right now
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
  exports: [], // NO NEED TO EXPORT SERVICES AS THEY ARE USED IN THIS MODULE ONLY - I WAS WRONG, IT IS NEEDED! ?
})
export class ObserverPatternModule {}
