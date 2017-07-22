class Book {
    public title: string;
    constructor(_title: string) {
        this.title = _title;
    }

}

class MyIterator {
    public greeting: string;
}

class MyAggregate {
    private book: Book[];

    private iterator: MyIterator = new MyIterator();
}

let iterator: MyIterator = new MyIterator();
