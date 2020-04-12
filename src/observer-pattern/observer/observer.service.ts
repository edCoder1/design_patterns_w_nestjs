import { Injectable } from '@nestjs/common';
// import { IObserver } from './interfaces/IObserver';
import { ObserverDTO } from '../observable/DTOS/Observer.dto';
import { Observer } from './Observer';
import { Observable } from '../observable/Observable';

@Injectable()
export class ObserverService {
  constructor() {}
}
