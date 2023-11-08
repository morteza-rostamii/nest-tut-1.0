import { Injectable } from '@nestjs/common';

// business logic
@Injectable()
export class BlogsService {

  private blogs = [
    {
      id: 'sdsw343',
      title: 'this is a good blog',
      body: 'good luck with all the ful your going to have!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'sdsw343',
      title: 'this is a good blog',
      body: 'good luck with all the ful your going to have!',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  // Get: /blogs
  public gets() {
    return this.blogs;
  }
}
