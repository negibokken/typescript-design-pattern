import { AttackCommand } from './AttackCommand';
import { IOrderList } from './IOrderList';
import { WeakAttackCommand } from './WeakAttackCommand';
import { ICharacter } from './ICharacter';
import { Controller } from './controller';
import { MainCharacter } from './MainCharacter';

class User {
  main() {
    const atkOrders: IOrderList[] = [];
    const weakAtkOrders: IOrderList[] = [];
    const sonGoku: ICharacter = new MainCharacter();
    const controller: Controller = new Controller();
    for (let i: number = 0; i < 5; i++) {
      atkOrders[i] = new AttackCommand(i);
      atkOrders[i].SetCharacter(sonGoku);
      controller.AddOrder(atkOrders[i]);
    }

    for (let i: number = 0; i < 5; i++) {
      weakAtkOrders[i] = new WeakAttackCommand(i);
      weakAtkOrders[i].SetCharacter(sonGoku);
      controller.AddOrder(weakAtkOrders[i]);
    }
    controller.Execute();
    console.log('***は死んでしまった');
    controller.UndoCommand();
    controller.Execute();
    console.log('***は瀕死');
  }
}

const user: User = new User();
user.main();
