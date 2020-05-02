import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('validating.....');

    const { error } = this.schema.validate(value);
    if (error) {
      console.log('error: ', error);

      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
