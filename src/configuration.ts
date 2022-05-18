import { Configuration, App, Logger } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
// import { DefaultErrorFilter } from './filter/default.filter';
// import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { ILogger } from '@midwayjs/logger';

@Configuration({
  imports: [
    koa,
    validate,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;
  @Logger()
  logger: ILogger;

  async onConfigLoad() {
    this.logger.info('配置文件加载，我们可以在这里去修改配置');
  }

  async onReady() {
    // add middleware
    this.app.useMiddleware([ReportMiddleware]);
    // add filter
    // this.app.useFilter([NotFoundFilter, DefaultErrorFilter]);
    this.logger.info('依赖注入容器准备完毕，可以在这个阶段做大部分的事情');
  }

  async onServerReady() {
    this.logger.info('服务启动完成，可以拿到 server');
  }

  async onStop() {
    this.logger.info('应用即将关闭，在这里清理资源');
  }
}
