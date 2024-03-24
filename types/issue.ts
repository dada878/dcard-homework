interface Issue {
  title: string;
  body: string;
  number: number;
  created_at: string;
  labels: Array<Label>;
}