import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AllExceptionsFilter } from './observer-pattern/exception_filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // FOR GLOBAL  FILTERS!
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  // FOR GLOBAL  PIPES!
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
