import { HeroPrototype } from "../Fighters/Hero/HeroPrototype";
import { FighterPrototype } from "../Fighters/FighterPrototype";
import { PerkPrototype } from "../Perks/PerkPrototype";
import { Fighter } from "../Fighters/Fighter";
import { Util } from "../Common/Util";
import { Game } from "../Main/Game";

export let store = {
    heros: [
        new HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 3],
            'Всех закукумбрю!',
            '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают',
            'Не <span class="text-danger">красный</span>! Не путать!',
            'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!',
            ($card: JQuery<HTMLElement>) => { 
                $card.addClass("bg-success text-white")
                $card.find("span").removeClass().addClass("text-dark");
            }),

        new HeroPrototype(1, 'Помидориус', 300, 200, [0, 2, 3],
            'Я краснею',
            '<span class="text-danger">Красный</span>, гладкий, твой',
            'Не <span class="text-success">зелёный</span>! Не путать!',
            'Ахахахахахахахаххахахахахах',
            ($card: JQuery<HTMLElement>) => { 
                $card.parent().parent().children().children().addClass("bg-transparent");
                $card.addClass("bg-light text-dark");
                $card.removeClass("bg-transparent");
                $card.parent().parent().parent().parent().addClass("bg-dark text-white");
                Util.sleep(2000).then(() => { 
                    $card.parent().parent().parent().parent().removeClass("bg-dark text-white"); 
                });
            }),

        new HeroPrototype(2, 'Дынчундук', 500, 100, [0, 1, 3],
            'Как я сюда попал',
            '<span class="text-warning">Жёлтый</span>, попал сюда случайно',
            'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!',
            'Молю тебя!',
            ($card: JQuery<HTMLElement>) => { 
                $card.addClass("bg-warning")
                $card.find(".text-warning").removeClass("text-warning");
            }),

        new HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 1000, 50, [1, 2, 3],
            'Пумпурумпум',
            'Не путать с Кукумбером!',
            'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!',
            'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!',
            ($card: JQuery<HTMLElement>) => { 
                fireworks();
            }),

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
        new PerkPrototype(0, 'Взрыв', 100, 'Пытается убить одного врага', 
            (target: Fighter, owner: Fighter) => { 
                target.addHp(-100); 
                owner.addMana(-20); 
            }, false),
        new PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', 
            (target: Fighter, owner: Fighter, game: Game) => { 
                owner.addMana(-50);
                game.enemies.forEach((enemy) => (enemy.addHp(-70)));
            }, false),
        new PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', 
            (target: Fighter, owner: Fighter) => { 
                target.addHp(50); 
                owner.addMana(-50); 
            }, true),
        new PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', 
            (target: Fighter, owner: Fighter) => { 
                target.addMana(50); 
                target.addHp(-50);
            }, true)
    ],
};

async function fireworks() {
    let $fireworks = $('.fireworks');
    for (let i = 0; i < 5; i++){
        $fireworks.removeClass('d-none');
        $fireworks.offset({left: Util.randomInt(0, 500), top: Util.randomInt(0, 500)})
        await Util.sleep(500);
        $fireworks.addClass('d-none')
        await Util.sleep(100);
    }
}