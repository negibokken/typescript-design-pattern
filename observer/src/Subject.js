"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(hp) {
        this.observerList = [];
        this.hp = hp;
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    notifyObserver() {
        const self = this;
        this.observerList.forEach((obs) => {
            obs.update(self);
        });
    }
    getHp() {
        return this.hp;
    }
    setHp(hp) {
        return this.hp = hp;
    }
}
exports.Subject = Subject;
