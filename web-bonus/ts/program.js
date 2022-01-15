"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//exports.__esModule = true;
//var $ = require("jquery");
var FighterPrototype = /** @class */ (function () {
    function FighterPrototype(id, name, hp, mana, skills, motto) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.skills = skills;
        this.motto = motto;
    }
    return FighterPrototype;
}());
var HeroPrototype = /** @class */ (function (_super) {
    __extends(HeroPrototype, _super);
    function HeroPrototype(id, name, hp, mana, skills, motto, firstDescription, secondDescription, answer) {
        var _this = _super.call(this, id, name, hp, mana, skills, motto) || this;
        _this.firstDescription = firstDescription;
        _this.secondDescription = secondDescription;
        _this.answer = answer;
        return _this;
    }
    return HeroPrototype;
}(FighterPrototype));
var PerkPrototype = /** @class */ (function () {
    function PerkPrototype(id, name, mana, info, effect, forSelf) {
        this.id = id;
        this.name = name;
        this.mana = mana;
        this.info = info;
        this.effect = effect;
        this.forSelf = forSelf;
    }
    return PerkPrototype;
}());
var store = {
    heros: [
        new HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 3], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!'),
        new HeroPrototype(1, 'Помидориус', 300, 200, [0, 2, 3], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах'),
        new HeroPrototype(2, 'Дынчундук', 500, 100, [0, 1, 3], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!'),
        new HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 200, 50, [1, 2, 3], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!'),
        new HeroPrototype(4, 'Арбузон', 500, 100, [0, 1, 2], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Потряси меня!</span>')
    ],
    enemies: [
        new FighterPrototype(0, 'Тварь', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype(0, 'Ничтожество', 500, 100, [0, 1, 3], 'Агрх!'),
        new FighterPrototype(0, 'Ублюдок', 500, 100, [0, 1, 3], 'Упф'),
        new FighterPrototype(0, 'Мразь', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype(0, 'Взрыв', 100, 'Убивает всех', function (target) { target.addHp(-20); }, false),
        new PerkPrototype(1, 'Молния', 30, 'Пытается убить всех', function (target) { target.addHp(-10); }, false),
        new PerkPrototype(2, 'Лечение', 50, 'Никого не пытается убить', function (target) { target.addHp(50); }, true),
        new PerkPrototype(3, 'Жертва', 70, 'Пытается убить самого себя', function (target) {
            target.addMana(200);
            target.addHp(-50);
        }, true)
    ]
};
var heroNumber = -1;
function hehe() {
    $('#hoho').removeClass('d-none');
    $('.tick').removeClass('border-primary');
    this.classList.add('border-primary');
    heroNumber = this.dataset.heroId;
    haha();
}
function hahah() {
    $('.tack').removeClass('border-primary');
    this.classList.add('border-primary');
    heroNumber = this.dataset.heroId;
    haha();
}
function haha() {
    $('#reaction').html(heroNumber === -1 ? "" : store.heros[heroNumber].answer);
}
var game;
function onLoad() {
    game = new Game();
}
$(window).on('load', onLoad);
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        var $container = $('#card-container');
        for (var i = 0; i < store.heros.length; i++) {
            var $card = $('#choose-card').clone();
            $card.children('div').attr('data-hero-id', i);
            $card.find('.my-title').html(store.heros[i].name);
            $card.find('.my-first-description').html(store.heros[i].firstDescription);
            $card.find('.my-second-description').html(store.heros[i].secondDescription);
            $card.removeClass('d-none');
            $container.append($card);
        }
        $('#button').click();
        $('.tick').on('click', hehe);
        $('#zakroysya').on('click', function () { return _this.onConfirm(); });
    }
    Game.prototype.onConfirm = function () {
        $('#button').click();
        if (heroNumber === -1) {
            window.location.reload();
        }
        ;
        $('#hero-card').find('.my-title').html(store.heros[heroNumber].name);
        $('#hero-card').find('.my-motto').html(store.heros[heroNumber].motto);
        this.hero = new Hero(store.heros[heroNumber], this);
        this.enemies = [];
        this.initializeEnemies();
    };
    Game.prototype.initializeEnemies = function () {
        for (var i = 0; i < 4; i++)
            this.addEnemy();
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new Enemy(store.enemies[randomInt(0, store.enemies.length)], this));
    };
    Game.prototype.activateEnemies = function (effect) {
        this.enemies.map(function (enemy) { enemy.activate(effect); });
    };
    Game.prototype.disactivateEnemies = function () {
        this.enemies.map(function (enemy) { enemy.disactivate(); });
    };
    Game.prototype.apply = function (target) {
    };
    return Game;
}());
var FighterCard = /** @class */ (function () {
    function FighterCard(name, motto) {
        if (name === void 0) { name = "enemy name"; }
        if (motto === void 0) { motto = "motto"; }
        this.$card = this.$initializeCard(name, motto);
        this.$getMenu().append(this.$card);
    }
    FighterCard.prototype.$getMenu = function () {
        return $('#enemies-menu');
    };
    FighterCard.prototype.$initializeCard = function (name, motto) {
        var $card = $('#fighter-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-motto').html(motto);
        $card.removeClass('d-none');
        return $card;
    };
    FighterCard.prototype.setHpWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.hp-progress').width(percents + '%');
    };
    FighterCard.prototype.setManaWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
    };
    FighterCard.prototype.getRealPercents = function (percents) {
        if (percents < 0)
            return 0;
        if (percents > 100)
            return 100;
        return percents;
    };
    FighterCard.prototype.turnOn = function () {
        var _this = this;
        this.$card.on("click", function () {
            $('.enemy-card').removeClass('border-primary');
            _this.$card.addClass('border-primary');
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseenter", function () {
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", function () {
            _this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
        this.$card.addClass('bg-light');
    };
    FighterCard.prototype.turnOff = function () {
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
        this.$card.removeClass('bg-light');
    };
    return FighterCard;
}());
var EnemyCard = /** @class */ (function (_super) {
    __extends(EnemyCard, _super);
    function EnemyCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyCard;
}(FighterCard));
var HeroCard = /** @class */ (function (_super) {
    __extends(HeroCard, _super);
    function HeroCard(name, motto) {
        var _this = _super.call(this, name, motto) || this;
        _this.$card.removeClass('enemy-card');
        return _this;
    }
    HeroCard.prototype.$getMenu = function () {
        return $('#hero-menu');
    };
    return HeroCard;
}(FighterCard));
var PerkCard = /** @class */ (function () {
    function PerkCard(name, info) {
        if (name === void 0) { name = "perk name"; }
        if (info === void 0) { info = "info"; }
        this._$card = this.$initializeCard(name, info);
        $('#hero-menu').append(this._$card);
        this._onclick = null;
    }
    PerkCard.prototype.$initializeCard = function (name, info) {
        var $card = $('#perk-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-info').html(info);
        $card.removeClass('d-none');
        $card.addClass('bg-light');
        return $card;
    };
    PerkCard.prototype.setOnclick = function (method) {
        this._onclick = method;
    };
    PerkCard.prototype.setProgressWidth = function (percents) {
        percents = this.getRealPercents(percents);
        this._$card.find('.mana-progress').width(percents + '%');
        if (percents >= 100)
            this.turnOn();
        else
            this.turnOff();
    };
    PerkCard.prototype.getRealPercents = function (percents) {
        if (percents < 0)
            return 0;
        if (percents > 100)
            return 100;
        return percents;
    };
    PerkCard.prototype.turnOn = function () {
        var _this = this;
        this._$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this._$card.on("click", function () {
            $('.perk-card').removeClass('border-primary');
            _this._$card.addClass('border-primary');
            _this._onclick();
        });
        this._$card.on("mouseenter", function () {
            _this._$card.removeClass('bg-light');
        });
        this._$card.on("mouseleave", function () {
            _this._$card.addClass('bg-light');
        });
        this._$card.attr('role', 'button');
    };
    PerkCard.prototype.turnOff = function () {
        this._$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this._$card.off("click mouseenter mouseleave");
        this._$card.attr('role', '');
        this._$card.removeClass('border-primary');
    };
    return PerkCard;
}());
var Fighter = /** @class */ (function () {
    function Fighter(prototype, game) {
        this.prototype = prototype;
        this.game = game;
        this._card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
    }
    Fighter.prototype.createCard = function (prototype) {
        return new FighterCard(prototype.name, prototype.motto);
    };
    Object.defineProperty(Fighter.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (count) {
            this._hp = this.getAdequateHp(count);
            this._card.setHpWidth(this._hp * 100 / this.prototype.hp);
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addHp = function (count) {
        this.hp = this._hp + count;
    };
    Fighter.prototype.getAdequateHp = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.hp)
            return this.prototype.hp;
        return count;
    };
    Object.defineProperty(Fighter.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this._mana = this.getAdequateMana(count);
            this._card.setManaWidth(this._mana * 100 / this.prototype.mana);
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addMana = function (count) {
        this.mana = this.mana + count;
    };
    Fighter.prototype.getAdequateMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Fighter.prototype.activate = function (effect) {
        this._card.turnOn();
    };
    Fighter.prototype.disactivate = function () {
        this._card.turnOff();
    };
    return Fighter;
}());
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Enemy.prototype.createCard = function (prototype) {
        return new EnemyCard(prototype.name, prototype.motto);
    };
    return Enemy;
}(Fighter));
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(prototype, game) {
        var _this = _super.call(this, prototype, game) || this;
        _this._perks = [];
        _this.initializePerks();
        _this._method = null;
        return _this;
    }
    Hero.prototype.initializePerks = function () {
        var _this = this;
        this.prototype.skills.forEach(function (perkNumber) {
            if (store.perks[perkNumber].forSelf)
                _this._perks.push(new OnHeroPerk(store.perks[perkNumber], _this));
            else
                _this._perks.push(new OnEnemyPerk(store.perks[perkNumber], _this));
        });
    };
    Hero.prototype.createCard = function (prototype) {
        return new HeroCard(prototype.name, prototype.motto);
    };
    Hero.prototype.setMethod = function (targetMethod, effectMethod) {
        targetMethod();
        this._method = effectMethod;
    };
    Hero.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function () {
            _this.disactivate();
            _this.game.activateEnemies(_this._method);
        };
    };
    Hero.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function () {
            _this.game.disactivateEnemies();
            _this.activate(null);
        };
    };
    return Hero;
}(Fighter));
var Perk = /** @class */ (function () {
    function Perk(prototype, hero) {
        this.prototype = prototype;
        this.hero = hero;
        this._card = this.createCard(prototype);
        this._card.setOnclick(this.getOnclick());
        this._mana = 0;
        this.update();
    }
    Perk.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.addMana(1);
                        return [4 /*yield*/, sleep(100)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.update()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Perk.prototype.createCard = function (prototype) {
        return new PerkCard(prototype.name, prototype.info);
    };
    Object.defineProperty(Perk.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this._mana = this.getRealMana(count);
            this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
        },
        enumerable: false,
        configurable: true
    });
    Perk.prototype.addMana = function (count) {
        this.mana = this.mana + count;
    };
    Perk.prototype.getRealMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Perk.prototype.getOnclick = function () {
        var _this = this;
        return function () { _this.hero.setMethod(_this.getOnclickType(), _this.prototype.effect); };
    };
    Perk.prototype.getOnclickType = function () {
        return this.hero.getOnEnemyMethod();
    };
    return Perk;
}());
var OnHeroPerk = /** @class */ (function (_super) {
    __extends(OnHeroPerk, _super);
    function OnHeroPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnHeroPerk.prototype.getOnclickType = function () {
        return this.hero.getOnHeroMethod();
    };
    return OnHeroPerk;
}(Perk));
var OnEnemyPerk = /** @class */ (function (_super) {
    __extends(OnEnemyPerk, _super);
    function OnEnemyPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OnEnemyPerk;
}(Perk));
function randomInt(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.floor(Math.random() * (max - min) + min);
}
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(resolve, ms);
                })];
        });
    });
}
