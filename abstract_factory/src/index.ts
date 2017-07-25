// AbstractFactory pattern
// 話したいことメモ:
// インスタンスの生成を専門に行うクラスを用意すると整合性が必要な**オブジェクト群を間違いなく生成**できる
// メンテの都合や、拡張性を担保したいので部品classは抽象化して管理したい
// そうすると、不都合なのが、NormalCarクラスの中で Tireクラスを使うときに、BycycleTire, F1Tire どっちもはめられる
// なので、車はこの部品はNormalCar工場から使うようにしておけばBycycleTireが出てきたりしなくなる
// (改めて勉強してて思ったけど、NromalCar インスタンスを返す工場があってもよさそう)

class Pot {}
class Soup {}
class Protein {}

class HotPot {
  private pot: Pot;
  private soup: Soup;
  private protein: Protein;
  constructor(pot: Pot) {
    this.pot = pot;
  }
  // public void addSoup(Soup soup)
  addSoup(soup: Soup): void {
    // JS は特殊なので this を使うけど他の言語の人は違うので注意
    this.soup = soup;
  }
  // public void addMain(Protein protein)
  addMain(protein: Protein): void {
    this.protein = protein;
  }
}

abstract class Factory {
  // 例だとJavaの動的に特定のクラスのインスタンスを生成する技法を使ってた
  // (Factory)Class.forName(classname).newInstance();
  abstract getSoup(): Soup;
  abstract getMain(): Protein;
}

class MizutakiFactory extends Factory {
  getSoup(): Soup {
    return new Soup();
  }
  getMain(): Protein {
    return new Protein();
  }
}

// 以下は public static void main がある部分に書いてね
class Main {
  main(): void {
    let factory: MizutakiFactory = new MizutakiFactory();
    let hotPot: HotPot = new HotPot(new Pot());
    hotPot.addSoup(factory.getSoup());
    hotPot.addMain(factory.getMain());
  }
}

let main: Main = new Main();
main.main();

// 具体的な工場を作るのは簡単になっている
// ただし、部品を追加するとなると、メソッドの追加が必要になるので大変になる
// あれ、あんまり実用性なさそうな...？
