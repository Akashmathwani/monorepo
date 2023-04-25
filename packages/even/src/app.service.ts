import { Injectable } from '@nestjs/common';
import {LOGGER} from "../../../library/logger/src/index"

@Injectable()
export class AppService {
  getHello(): string {
    console.log(LOGGER)
    return 'Hello World!';
  }
}
