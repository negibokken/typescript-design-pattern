import { IOrderList } from './IOrderList';
import { ICharacter } from './ICharacter';

export class AttackCommand implements IOrderList {
  public id: number;
  public name: string;
  public character: ICharacter;

  constructor(id: number) {
    this.id = id;
    this.name = 'Attack';
  }

  public SetCharacter(character: ICharacter): void {
    this.character = character;
  }

  public Execute(): void {
    this.character.Action(this.name + ':' + this.id);
  }

}
