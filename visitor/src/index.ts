abstract class Visitor {
  abstract visit(txtFile: TextFile|ImageFile): void;
}

class ExeVisitor extends Visitor {
  public visit(file: TextFile|ImageFile): void {
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
        for (let i: number=0; i < file.Data; i++) {
          for (let j: number=0; j < file.Data; j++) {
            process.stdout.write('*');
          }
          console.log('');
        }
        break;
      default:
    }
  }
}

interface Element{
  accept(visitor: Visitor): void;
}

abstract class MyFile {
  protected fileName: string;
  protected data: number;
  get Data(): number {
    return this.data;
  }
  constructor(fileName: string, data: number) {
    this.fileName = fileName;
    this.data = data;
  }

  public abstract accept(visitor: Visitor): void;
  }

class TextFile extends MyFile {
  constructor(fileName: string, data: number) {
    super(fileName, data);
    this.fileName = fileName + '.txt';
  }
  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

class ImageFile extends MyFile {
  constructor(fileName: string, data: number) {
    super(fileName, data);
    this.fileName = fileName + '.png';
  }
  accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}

let memo: TextFile= new TextFile('memo', 5)
let image: TextFile= new ImageFile('memo', 5)
memo.accept(new ExeVisitor())
console.log('-----------')
image.accept(new ExeVisitor())