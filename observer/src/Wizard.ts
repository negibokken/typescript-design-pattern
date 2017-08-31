import { Observer } from './Observer';
import { Subject } from './Subject';

export class Wizard extends Observer {
  constructor() {
    super();
  }
  public update(subject: Subject): void {
    if (subject.getHp() < 40) {
      subject.setHp(subject.getHp() + 60);
      console.log(`魔法使いは回復魔法を使った。勇者のHPは${subject.getHp()}になった`);
    }
  }
}

