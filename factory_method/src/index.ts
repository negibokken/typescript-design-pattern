// Templete Factory

abstract class Sword {
  public f_sharpness: number;
  abstract sound(): void;
}

class BronzeSword extends Sword {
  constructor() {
    super();
    this.f_sharpness = 5;
  }
  sound(): void {
    console.log(`ズバッ！切れ味は${this.f_sharpness}！`);
  }
}

class IronSword extends Sword {
  constructor() {
    super();
    this.f_sharpness = 25;
  }
  sound(): void {
    console.log(`ザシュッ！切れ味は${this.f_sharpness}！`);
  }
}

class SteelSword extends Sword {
  constructor() {
    super();
    this.f_sharpness = 50;
  }
  sound(): void {
    console.log(`シャキン！切れ味は${this.f_sharpness}！\n`);
  }
}

abstract class SwordSmith {
  protected abstract buyMaterial(): Sword;
  protected abstract headMaterial(): void;
  protected abstract strikeMaterial(): void;
  protected abstract coolMaterial(): void;
  createSword(): Sword {
    console.log('刀を作ります');
    let sword: Sword = this.buyMaterial();
    this.headMaterial();
    this.strikeMaterial();
    this.coolMaterial();
    console.log('刀が完成しました');
    sword.sound();
    return sword;
  }
}

class SwordSmith1 extends SwordSmith {
  constructor() {
    super();
  }
  buyMaterial(): Sword {
    console.log('青銅を用意しました');
    let sword: Sword = new BronzeSword();
    return sword;
  }
  headMaterial(): void {
    console.log('素材をめちゃくちゃ熱しました');
  };
  strikeMaterial(): void {
    console.log('素材を叩きました');
  };
  coolMaterial(): void {
    console.log('素材を冷やしました');
  };
}

class SwordSmith2 extends SwordSmith {
  constructor() {
    super();
  }
  buyMaterial(): Sword {
    console.log('鉄を用意しました');
    let sword: Sword = new IronSword();
    return sword;
  }
  headMaterial(): void {
    console.log('素材を熱しました');
  };
  strikeMaterial(): void {
    console.log('素材をめちゃくちゃ叩きました');
  };
  coolMaterial(): void {
    console.log('素材を冷やしました');
  };
}

class SwordSmith3 extends SwordSmith {
  constructor() {
    super();
  }
  buyMaterial(): Sword {
    console.log('鋼を用意しました');
    let sword: Sword = new SteelSword();
    return sword;
  }
  headMaterial(): void {
    console.log('素材を熱しました');
  };
  strikeMaterial(): void {
    console.log('素材を叩きました');
  };
  coolMaterial(): void {
    console.log('素材をめちゃくちゃ冷やしました');
  };
}

class Hero {
  sword: Sword;
  setSword(_sword: Sword): void {
    console.log('ガチャン');
    this.sword = _sword;
  }
  attack(): void {
    console.log(`勇者の攻撃: ${this.sword.f_sharpness}のダメージ`);
  }
}

console.log('---- TOWN1 ----');
let smith: SwordSmith = new SwordSmith1();
smith.createSword();
console.log('---- TOWN2 ----');
let smith2: SwordSmith = new SwordSmith2();
smith2.createSword();
console.log('---- TOWN3 ----');
let smith3: SwordSmith = new SwordSmith3();
smith3.createSword();

console.log('---- Hero ----');
let hero: Hero = new Hero();
hero.setSword(smith3.createSword());
hero.attack();
