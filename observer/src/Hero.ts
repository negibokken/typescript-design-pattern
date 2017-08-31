import { Subject } from './Subject';


export class Hero extends Subject {
  constructor() {
    super(100);
  }

  public encountMonster(): void {
    const min = 0;
    const max = 100;
    let damage: number = Math.floor(Math.random() * (max + 1 - min)) + min ;
    this.hp -= damage;
    console.log('魔物が現れた');
    console.log(`魔物の攻撃！勇者は${damage}のダメージを受けた!`);

    // this.notifyObserver();

    if (this.hp <= 0 ) {
      this.hp = 0;
      console.log('勇者は力尽きた');
    } else {
      console.log(`現在の体力は${this.hp}だ`);
    }
  }
}
