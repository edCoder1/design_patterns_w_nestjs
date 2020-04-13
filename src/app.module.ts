import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObserverPatternModule } from './observer-pattern/observer-pattern.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './observer-pattern/exception_filters/all-exceptions.filter';
@Module({
  imports: [ObserverPatternModule],
  controllers: [AppController],
  providers: [
    AppService,
    // Globally aplied exception filter
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
