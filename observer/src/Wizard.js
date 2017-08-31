"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observer_1 = require("./Observer");
class Wizard extends Observer_1.Observer {
    constructor() {
        super();
    }
    update(subject) {
        if (subject.getHp() < 40) {
            subject.setHp(subject.getHp() + 60);
            console.log(`魔法使いは回復魔法を使った。勇者のHPは${subject.getHp()}になった`);
        }
    }
}
exports.Wizard = Wizard;
