"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor() {
        this.commands = [];
    }
    AddOrder(command) {
        this.commands.push(command);
    }
    UndoCommand() {
        const command = this.commands.pop();
        console.log('undo - 削除された命令', command);
    }
    Execute() {
        this.commands.forEach((cmd) => {
            cmd.Execute();
        });
    }
}
exports.Controller = Controller;
