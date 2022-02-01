export type BlogType = 'important' | 'casual';
export interface BlogInfo {
  title: string;
  desc: string;
  img: any;
  url: string;
  date: string;
  type: BlogType;
  tags: any[];
}
