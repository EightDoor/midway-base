import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1648890990968_9932',
  koa: {
    port: 7001,
  },
  midwayLogger: {
    default: {
      maxSize: '100m',
      maxFiles: '10d',
    },
  },
} as MidwayConfig;
