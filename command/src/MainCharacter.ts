import { ICharacter } from './ICharacter';

export class MainCharacter implements ICharacter {
  public Action(msg: string): void {
    console.log(msg);
  }
}
