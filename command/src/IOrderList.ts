import { ICharacter } from './ICharacter';

export interface IOrderList {
  SetCharacter(receiver: ICharacter): void;
  Execute(): void;
}
