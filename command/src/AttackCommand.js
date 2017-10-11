"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AttackCommand {
    constructor(id) {
        this.id = id;
        this.name = 'Attack';
    }
    SetCharacter(character) {
        this.character = character;
    }
    Execute() {
        this.character.Action(this.name + ':' + this.id);
    }
}
exports.AttackCommand = AttackCommand;
