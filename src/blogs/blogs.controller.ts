import { Body, Controller, Delete, Get, Ip, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { createBlogDto, getBlogsResDto } from './dto/blogs.dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {

  // put service in constructor
  constructor(
    private readonly blogsService:BlogsService, 
  ) {}

  // Get: /blogs
  @Get()
  public gets(@Ip() ip: any): getBlogsResDto[] {
    // call a service
    return this.blogsService.gets();
  }

  // Get: /blogs/:id
  @Get('/:slug')
  public get(@Param('slug') slug: string) {
    return `one blog ${slug}`;
  }

  // Post: /blogs
  @Post()
  public create(
    @Body() body: createBlogDto
    //@Body('username') username: string,
  ) {
    return body;
    //return `user: ${username}`
  }

  // Put: /blogs/:id
  @Put('/:id')
  public update(
    // pip: validate uuid
    @Body('id', new ParseUUIDPipe()) id: string,
  ) {
    return 'update blog';
  }

  // Delete: /blogs/:id
  @Delete('/:id')
  public delete(
    @Body('id') id: string,
  ) {
    return 'delete blog';
  }
}
