"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("./Subject");
class Hero extends Subject_1.Subject {
    constructor() {
        super(100);
    }
    encountMonster() {
        const min = 0;
        const max = 100;
        let damage = Math.floor(Math.random() * (max + 1 - min)) + min;
        this.hp -= damage;
        console.log('魔物が現れた');
        console.log(`魔物の攻撃！勇者は${damage}のダメージを受けた!`);
        // this.notifyObserver();
        if (this.hp <= 0) {
            this.hp = 0;
            console.log('勇者は力尽きた');
        }
        else {
            console.log(`現在の体力は${this.hp}だ`);
        }
    }
}
exports.Hero = Hero;
