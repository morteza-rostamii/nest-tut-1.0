import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { ExampleMiddleware } from 'src/example/example.middleware';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService]
})

export class BlogsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // setup middleware
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'blogs',
      method: RequestMethod.GET,
    });
  }
}
