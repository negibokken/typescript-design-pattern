// Templete Factory
class Sword {
}
class BronzeSword extends Sword {
    constructor() {
        super();
        this.f_sharpness = 5;
    }
    sound() {
        console.log(`ズバッ！切れ味は${this.f_sharpness}！`);
    }
}
class IronSword extends Sword {
    constructor() {
        super();
        this.f_sharpness = 25;
    }
    sound() {
        console.log(`ザシュッ！切れ味は${this.f_sharpness}！`);
    }
}
class SteelSword extends Sword {
    constructor() {
        super();
        this.f_sharpness = 50;
    }
    sound() {
        console.log(`シャキン！切れ味は${this.f_sharpness}！\n`);
    }
}
class SwordSmith {
    createSword() {
        console.log('刀を作ります');
        let sword = this.buyMaterial();
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
    buyMaterial() {
        console.log('青銅を用意しました');
        let sword = new BronzeSword();
        return sword;
    }
    headMaterial() {
        console.log('素材をめちゃくちゃ熱しました');
    }
    ;
    strikeMaterial() {
        console.log('素材を叩きました');
    }
    ;
    coolMaterial() {
        console.log('素材を冷やしました');
    }
    ;
}
class SwordSmith2 extends SwordSmith {
    constructor() {
        super();
    }
    buyMaterial() {
        console.log('鉄を用意しました');
        let sword = new IronSword();
        return sword;
    }
    headMaterial() {
        console.log('素材を熱しました');
    }
    ;
    strikeMaterial() {
        console.log('素材をめちゃくちゃ叩きました');
    }
    ;
    coolMaterial() {
        console.log('素材を冷やしました');
    }
    ;
}
class SwordSmith3 extends SwordSmith {
    constructor() {
        super();
    }
    buyMaterial() {
        console.log('鋼を用意しました');
        let sword = new SteelSword();
        return sword;
    }
    headMaterial() {
        console.log('素材を熱しました');
    }
    ;
    strikeMaterial() {
        console.log('素材を叩きました');
    }
    ;
    coolMaterial() {
        console.log('素材をめちゃくちゃ冷やしました');
    }
    ;
}
class Hero {
    setSword(_sword) {
        console.log('ガチャン');
        this.sword = _sword;
    }
    attack() {
        console.log(`勇者の攻撃: ${this.sword.f_sharpness}のダメージ`);
    }
}
console.log('---- TOWN1 ----');
let smith = new SwordSmith1();
smith.createSword();
console.log('---- TOWN2 ----');
let smith2 = new SwordSmith2();
smith2.createSword();
console.log('---- TOWN3 ----');
let smith3 = new SwordSmith3();
smith3.createSword();
console.log('---- Hero ----');
let hero = new Hero();
hero.setSword(smith3.createSword());
hero.attack();
