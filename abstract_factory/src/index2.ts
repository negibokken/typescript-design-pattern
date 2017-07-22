interface Being {
    sayHello(): string;
}

class Human implements Being {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sayHello(): string {
        return `My name is ${this.name}`;
    }
}

class God implements Being {
    private static instance: God = new God();

    public static getInstance(): God {
        return this.instance;
    }

    constructor() { /* empty */ }

    public sayHello(): string {
        return 'I am God';
    }
}

console.log(new Human('alice').sayHello());
console.log(new Human('bob').sayHello());

let god: God = new God();
let god2: God = new God();
console.log(god === god2);

let god3: God = God.getInstance();
let god4: God = God.getInstance();
console.log(god3 === god4);


