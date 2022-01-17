import { HeroPrototype } from "../Fighters/Hero/HeroPrototype";
import { FighterPrototype } from "../Fighters/FighterPrototype";
import { PerkPrototype } from "../Perks/PerkPrototype";
import { Fighter } from "../Fighters/Fighter";

export let store = {
    heros: [
        new HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 3],
            'Всех закукумбрю!',
            '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают',
            'Не <span class="text-danger">красный</span>! Не путать!',
            'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!'),

        new HeroPrototype(1, 'Помидориус', 300, 200, [0, 2, 3],
            'Я краснею',
            '<span class="text-danger">Красный</span>, гладкий, твой',
            'Не <span class="text-success">зелёный</span>! Не путать!',
            'Ахахахахахахахаххахахахахах'),

        new HeroPrototype(2, 'Дынчундук', 500, 100, [0, 1, 3],
            'Как я сюда попал',
            '<span class="text-warning">Жёлтый</span>, попал сюда случайно',
            'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!',
            'Молю тебя!'),

        new HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 200, 50, [1, 2, 3],
            'Пумпурумпум',
            'Не путать с Кукумбером!',
            'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!',
            'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!'),

        new HeroPrototype(4, 'Арбузон', 500, 100, [0, 1, 2],
            'Пшпшпшп',
            'Самый <b>большой</b>',
            'Самый спелый',
            '<span class="text-success">Потряси меня!</span>')
    ],
    enemies: [
        new FighterPrototype(0, 'Тварь', 500, 100, [0, 1, 3],
            '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype(0, 'Ничтожество', 500, 100, [0, 1, 3],
            'Агрх!'),
        new FighterPrototype(0, 'Ублюдок', 500, 100, [0, 1, 3],
            'Упф'),
        new FighterPrototype(0, 'Мразь', 500, 100, [0, 1, 3],
            '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype(0, 'Взрыв', 100, 'Убивает всех', 
            (target: Fighter) => { target.addHp(-20); }, false),
        new PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', 
            (target: Fighter) => { target.addHp(-10); }, false),
        new PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', 
            (target: Fighter) => { target.addHp(50); }, true),
        new PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', 
            (target: Fighter) => { 
                target.addMana(200); 
                target.addHp(-50);
            }, true)
    ]
};