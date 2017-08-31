import { Subject } from './Subject';

export abstract class Observer {
  constructor() {
  }

  public update(subject: Subject): void {}
}
