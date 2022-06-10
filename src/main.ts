import { Personagem } from './Personagem';
import { Mage } from './Mage';
import { Priest } from './Priest';

let mage: Personagem = new Mage('Cornelius mage');
let priest: Personagem = new Priest('Samuel Jacob priest');

const personagens: Personagem[] = [];

personagens.push(mage);
personagens.push(priest);

personagens.forEach((p) => 
    //console.log(p instanceof Mage? p.atacar(): (p as Priest).atacar())
    console.log(p.atacar())
);
