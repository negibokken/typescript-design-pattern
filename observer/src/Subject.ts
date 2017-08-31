import {Observer} from './Observer';

export abstract class Subject {
  protected hp: number;
  private observerList: Observer[] = [];

  constructor(hp: number) {
    this.hp = hp
  }

  public addObserver(observer: Observer): void {
    this.observerList.push(observer);
  }

  public notifyObserver(): void {
    const self = this;
    this.observerList.forEach((obs: Observer) => {
      obs.update(self);
    });
  }

  public getHp(): number {
    return this.hp;
  }

  public setHp(hp: number): number {
    return this.hp = hp;
  }
}

