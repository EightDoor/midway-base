import { Controller, Get, Logger } from '@midwayjs/decorator';
import { ILogger } from '@midwayjs/logger';

@Controller('/')
export class HomeController {
  @Logger()
  logger: ILogger;

  @Get('/')
  async home(): Promise<string> {
    this.logger.info('访问了首页');
    return 'Hello Midwayjs!';
  }
}
