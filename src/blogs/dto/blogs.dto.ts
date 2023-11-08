
export class createBlogDto {
  title: string;
  body: string;
}

export class getBlogsResDto {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}