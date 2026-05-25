export interface ArticleContentParagraph {
  type: 'text' | 'quote' | 'heading' | 'sub-image';
  value: string;
  subValue?: string;
}

export interface DetailedBlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  coverImage: string;
  sections: ArticleContentParagraph[];
}
