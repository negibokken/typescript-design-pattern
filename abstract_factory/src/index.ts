// AbstractFactory pattern
// 話したいことメモ:
// 部品を抽象化している
// さらには手段までも抽象化しているんじゃないかという着想を得た
// ぼくみたいなのがclass使うのはおこがましいと思ってたりしません？
// なんか敷居が高いなぁと思ってたりしませんか？
// class は使わないと書き方分からないし、どんどん使っていきましょう

class Pot {

}

class Soup {

}

class Protein {

}

class HotPot {
  private Pot: Pot;
  private Soup: Soup;
  private Protein: Protein;
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
