import { MidwayError } from '@midwayjs/core';
import { CustomErrorCode } from '../interface/enum.interface';

export class TestError extends MidwayError {
  constructor() {
    super('my custom error', CustomErrorCode.BUSINESS_TEST_CODE);
  }
}
