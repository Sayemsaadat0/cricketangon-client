export interface ArticleType {
  id?: string;
  author_name?: string;
  title: string;
  description: string;
  categoryId?: number;
  image: string;
  category?: string;
  created_at?: string;
}

export interface categoryType {
  id?: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  image: string;
}
