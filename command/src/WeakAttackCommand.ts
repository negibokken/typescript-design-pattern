import { ICharacter } from './ICharacter';
import { IOrderList } from './IOrderList';

export class WeakAttackCommand implements IOrderList {
  private name: string = 'WeakAttack';
  public id: number;
  public character: ICharacter;

  constructor(id: number) {
    this.id = id;
  }

  public SetCharacter(character: ICharacter): void {
    this.character = character;
  }

  public Execute(): void {
    this.character.Action(this.name + ':' + this.id);
  }

}
