import { Controller, Get, Inject } from '@midwayjs/decorator';
import { ILogger } from '@midwayjs/logger';
import { TestError } from '../../../error/test.error';

@Controller('/')
export class HomeController {
  @Inject()
  logger: ILogger;
  @Get('/')
  async home(): Promise<string> {
    this.logger.info('访问了首页');
    return 'Hello Midwayjs!';
  }

  @Get('/test_error_code')
  async testErrorCode() {
    throw new TestError();
  }
}
