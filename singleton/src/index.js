// どんなときに使われるか？
// 一つじゃないと混乱を招くとき
// 例えば、ステートマシンの状態を管理しているものが Singleton として表現される
// 図書館の貸出帳
class Singleton {
    static getInstance() {
        if (Singleton.uniqueInstance == null) {
            console.log('Singleton is only one');
            this.uniqueInstance = new Singleton();
        }
        else {
            console.log('Singleton should be only one');
        }
        return this.uniqueInstance;
    }
}
let curara = new Singleton();
let alice = Singleton.getInstance();
let bob = Singleton.getInstance();
console.log(curara);
console.log(bob);
console.log(alice);
