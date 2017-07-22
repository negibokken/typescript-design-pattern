// AbstractFactory pattern
// 話したいことメモ:
// インスタンスの生成を専門に行うクラスを用意すると整合性が必要な**オブジェクト群を間違いなく生成**できる
// メンテの都合や、拡張性を担保したいので部品classは抽象化して管理したい
// そうすると、不都合なのが、Tireクラスがあったときに、BycycleTire, F1Tire どっちもはめられる
// なので、車はこの部品を使うんだよということを規定して、もう一段階具体的にしておく。
//
// さらには手段までも抽象化しているんじゃないかという着想を得た (いや関係ないわw)
// ぼくみたいなのがclass使うのはおこがましいと思ってたりしません？
// なんか敷居が高いなぁと思ってたりしませんか？
// class は使わないと書き方分からないし、どんどん使っていきましょう

class Pot {

}

class HotPot {
  private pot: Pot;
  private soup: Soup;
  private protein: Protein;
  constructor(pot: Pot) {
    this.pot = pot;
  }

  // public void addSoup(Soup soup)
  addSoup(soup: Soup): void {
    this.soup = soup;
  }

  // public void addMain(Protein protein)
  addMain(protein: Protein): void {
    this.protein = protein;
  }
}

class Soup {

}

class Protein {

}

abstract class Factory {
  abstract getSoup(): string;
  abstract getSoup2(): string;
}

class MizutakiFactory extends Factory {
  getSoup(): string {
    return 'soup';
  }
  getSoup2(): string {
    return 'soup2';
  }
}

// public static void main があるクラスに書いてね
class Main {
  main(): void {
    let hotPot: HotPot = new HotPot(new Pot());

  }
}
