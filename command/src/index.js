"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AttackCommand_1 = require("./AttackCommand");
const WeakAttackCommand_1 = require("./WeakAttackCommand");
const controller_1 = require("./controller");
const MainCharacter_1 = require("./MainCharacter");
class User {
    main() {
        const atkOrders = [];
        const weakAtkOrders = [];
        const sonGoku = new MainCharacter_1.MainCharacter();
        const controller = new controller_1.Controller();
        for (let i = 0; i < 5; i++) {
            atkOrders[i] = new AttackCommand_1.AttackCommand(i);
            atkOrders[i].SetCharacter(sonGoku);
            controller.AddOrder(atkOrders[i]);
        }
        for (let i = 0; i < 5; i++) {
            weakAtkOrders[i] = new WeakAttackCommand_1.WeakAttackCommand(i);
            weakAtkOrders[i].SetCharacter(sonGoku);
            controller.AddOrder(weakAtkOrders[i]);
        }
        controller.Execute();
        console.log('フリーザは死んでしまった');
        controller.UndoCommand();
        controller.Execute();
        console.log('フリーザは瀕死');
    }
}
const user = new User();
user.main();
