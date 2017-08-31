"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_1 = require("./Hero");
const Wizard_1 = require("./Wizard");
const hero = new Hero_1.Hero();
const wizard = new Wizard_1.Wizard();
hero.addObserver(wizard);
[1, 2, 3, 4, 5].forEach(() => {
    hero.encountMonster();
});
