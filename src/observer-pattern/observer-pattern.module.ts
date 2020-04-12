import { Module } from '@nestjs/common';
import { ObserverService } from './observer/observer.service';
import { ObservableService } from './observable/observable.service';
import { ObserverPatternController } from './observer-pattern.controller';
// import { Observable } from './observable/Observable';
// import { Observer } from './observer/Observer';

@Module({
  // imports: [Observable, Observer],
  controllers: [ObserverPatternController],
  providers: [ObserverService, ObservableService],
  exports: [ObservableService],
})
export class ObserverPatternModule {}
