"use strict";
class Visitor {
}
class ExeVisitor extends Visitor {
    visit(file) {
        console.log(file.constructor.name);
        switch (file.constructor.name) {
            case "TextFile":
                console.log(`${JSON.stringify(file)}`);
                console.log(`展開中`);
                console.log(`${file.Data}`);
                break;
            case "ImageFile":
                console.log(`${JSON.stringify(file)}`);
                console.log(`展開中`);
                for (let i = 0; i < file.Data; i++) {
                    for (let j = 0; j < file.Data; j++) {
                        process.stdout.write('*');
                    }
                    console.log('');
                }
                break;
            default:
        }
    }
}
class MyFile {
    get Data() {
        return this.data;
    }
    constructor(fileName, data) {
        this.fileName = fileName;
        this.data = data;
    }
}
class TextFile extends MyFile {
    constructor(fileName, data) {
        super(fileName, data);
        this.fileName = fileName + '.txt';
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
class ImageFile extends MyFile {
    constructor(fileName, data) {
        super(fileName, data);
        this.fileName = fileName + '.png';
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
let memo = new TextFile('memo', 5);
let image = new ImageFile('memo', 5);
memo.accept(new ExeVisitor());
console.log('-----------');
image.accept(new ExeVisitor());
