"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeakAttackCommand {
    constructor(id) {
        this.name = 'WeakAttack';
        this.id = id;
    }
    SetCharacter(character) {
        this.character = character;
    }
    Execute() {
        this.character.Action(this.name + ':' + this.id);
    }
}
exports.WeakAttackCommand = WeakAttackCommand;
