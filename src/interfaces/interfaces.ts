export interface ITasks {
  id: number;
  title: string;
  date: string;
  description: string;
  priority: boolean;
  isDone?: boolean;
}
