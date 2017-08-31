import { Hero } from './Hero';
import { Wizard } from './Wizard';

const hero: Hero = new Hero();
const wizard: Wizard = new Wizard();

hero.addObserver(wizard);

[1,2,3,4,5].forEach(() => {
  hero.encountMonster();
});
