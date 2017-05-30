// どんなときに使われるか？
// 一つじゃないと混乱を招くとき
// 例えば、ステートマシンの状態を管理しているものが Singleton として表現される
// 図書館の貸出帳

class Singleton {
    private static uniqueInstance: Singleton;
    public static getInstance(): Singleton {
        if (this.uniqueInstance == null) {
            console.log('Singleton is only one');
            this.uniqueInstance = new Singleton();
        } else {
            console.log('Singleton should be only one');
        }
        return this.uniqueInstance;
    }
}

// new はできる
let curara: Singleton = new Singleton();

// スタティックメソッドなのでこういった使い方はエラー
// let curaraII: Singleton = curara.getInstance();

let alice: Singleton = Singleton.getInstance();
let bob: Singleton = Singleton.getInstance();

// 同じインスタンスなので true
console.log(alice === bob);
