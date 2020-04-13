import { Module } from '@nestjs/common';
import { ObserverService } from './observer/observer.service';
import { ObservableService } from './observable/observable.service';
import { ObserverPatternController } from './observer-pattern.controller';
import { APP_FILTER } from '@nestjs/core/constants';
import { HttpExceptionFilter } from './exception_filters/http-exeption.filter';
// import { Observable } from './observable/Observable';
// import { Observer } from './observer/Observer';

@Module({
  // imports: [Observable, Observer],
  controllers: [ObserverPatternController],
  providers: [
    ObserverService,
    ObservableService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
  exports: [ObservableService], //    NO NEED TO EXPORT SERVICES AS THEY ARE USED IN THIS MODULE ONLY - I WAS WRONG, IT IS NEEDED!
})
export class ObserverPatternModule {}
