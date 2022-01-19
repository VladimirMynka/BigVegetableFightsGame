import { HeroPrototype } from "../Fighters/Hero/HeroPrototype";
import { FighterPrototype } from "../Fighters/FighterPrototype";
import { PerkPrototype } from "../Perks/PerkPrototype";
import { Fighter } from "../Fighters/Fighter";
import { Util } from "../Common/Util";
import { Game } from "../Main/Game";
import { Enemy } from "../Fighters/Enemy/Enemy";

export let store = {
    enemiesMaxCount: 12,
    minAddEnemyChance: 15,
    maxAddEnemyChance: 35,
    gameTiming: 3,
    startEnemyCount: 1,
    heros: [
        new HeroPrototype(
            0, 
            'Кукумбер', 
            500, 
            100, 
            [0, 1, 2, 3, 4, 5, 6, 7, 8],
            'Всех закукумбрю!',
            '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают',
            'Не <span class="text-danger">красный</span>! Не путать!',
            'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!',
            ($card: JQuery<HTMLElement>) => {
                $card.addClass("bg-success text-white")
                $card.find("span").removeClass().addClass("text-dark");
            }
        ),

        new HeroPrototype(
            1, 
            'Помидориус', 
            300, 
            200, 
            [0, 1, 3, 4],
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
            }
        ),

        new HeroPrototype(
            2, 
            'Дынчундук', 
            500, 
            100, 
            [0, 1, 3],
            'Как я сюда попал',
            '<span class="text-warning">Жёлтый</span>, попал сюда случайно',
            'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!',
            'Молю тебя!',
            ($card: JQuery<HTMLElement>) => {
                $card.addClass("bg-warning")
                $card.find(".text-warning").removeClass("text-warning");
            }
        ),

        new HeroPrototype(
            3, 
            '<span class="bg-success text-light">Огурцан</span>', 
            1000, 
            50, 
            [1, 2, 3],
            'Пумпурумпум',
            'Не путать с Кукумбером!',
            'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!',
            'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!',
            ($card: JQuery<HTMLElement>) => {
                Util.fireworks();
            }
        ),

        new HeroPrototype(
            4, 
            'Арбузон', 
            500, 
            100, 
            [0, 1, 2],
            'Пшпшпшп',
            'Самый <b>большой</b>',
            'Самый спелый',
            '<span class="text-success">Потряси меня!</span>'
        )
    ],
    enemies: [
        new FighterPrototype(
            0, 
            'Редисон', 
            500, 
            100, 
            [0, 1, 3],
            '<span class="text-danger border-danger">Ненавижу!</span>'
        ),
        new FighterPrototype(
            0, 
            'Баклажун', 
            500, 
            100, 
            [0, 1, 5, 7],
            'Агрх!'
        ),
        new FighterPrototype(
            0, 
            'Томатус', 
            500, 
            100, 
            [0, 1, 5],
            'Упф'
        ),
        new FighterPrototype(
            0, 
            'Тыквин', 
            500, 
            100, 
            [0, 1, 4],
            '<span class="text-danger border-danger">Ехехеехех</span>'
        ),
    ],
    perks: [
        new PerkPrototype(
            0, 
            'Пропуск хода', 
            1, 
            0, 
            '', 
            () => { }, 
            true, 
            'пропустил ход', 
            0
        ),

        new PerkPrototype(
            1, 
            'Взрыв', 
            50, 
            20, 
            'Пытается убить одного врага',
            (target: Fighter) => { target.addHp(-100) }, 
            false, 
            'бахнул взрывом по', 
            50,
            Util.getImagesPaths(1, 25)
        ),

        new PerkPrototype(
            2, 
            'Молния', 
            30, 
            50, 
            'Пытается убить всех',
            (target: Fighter, owner: Fighter, game: Game) => {
                game.enemies.forEach((enemy) => (enemy.addHp(-70)));
            }, 
            false, 
            'бахнул молнией по всем, в том числе по', 
            120,
            Util.getImagesPaths(2, 6)
        ),

        new PerkPrototype(
            3, 
            'Лечение', 
            50, 
            50, 
            'Никого не пытается убить',
            (target: Fighter, owner: Fighter) => {
                target.addHp(150);
            }, 
            true, 
            'подлечился лечением', 
            50,
            Util.getImagesPaths(3, 13)
        ),

        new PerkPrototype(
            4, 
            'Жертва', 
            70, 
            0, 
            'Пытается убить самого себя',
            (target: Fighter, owner: Fighter) => {
                target.addMana(100);
                target.addHp(-50);
            }, 
            true, 
            'предпринял попытку суицида и восстановил манну', 
            50,
            Util.getImagesPaths(4, 20)
        ),

        new PerkPrototype(
            5, 
            'Кража жизни', 
            30, 
            20, 
            'Пытается убить во благо',
            (target: Fighter, owner: Fighter) => {
                owner.addHp(-target.addHp(-50));
            }, 
            false, 
            'отнял жизни у', 
            30,
            Util.getImagesPaths(5, 9)
        ),

        new PerkPrototype(
            6, 
            'Вихрь', 
            30, 
            50, 
            'Пытается убить окружение врага',
            (target: Fighter, owner: Fighter, game: Game) => {
                let enemy = <Enemy>target;
                enemy.addHp(-200);
                let index = game.enemies.indexOf(enemy);
                if (index > 0) game.enemies[index - 1].addHp(-100);
                if (index < game.enemies.length - 1) game.enemies[index + 1].addHp(-100);
            }, 
            false, 
            'бахнул вихрем по соседям, да и по самому', 
            120, 
            Util.getImagesPaths(6, 25)
        ),

        new PerkPrototype(
            7, 
            'Кража маны', 
            100, 
            0, 
            'Пытается убить посредственно',
            (target: Fighter, owner: Fighter, game: Game) => {
                owner.addMana(-target.addMana(-200));
            }, 
            false, 
            'украл ману у', 
            50,
            Util.getImagesPaths(7, 26)
        ),

        new PerkPrototype(
            8, 
            'Большой и глупый вред себе', 
            1, 
            0, 
            '(тестовое)',
            (target: Fighter, owner: Fighter) => {
                owner.addHp(-300);
                owner.addMana(-300);
            }, 
            true, 
            'очень глупый', 
            500
        )
    ],
};