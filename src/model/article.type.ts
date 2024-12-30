export interface ArticleType {
  id?: string;
  author_name?: string;
  title: string;
  description: string;
  image: string;
  category?: string;
}

export interface categoryType {
  id?: string;
  created_at?: string;
  updated_at?: string;
  name: string;
  image: string;
}
