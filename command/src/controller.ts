import { IOrderList } from './IOrderList';

export class Controller {
  public commands: IOrderList[];
  constructor() {
    this.commands = [];
  }

  public AddOrder(command: IOrderList): void {
    this.commands.push(command);
  }

  public UndoCommand(): void {
    const command = this.commands.pop();
    console.log('undo - 削除された命令', command);
  }

  public Execute(): void {
    this.commands.forEach((cmd) => {
      cmd.Execute();
    });
  }
}
