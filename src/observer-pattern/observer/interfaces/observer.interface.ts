export interface IObserver {
  name: string;
  description: string;
  update(data: string): void;
}
