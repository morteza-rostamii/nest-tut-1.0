import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('blogs')
export class BlogsController {
  // Get: /blogs
  @Get()
  public gets() {
    return 'all blogs';
  }

  // Get: /blogs/:id
  @Get('/:slug')
  public get(@Param('sluge') slug: string) {
    return `one blog ${slug}`;
  }

  // Post: /blogs
  @Post()
  public create(
    @Body() body: any
  ) {
    return 'create blog';
  }

  // Put: /blogs/:id
  public update(@Body() body: any) {
    return 'update blog';
  }

  // Delete: /blogs/:id
  public delete(@Body() body: any) {
    return 'delete blog';
  }
}
