export interface BlogPostCard {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  date?: string;
  readTime: string;
  href: string;
  isLargeFeatured?: boolean;
}
