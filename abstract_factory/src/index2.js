class Human {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `My name is ${this.name}`;
    }
}
class God {
    constructor() { }
    static getInstance() {
        return this.instance;
    }
    sayHello() {
        return 'I am God';
    }
}
God.instance = new God();
console.log(new Human('alice').sayHello());
console.log(new Human('bob').sayHello());
let god = new God();
let god2 = new God();
console.log(god === god2);
let god3 = God.getInstance();
let god4 = God.getInstance();
console.log(god3 === god4);
