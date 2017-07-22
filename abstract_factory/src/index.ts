// AbstractFactory pattern

abstract class Factory {
  abstract getSoup(): string;
  abstract getSoup2(): string;
}

class MizutakiFactory extends Factory {
  getSoup(): string {
    return 'soup';
  }
  // getSoup2(): string {
  //   return 'soup2';
  // }
}

// public static void main があるクラスに書いてね
class Main {
  main(): void {
    HotPot hotPot = newHotPot(new Pot())

  }
}
