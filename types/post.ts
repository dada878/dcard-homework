export interface Post {
  title: string;
  content: string;
  category: string;
  tags: Array<string>;
  date: Date;
  id: number;
}