(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameCard = void 0;
var GameCard = /** @class */ (function () {
    function GameCard() {
    }
    GameCard.prototype.getCoords = function () {
        return this.$card.offset();
    };
    return GameCard;
}());
exports.GameCard = GameCard;
},{}],2:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.sleep = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(resolve, ms);
                    })];
            });
        });
    };
    Util.randomInt = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 100; }
        return Math.floor(Math.random() * (max - min) + min);
    };
    Util.getFormatCurrentTime = function () {
        var date = new Date();
        return "[".concat(date.getHours().toString().padStart(2, '0'), ":").concat(date.getMinutes().toString().padStart(2, '0'), ":").concat(date.getSeconds().toString().padStart(2, '0'), "]");
    };
    Util.fireworks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $fireworks, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $fireworks = $('.fireworks');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 5)) return [3 /*break*/, 5];
                        $fireworks.removeClass('d-none');
                        $fireworks.offset({ left: Util.randomInt(0, 500), top: Util.randomInt(0, 500) });
                        return [4 /*yield*/, Util.sleep(500)];
                    case 2:
                        _a.sent();
                        $fireworks.addClass('d-none');
                        return [4 /*yield*/, Util.sleep(100)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Util.getImagesPaths = function (number, count) {
        return Array.apply(null, { length: count }).map(function (unused, index) {
            return "./images/animation/".concat(number, "/image_part_").concat((index + 1).toString().padStart(3, '0'), ".png");
        });
    };
    return Util;
}());
exports.Util = Util;
},{}],3:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
var Fighter_1 = require("../Fighter");
var EnemyCard_1 = require("./EnemyCard");
var EnemyPerk_1 = require("../../Perks/ForEnemy/EnemyPerk");
var Store_1 = require("../../Store/Store");
var Util_1 = require("../../Common/Util");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(prototype, game) {
        return _super.call(this, prototype, game) || this;
    }
    Enemy.prototype.initializePerks = function () {
        var _this = this;
        if (this.prototype.skills.indexOf(0) < 0)
            this.perks.push(new EnemyPerk_1.EnemyPerk(Store_1.store.perks[0], this, this.game));
        this.prototype.skills.forEach(function (perkNumber) {
            _this.perks.push(new EnemyPerk_1.EnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Enemy.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                if (this.game.gameEnded)
                    return [2 /*return*/];
                if (Util_1.Util.randomInt(0, 100) < Store_1.store.enemyMoveChance) {
                    index = Util_1.Util.randomInt(1, this.perks.length);
                    while (index > 0 && !this.perks[index].canBeApplied())
                        index = this.increasePerkIndex(index);
                    this.perks[index].apply();
                }
                else
                    this.perks[0].apply();
                _super.prototype.update.call(this);
                return [2 /*return*/];
            });
        });
    };
    Enemy.prototype.increasePerkIndex = function (index) {
        return (index + 1) % this.perks.length;
    };
    Enemy.prototype.createCard = function (prototype) {
        return new EnemyCard_1.EnemyCard(prototype.name, prototype.motto);
    };
    Enemy.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.increaseKilledCount();
    };
    return Enemy;
}(Fighter_1.Fighter));
exports.Enemy = Enemy;
},{"../../Common/Util":2,"../../Perks/ForEnemy/EnemyPerk":13,"../../Store/Store":21,"../Fighter":5,"./EnemyCard":4}],4:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyCard = void 0;
var FighterCard_1 = require("../FighterCard");
var EnemyCard = /** @class */ (function (_super) {
    __extends(EnemyCard, _super);
    function EnemyCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnemyCard;
}(FighterCard_1.FighterCard));
exports.EnemyCard = EnemyCard;
},{"../FighterCard":6}],5:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
var FighterCard_1 = require("./FighterCard");
var Util_1 = require("../Common/Util");
var Store_1 = require("../Store/Store");
var Fighter = /** @class */ (function () {
    function Fighter(prototype, game) {
        this.prototype = prototype;
        this.game = game;
        this.card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.perks = [];
        this.initializePerks();
    }
    Fighter.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.hp === 0) {
                    return [2 /*return*/];
                }
                this.addMana(30);
                this.addHp(10);
                this.perks.forEach(function (perk) { return perk.update(); });
                return [2 /*return*/];
            });
        });
    };
    Fighter.prototype.remove = function () {
        if (this._wereRemoved)
            return;
        this._wereRemoved = true;
        this.card.remove();
        this.game.addLog(this, this, Store_1.store.diedLog);
        document.removeEventListener('keydown', handler);
        document.addEventListener('keydown', handler);
    };
    Fighter.prototype.createCard = function (prototype) {
        return new FighterCard_1.FighterCard(prototype.name, prototype.motto);
    };
    Object.defineProperty(Fighter.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (count) {
            this._hp = this.getAdequateHp(count);
            this.card.setHpWidth(this._hp * 100 / this.prototype.hp);
            if (this._hp === 0)
                this.remove();
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addHp = function (count) {
        var startHp = this._hp;
        this.hp = this._hp + count;
        return this._hp - startHp;
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
            this.card.setManaWidth(this._mana * 100 / this.prototype.mana);
        },
        enumerable: false,
        configurable: true
    });
    Fighter.prototype.addMana = function (count) {
        var startMana = this._mana;
        this.mana = this._mana + count;
        return this._mana - startMana;
    };
    Fighter.prototype.getAdequateMana = function (count) {
        if (count < 0)
            return 0;
        if (count > this.prototype.mana)
            return this.prototype.mana;
        return count;
    };
    Fighter.prototype.activate = function (effect) {
        this.card.turnOn(effect, this);
    };
    Fighter.prototype.disactivate = function () {
        this.card.turnOff();
    };
    Fighter.prototype.getCard = function () {
        return this.card;
    };
    Fighter.prototype.getCoords = function () {
        return this.card.getCoords();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
function handler(event) {
    if (event.code == 'KeyF') {
        document.removeEventListener('keydown', handler);
        Util_1.Util.fireworks();
    }
}
},{"../Common/Util":2,"../Store/Store":21,"./FighterCard":6}],6:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterCard = void 0;
var GameCard_1 = require("../Common/GameCard");
var FighterCard = /** @class */ (function (_super) {
    __extends(FighterCard, _super);
    function FighterCard(name, motto) {
        if (name === void 0) { name = "enemy name"; }
        if (motto === void 0) { motto = "motto"; }
        var _this = _super.call(this) || this;
        _this.$card = _this.$initializeCard(name, motto);
        _this.$getMenu().append(_this.$card);
        return _this;
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
    FighterCard.prototype.turnOn = function (effect, owner) {
        var _this = this;
        this.$card.off("click mouseenter mouseleave");
        this.$card.on("click", function () {
            effect(owner);
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
    FighterCard.prototype.remove = function () {
        this.$card.remove();
    };
    return FighterCard;
}(GameCard_1.GameCard));
exports.FighterCard = FighterCard;
},{"../Common/GameCard":1}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FighterPrototype = void 0;
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
exports.FighterPrototype = FighterPrototype;
},{}],8:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Fighter_1 = require("../Fighter");
var HeroCard_1 = require("./HeroCard");
var OnHeroPerk_1 = require("../../Perks/ForHero/OnHeroPerk");
var OnEnemyPerk_1 = require("../../Perks/ForHero/OnEnemyPerk");
var Store_1 = require("../../Store/Store");
var Util_1 = require("../../Common/Util");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(prototype, game) {
        var _this = _super.call(this, prototype, game) || this;
        _this.moveEnded = true;
        return _this;
    }
    Hero.prototype.initializePerks = function () {
        var _this = this;
        if (this.prototype.skills.indexOf(0) < 0)
            this.perks.push(new OnHeroPerk_1.OnHeroPerk(Store_1.store.perks[0], this, this.game));
        this.prototype.skills.forEach(function (perkNumber) {
            if (Store_1.store.perks[perkNumber].forSelf)
                _this.perks.push(new OnHeroPerk_1.OnHeroPerk(Store_1.store.perks[perkNumber], _this, _this.game));
            else
                _this.perks.push(new OnEnemyPerk_1.OnEnemyPerk(Store_1.store.perks[perkNumber], _this, _this.game));
        });
    };
    Hero.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _super.prototype.update.call(this);
                        this.perks.forEach(function (perk) { return perk.tryActivate(); });
                        this.moveEnded = false;
                        _a.label = 1;
                    case 1:
                        if (!!this.moveEnded) return [3 /*break*/, 3];
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.perks.forEach(function (perk) { return perk.deactivate(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Hero.prototype.createCard = function (prototype) {
        return new HeroCard_1.HeroCard(prototype.name, prototype.motto);
    };
    Hero.prototype.setMethod = function (targetMethod, effectMethod) {
        targetMethod(effectMethod);
    };
    Hero.prototype.sayManaLacking = function () {
        this.card.drawManaLacking();
    };
    Hero.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.game.gameEnded = true;
        this.game.heroWon = false;
    };
    return Hero;
}(Fighter_1.Fighter));
exports.Hero = Hero;
},{"../../Common/Util":2,"../../Perks/ForHero/OnEnemyPerk":15,"../../Perks/ForHero/OnHeroPerk":16,"../../Store/Store":21,"../Fighter":5,"./HeroCard":9}],9:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroCard = void 0;
var Util_1 = require("../../Common/Util");
var FighterCard_1 = require("../FighterCard");
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
    HeroCard.prototype.drawManaLacking = function () {
        return __awaiter(this, void 0, void 0, function () {
            var $manaProgress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $manaProgress = this.$card.find('.mana-progress');
                        $manaProgress.removeClass('bg-primary').addClass('bg-dark');
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
                    case 1:
                        _a.sent();
                        $manaProgress.removeClass('bg-dark').addClass('bg-primary');
                        return [2 /*return*/];
                }
            });
        });
    };
    return HeroCard;
}(FighterCard_1.FighterCard));
exports.HeroCard = HeroCard;
},{"../../Common/Util":2,"../FighterCard":6}],10:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPrototype = void 0;
var FighterPrototype_1 = require("../FighterPrototype");
var HeroPrototype = /** @class */ (function (_super) {
    __extends(HeroPrototype, _super);
    function HeroPrototype(id, name, hp, mana, skills, motto, firstDescription, secondDescription, answer, reaction) {
        var _this = _super.call(this, id, name, hp, mana, skills, motto) || this;
        _this.firstDescription = firstDescription;
        _this.secondDescription = secondDescription;
        _this.answer = answer;
        _this.reaction = reaction;
        return _this;
    }
    return HeroPrototype;
}(FighterPrototype_1.FighterPrototype));
exports.HeroPrototype = HeroPrototype;
},{"../FighterPrototype":7}],11:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Store_1 = require("../Store/Store");
var Util_1 = require("../Common/Util");
var Hero_1 = require("../Fighters/Hero/Hero");
var Enemy_1 = require("../Fighters/Enemy/Enemy");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.heroWon = true;
        this._killedEnemiesCount = 0;
        this._score = 0;
        this.initializeChoosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', function () { return _this.onConfirm(); });
        $('#new-game-button').on('click', function () { return window.location.reload(); });
    }
    Game.prototype.initializeChoosenWindow = function () {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heros.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeChoosenWindowExcept = function (index, $card) {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heros.length; i++) {
            if (i === index)
                $container.append($card);
            else
                $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeOneCard = function (index) {
        var _this = this;
        var $card = $('#choose-card').clone();
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(Store_1.store.heros[index].name);
        $card.find('.my-first-description').html(Store_1.store.heros[index].firstDescription);
        $card.find('.my-second-description').html(Store_1.store.heros[index].secondDescription);
        $card.removeClass('d-none');
        $card.on('click', function () { _this.chooseCardOnClick(index, $card.find('.card')); });
        return $card;
    };
    Game.prototype.chooseCardOnClick = function (index, $card) {
        var _a;
        $('#confirm-menu').removeClass('d-none');
        this.initializeChoosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        this.setReaction(Store_1.store.heros[index].answer, (_a = Store_1.store.heros[index]) === null || _a === void 0 ? void 0 : _a.reaction, $card);
    };
    Game.prototype.setReaction = function (string, method, $card) {
        $('#reaction').html(string);
        if (typeof method === 'function')
            method($card);
    };
    Game.prototype.onConfirm = function () {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        }
        ;
        this.hero = new Hero_1.Hero(Store_1.store.heros[this._heroNumber], this);
        this.initializeEnemies();
        this._movesToEnd = Store_1.store.movesToWinning;
        this.update();
    };
    Game.prototype.initializeEnemies = function () {
        this.enemies = [];
        for (var i = 0; i < Store_1.store.startEnemyCount; i++)
            this.addEnemy();
    };
    Game.prototype.addEnemy = function () {
        this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
    };
    Game.prototype.increaseKilledCount = function () {
        this._killedEnemiesCount++;
        $('#enemy-count').text(this._killedEnemiesCount);
        this.addScore(1000);
    };
    Game.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.gameEnded) {
                            this.endGame();
                            return [2 /*return*/];
                        }
                        this._movesToEnd--;
                        $('#moves-to-win').text(this._movesToEnd);
                        if (this._movesToEnd === 0)
                            this.gameEnded = true;
                        if (this.enemies.length < Store_1.store.enemiesMaxCount && Util_1.Util.randomInt(0, 100) < this.calculateAddingChance())
                            this.addEnemy();
                        return [4 /*yield*/, this.moveHero()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.moveEnemies()];
                    case 2:
                        _a.sent();
                        this.enemies = this.enemies.filter(function (enemy) { return enemy.hp > 0; });
                        return [4 /*yield*/, this.update()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.moveEnemies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('#move-of').html('<span class="text-danger">Enemies</span>');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.enemies.length)) return [3 /*break*/, 4];
                        this.enemies[i].update();
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.moveHero = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('#move-of').html('<span class="text-success">Hero</span>');
                        return [4 /*yield*/, this.hero.update()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.endGame = function () {
        var $endModal = $('#myModal2');
        $endModal.find('.modal-title').text(this.heroWon ? "You won!" : "You lost...");
        var $result = $('.progress-menu').clone().removeClass('col-8');
        $result.find('.mt-5').removeClass('mt-5');
        $result.find('.must-be-deleted').remove();
        $endModal.find('.modal-body').append($result);
        $('#button2').click();
    };
    Game.prototype.calculateAddingChance = function () {
        if (this.enemies.length === 0)
            return 100;
        var mc = Store_1.store.enemiesMaxCount;
        var tc = this.enemies.length;
        var min = Store_1.store.minAddEnemyChance;
        var max = Store_1.store.maxAddEnemyChance;
        return (mc - tc) / mc * (max - min) + min;
    };
    Game.prototype.activateEnemies = function (effect) {
        this.enemies.map(function (enemy) { enemy.activate(effect); });
    };
    Game.prototype.disactivateEnemies = function () {
        this.enemies.map(function (enemy) { enemy.disactivate(); });
    };
    Game.prototype.addLog = function (maker, target, actionDescription) {
        var $actionLog = $("<div>\n        ".concat(Util_1.Util.getFormatCurrentTime(), " <b>").concat(maker.prototype.name, "</b> ").concat(actionDescription, " <b>").concat(target == maker ? '' : target.prototype.name, "</b>\n        </div>"));
        $('#logs').prepend($actionLog);
    };
    Game.prototype.addScore = function (count) {
        this._score += count;
        $('#score').text(this._score);
    };
    return Game;
}());
exports.Game = Game;
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/Hero/Hero":8,"../Store/Store":21}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./Game");
var game;
function onLoad() {
    game = new Game_1.Game();
}
$(window).on('load', onLoad);
},{"./Game":11}],13:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyPerk = void 0;
var Perk_1 = require("../Perk");
var PerkAnimation_1 = require("../PerkAnimation");
var EnemyPerk = /** @class */ (function (_super) {
    __extends(EnemyPerk, _super);
    function EnemyPerk(prototype, owner, game) {
        var _this = _super.call(this, prototype, owner, game) || this;
        if (_this.prototype.animationPaths != null)
            _this.animation = new PerkAnimation_1.PerkAnimation(owner.getCard(), prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        _this.update();
        return _this;
    }
    EnemyPerk.prototype.apply = function () {
        var target = this.prototype.forSelf ? this.owner : this.game.hero;
        this.applyEffect(target);
    };
    return EnemyPerk;
}(Perk_1.Perk));
exports.EnemyPerk = EnemyPerk;
},{"../Perk":17,"../PerkAnimation":18}],14:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroPerk = void 0;
var PerkCard_1 = require("../PerkCard");
var PerkAnimation_1 = require("../PerkAnimation");
var Perk_1 = require("../Perk");
var HeroPerk = /** @class */ (function (_super) {
    __extends(HeroPerk, _super);
    function HeroPerk(prototype, hero, game) {
        var _this = _super.call(this, prototype, hero, game) || this;
        _this._card = _this.createCard(prototype);
        _this._card.setOnclick(_this.getOnclick());
        if (_this.prototype.animationPaths != null)
            _this.animation = new PerkAnimation_1.PerkAnimation(_this._card, prototype === null || prototype === void 0 ? void 0 : prototype.animationPaths);
        _this.update();
        return _this;
    }
    HeroPerk.prototype.createCard = function (prototype) {
        return new PerkCard_1.PerkCard(prototype.name, prototype.info);
    };
    HeroPerk.prototype.setMana = function (count) {
        _super.prototype.setMana.call(this, count);
        this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
    };
    HeroPerk.prototype.getOnclick = function () {
        var _this = this;
        return function () {
            _this.getActivator()(function (target) {
                if (_this.prototype.fighterManaDemand > _this.owner.mana) {
                    _this.owner.sayManaLacking();
                    return;
                }
                _this.applyEffect(target);
                _this.owner.moveEnded = true;
            });
        };
    };
    HeroPerk.prototype.applyEffect = function (target) {
        if (this.canBeApplied) {
            _super.prototype.applyEffect.call(this, target);
            this.game.addScore(this.prototype.score);
            this.game.disactivateEnemies();
            this.owner.disactivate();
        }
    };
    HeroPerk.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.owner.disactivate();
            _this.game.activateEnemies(onClickFunction);
        };
    };
    HeroPerk.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.game.disactivateEnemies();
            _this.owner.activate(onClickFunction);
        };
    };
    HeroPerk.prototype.tryActivate = function () {
        if (this.mana >= this.prototype.mana)
            this._card.turnOn();
    };
    HeroPerk.prototype.deactivate = function () {
        this._card.turnOff();
    };
    return HeroPerk;
}(Perk_1.Perk));
exports.HeroPerk = HeroPerk;
},{"../Perk":17,"../PerkAnimation":18,"../PerkCard":19}],15:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnEnemyPerk = void 0;
var HeroPerk_1 = require("./HeroPerk");
var OnEnemyPerk = /** @class */ (function (_super) {
    __extends(OnEnemyPerk, _super);
    function OnEnemyPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnEnemyPerk.prototype.getActivator = function () {
        return this.getOnEnemyMethod();
    };
    return OnEnemyPerk;
}(HeroPerk_1.HeroPerk));
exports.OnEnemyPerk = OnEnemyPerk;
},{"./HeroPerk":14}],16:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnHeroPerk = void 0;
var HeroPerk_1 = require("./HeroPerk");
var OnHeroPerk = /** @class */ (function (_super) {
    __extends(OnHeroPerk, _super);
    function OnHeroPerk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnHeroPerk.prototype.getActivator = function () {
        return this.getOnHeroMethod();
    };
    return OnHeroPerk;
}(HeroPerk_1.HeroPerk));
exports.OnHeroPerk = OnHeroPerk;
},{"./HeroPerk":14}],17:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perk = void 0;
var PerkCard_1 = require("./PerkCard");
var Perk = /** @class */ (function () {
    function Perk(prototype, owner, game) {
        this.prototype = prototype;
        this.owner = owner;
        this.game = game;
        this._mana = 0;
    }
    Perk.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.addMana(20);
                return [2 /*return*/];
            });
        });
    };
    Perk.prototype.createCard = function (prototype) {
        return new PerkCard_1.PerkCard(prototype.name, prototype.info);
    };
    Object.defineProperty(Perk.prototype, "mana", {
        get: function () {
            return this._mana;
        },
        set: function (count) {
            this.setMana(count);
        },
        enumerable: false,
        configurable: true
    });
    Perk.prototype.setMana = function (count) {
        this._mana = this.getRealMana(count);
    };
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
    Perk.prototype.applyEffect = function (target) {
        var _this = this;
        if (!this.canBeApplied())
            return;
        this.mana = 0;
        this.owner.addMana(-this.prototype.fighterManaDemand);
        if (this.animation != null)
            this.animation.animate(target.getCoords()).then(function () {
                _this.prototype.effect(target, _this.owner, _this.game);
            });
        else
            this.prototype.effect(target, this.owner, this.game);
        this.game.addLog(this.owner, target, this.prototype.actionString);
    };
    Perk.prototype.canBeApplied = function () {
        return this.mana >= this.prototype.mana && this.owner.mana >= this.prototype.fighterManaDemand;
    };
    return Perk;
}());
exports.Perk = Perk;
},{"./PerkCard":19}],18:[function(require,module,exports){
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkAnimation = void 0;
var Util_1 = require("../Common/Util");
var PerkAnimation = /** @class */ (function () {
    function PerkAnimation(startPointHandler, imagesPaths) {
        this.startPointHandler = startPointHandler;
        this.imagesPaths = imagesPaths;
    }
    PerkAnimation.prototype.animate = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var $original, $animation, index, imagePath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $original = $('.animation');
                        $animation = $original.clone().removeClass('animation');
                        $original.after($animation);
                        $animation.removeClass('d-none');
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < this.imagesPaths.length)) return [3 /*break*/, 4];
                        imagePath = this.imagesPaths[index];
                        $animation.attr('src', imagePath);
                        $animation.offset({
                            left: this.startPointHandler.getCoords().left + (endpoint.left - this.startPointHandler.getCoords().left) * index / (this.imagesPaths.length),
                            top: this.startPointHandler.getCoords().top + (endpoint.top - this.startPointHandler.getCoords().top) * index / (this.imagesPaths.length)
                        });
                        return [4 /*yield*/, Util_1.Util.sleep(500 / this.imagesPaths.length)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        $animation.remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PerkAnimation;
}());
exports.PerkAnimation = PerkAnimation;
},{"../Common/Util":2}],19:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkCard = void 0;
var GameCard_1 = require("../Common/GameCard");
var PerkCard = /** @class */ (function (_super) {
    __extends(PerkCard, _super);
    function PerkCard(name, info) {
        if (name === void 0) { name = "perk name"; }
        if (info === void 0) { info = "info"; }
        var _this = _super.call(this) || this;
        _this.$card = _this.$initializeCard(name, info);
        $('#hero-menu').append(_this.$card);
        _this._onclick = null;
        return _this;
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
        this.$card.find('.mana-progress').width(percents + '%');
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
        this.$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this.$card.on("click", function () {
            $('.perk-card').removeClass('border-primary');
            _this.$card.addClass('border-primary');
            _this._onclick();
        });
        this.$card.on("mouseenter", function () {
            _this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", function () {
            _this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
    };
    PerkCard.prototype.turnOff = function () {
        this.$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
    };
    return PerkCard;
}(GameCard_1.GameCard));
exports.PerkCard = PerkCard;
},{"../Common/GameCard":1}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerkPrototype = void 0;
var PerkPrototype = /** @class */ (function () {
    function PerkPrototype(id, name, mana, fighterManaDemand, info, effect, forSelf, actionString, score, animationPaths) {
        this.id = id;
        this.name = name;
        this.mana = mana;
        this.fighterManaDemand = fighterManaDemand;
        this.info = info;
        this.effect = effect;
        this.forSelf = forSelf;
        this.actionString = actionString;
        this.score = score;
        this.animationPaths = animationPaths;
    }
    return PerkPrototype;
}());
exports.PerkPrototype = PerkPrototype;
},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var HeroPrototype_1 = require("../Fighters/Hero/HeroPrototype");
var FighterPrototype_1 = require("../Fighters/FighterPrototype");
var PerkPrototype_1 = require("../Perks/PerkPrototype");
var Util_1 = require("../Common/Util");
exports.store = {
    enemiesMaxCount: 12,
    minAddEnemyChance: 15,
    maxAddEnemyChance: 35,
    movesToWinning: 40,
    startEnemyCount: 1,
    enemyMoveChance: 75,
    diedLog: '<span class="text-danger">погиб.</span> Press F to pay respect',
    heros: [
        new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
            $card.addClass("bg-success text-white");
            $card.find("span").removeClass().addClass("text-dark");
        }),
        new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 300, 200, [0, 1, 3, 4], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
            $card.parent().parent().children().children().addClass("bg-transparent");
            $card.addClass("bg-light text-dark");
            $card.removeClass("bg-transparent");
            $card.parent().parent().parent().parent().addClass("bg-dark text-white");
            Util_1.Util.sleep(2000).then(function () {
                $card.parent().parent().parent().parent().removeClass("bg-dark text-white");
            });
        }),
        new HeroPrototype_1.HeroPrototype(2, 'Дынчундук', 500, 100, [0, 1, 3], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!', function ($card) {
            $card.addClass("bg-warning");
            $card.find(".text-warning").removeClass("text-warning");
        }),
        new HeroPrototype_1.HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 1000, 50, [1, 2, 3], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!', function ($card) {
            Util_1.Util.fireworks();
        }),
        new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 500, 100, [0, 1, 2], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Потряси меня!</span>')
    ],
    enemies: [
        new FighterPrototype_1.FighterPrototype(0, 'Редисон', 500, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 500, 100, [0, 1, 5, 7], 'Агрх!'),
        new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 5], 'Упф'),
        new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 4], '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype_1.PerkPrototype(0, 'Пропуск хода', 1, 0, '', function () { }, true, 'пропустил ход', 0),
        new PerkPrototype_1.PerkPrototype(1, 'Взрыв', 50, 20, 'Пытается убить одного врага', function (target) { target.addHp(-100); }, false, 'бахнул взрывом по', 50, Util_1.Util.getImagesPaths(1, 25)),
        new PerkPrototype_1.PerkPrototype(2, 'Молния', 30, 50, 'Пытается убить всех', function (target, owner, game) {
            game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
        }, false, 'бахнул молнией по всем, в том числе по', 120, Util_1.Util.getImagesPaths(2, 6)),
        new PerkPrototype_1.PerkPrototype(3, 'Лечение', 50, 50, 'Никого не пытается убить', function (target, owner) {
            target.addHp(150);
        }, true, 'подлечился лечением', 50, Util_1.Util.getImagesPaths(3, 13)),
        new PerkPrototype_1.PerkPrototype(4, 'Жертва', 70, 0, 'Пытается убить самого себя', function (target, owner) {
            target.addMana(100);
            target.addHp(-50);
        }, true, 'предпринял попытку суицида и восстановил манну', 50, Util_1.Util.getImagesPaths(4, 20)),
        new PerkPrototype_1.PerkPrototype(5, 'Кража жизни', 30, 20, 'Пытается убить во благо', function (target, owner) {
            owner.addHp(-target.addHp(-50));
        }, false, 'отнял жизни у', 30, Util_1.Util.getImagesPaths(5, 9)),
        new PerkPrototype_1.PerkPrototype(6, 'Вихрь', 30, 50, 'Пытается убить окружение врага', function (target, owner, game) {
            var enemy = target;
            enemy.addHp(-200);
            var index = game.enemies.indexOf(enemy);
            if (index > 0)
                game.enemies[index - 1].addHp(-100);
            if (index < game.enemies.length - 1)
                game.enemies[index + 1].addHp(-100);
        }, false, 'бахнул вихрем по соседям, да и по самому', 120, Util_1.Util.getImagesPaths(6, 25)),
        new PerkPrototype_1.PerkPrototype(7, 'Кража маны', 100, 0, 'Пытается убить посредственно', function (target, owner, game) {
            owner.addMana(-target.addMana(-200));
        }, false, 'украл ману у', 50, Util_1.Util.getImagesPaths(7, 26)),
        new PerkPrototype_1.PerkPrototype(8, 'Большой и глупый вред себе', 1, 0, '(тестовое)', function (target, owner) {
            owner.addHp(-300);
            owner.addMana(-300);
        }, true, 'очень глупый', 500)
    ],
};
},{"../Common/Util":2,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":20}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9HYW1lQ2FyZC50cyIsIlRTY3JpcHQvQ29tbW9uL1V0aWwudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteUNhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm8udHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvTWFpbi9HYW1lLnRzIiwiVFNjcmlwdC9NYWluL1Byb2dyYW0udHMiLCJUU2NyaXB0L1BlcmtzL0ZvckVuZW15L0VuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9IZXJvUGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQ2FyZC50cyIsIlRTY3JpcHQvUGVya3MvUGVya1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUFBO0lBTUEsQ0FBQztJQUhVLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7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YSxDQUNiLENBQUMsRUFDRCxZQUFZLEVBQ1osR0FBRyxFQUNILENBQUMsRUFDRCw4QkFBOEIsRUFDOUIsVUFBQyxNQUFlLEVBQUUsS0FBYyxFQUFFLElBQVU7WUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFDRCxLQUFLLEVBQ0wsY0FBYyxFQUNkLEVBQUUsRUFDRixXQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0I7UUFFRCxJQUFJLDZCQUFhLENBQ2IsQ0FBQyxFQUNELDRCQUE0QixFQUM1QixDQUFDLEVBQ0QsQ0FBQyxFQUNELFlBQVksRUFDWixVQUFDLE1BQWUsRUFBRSxLQUFjO1lBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUNELElBQUksRUFDSixjQUFjLEVBQ2QsR0FBRyxDQUNOO0tBQ0o7Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhcmQge1xyXG4gICAgcHJvdGVjdGVkICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kY2FyZC5vZmZzZXQoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dW5rbm93bj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluID0gMCwgbWF4ID0gMTAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Rm9ybWF0Q3VycmVudFRpbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGBbJHtkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmaXJld29ya3MoKSB7XHJcbiAgICAgICAgbGV0ICRmaXJld29ya3MgPSAkKCcuZmlyZXdvcmtzJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICRmaXJld29ya3Mub2Zmc2V0KHsgbGVmdDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSwgdG9wOiBVdGlsLnJhbmRvbUludCgwLCA1MDApIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEltYWdlc1BhdGhzKG51bWJlcjogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogY291bnQgfSkubWFwKCh1bnVzZWQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYC4vaW1hZ2VzL2FuaW1hdGlvbi8ke251bWJlcn0vaW1hZ2VfcGFydF8keyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX0ucG5nYClcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBFbmVteUNhcmQgfSBmcm9tIFwiLi9FbmVteUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEVuZW15UGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JFbmVteS9FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcGVya3M6IEVuZW15UGVya1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuc2tpbGxzLmluZGV4T2YoMCkgPCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IEVuZW15UGVyayhzdG9yZS5wZXJrc1swXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZUVuZGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYoVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IHN0b3JlLmVuZW15TW92ZUNoYW5jZSl7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IFV0aWwucmFuZG9tSW50KDEsIHRoaXMucGVya3MubGVuZ3RoKTtcclxuICAgICAgICAgICAgd2hpbGUgKGluZGV4ID4gMCAmJiAhdGhpcy5wZXJrc1tpbmRleF0uY2FuQmVBcHBsaWVkKCkpXHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5jcmVhc2VQZXJrSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmtzW2luZGV4XS5hcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucGVya3NbMF0uYXBwbHkoKTtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluY3JlYXNlUGVya0luZGV4KGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiAoaW5kZXggKyAxKSAlIHRoaXMucGVya3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEVuZW15Q2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbmNyZWFzZUtpbGxlZENvdW50KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15Q2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuXHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IElQb2ludCB9IGZyb20gXCIuLi9QZXJrcy9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi4vUGVya3MvUGVya1wiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpZ2h0ZXIge1xyXG4gICAgcHJpdmF0ZSBfaHA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21hbmE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBjYXJkOiBGaWdodGVyQ2FyZDtcclxuICAgIHByb3RlY3RlZCBwZXJrczogUGVya1tdO1xyXG4gICAgcHJpdmF0ZSBfd2VyZVJlbW92ZWQ6IGJvb2xlYW47IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2hwID0gcHJvdG90eXBlLmhwO1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSBwcm90b3R5cGUubWFuYTtcclxuICAgICAgICB0aGlzLnBlcmtzID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUGVya3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaW5pdGlhbGl6ZVBlcmtzKCk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkTWFuYSgzMCk7XHJcbiAgICAgICAgdGhpcy5hZGRIcCgxMCk7XHJcbiAgICAgICAgdGhpcy5wZXJrcy5mb3JFYWNoKChwZXJrKSA9PiBwZXJrLnVwZGF0ZSgpKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dlcmVSZW1vdmVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fd2VyZVJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuYWRkTG9nKHRoaXMsIHRoaXMsIHN0b3JlLmRpZWRMb2cpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmlnaHRlckNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBocCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhwKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9ocCA9IHRoaXMuZ2V0QWRlcXVhdGVIcChjb3VudCk7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNldEhwV2lkdGgodGhpcy5faHAgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5ocCk7XHJcbiAgICAgICAgaWYodGhpcy5faHAgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEhwKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFydEhwID0gdGhpcy5faHA7XHJcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMuX2hwICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hwIC0gc3RhcnRIcDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlSHAoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUuaHApIHJldHVybiB0aGlzLnByb3RvdHlwZS5ocDtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRBZGVxdWF0ZU1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRNYW5hV2lkdGgodGhpcy5fbWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBzdGFydE1hbmEgPSB0aGlzLl9tYW5hO1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMuX21hbmEgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYSAtIHN0YXJ0TWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEFkZXF1YXRlTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5tYW5hKSByZXR1cm4gdGhpcy5wcm90b3R5cGUubWFuYTtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFjdGl2YXRlKGVmZmVjdDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9uKGVmZmVjdCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc2FjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhcmQoKTogR2FtZUNhcmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiBJUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQuZ2V0Q29vcmRzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUYnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgICAgIFV0aWwuZmlyZXdvcmtzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImVuZW15IG5hbWVcIiwgbW90dG8gPSBcIm1vdHRvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kZ2V0TWVudSgpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgJGdldE1lbnUoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNlbmVtaWVzLW1lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjZmlnaHRlci1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1tb3R0bycpLmh0bWwobW90dG8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhwV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLmhwLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYW5hV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9uKGVmZmVjdDogRnVuY3Rpb24sIG93bmVyOiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWZmZWN0KG93bmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBza2lsbHM6IG51bWJlcltdLCBcclxuICAgICAgICBwdWJsaWMgbW90dG86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEhlcm9Qcm90b3R5cGUgfSBmcm9tIFwiLi9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBIZXJvQ2FyZCB9IGZyb20gXCIuL0hlcm9DYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IE9uSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vT25FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9IZXJvUGVya1wiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IHBlcmtzOiBIZXJvUGVya1tdO1xyXG4gICAgcHVibGljIG1vdmVFbmRlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBIZXJvUHJvdG90eXBlLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuc2tpbGxzLmluZGV4T2YoMCkgPCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uSGVyb1Blcmsoc3RvcmUucGVya3NbMF0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnNraWxscy5mb3JFYWNoKHBlcmtOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RvcmUucGVya3NbcGVya051bWJlcl0uZm9yU2VsZilcclxuICAgICAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25FbmVteVBlcmsoc3RvcmUucGVya3NbcGVya051bWJlcl0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wZXJrcy5mb3JFYWNoKChwZXJrKSA9PiBwZXJrLnRyeUFjdGl2YXRlKCkpO1xyXG4gICAgICAgIHRoaXMubW92ZUVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKCF0aGlzLm1vdmVFbmRlZClcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDAwKTtcclxuICAgICAgICB0aGlzLnBlcmtzLmZvckVhY2goKHBlcmspID0+IHBlcmsuZGVhY3RpdmF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIZXJvQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLm1vdHRvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWV0aG9kKHRhcmdldE1ldGhvZDogRnVuY3Rpb24sIGVmZmVjdE1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0YXJnZXRNZXRob2QoZWZmZWN0TWV0aG9kKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F5TWFuYUxhY2tpbmcoKTogdm9pZCB7XHJcbiAgICAgICAgKDxIZXJvQ2FyZD50aGlzLmNhcmQpLmRyYXdNYW5hTGFja2luZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lLmhlcm9Xb24gPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvQ2FyZCBleHRlbmRzIEZpZ2h0ZXJDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbW90dG86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIG1vdHRvKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdlbmVteS1jYXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjaGVyby1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGRyYXdNYW5hTGFja2luZygpIHtcclxuICAgICAgICBsZXQgJG1hbmFQcm9ncmVzcyA9IHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKTtcclxuICAgICAgICAkbWFuYVByb2dyZXNzLnJlbW92ZUNsYXNzKCdiZy1wcmltYXJ5JykuYWRkQ2xhc3MoJ2JnLWRhcmsnKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctZGFyaycpLmFkZENsYXNzKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvUHJvdG90eXBlIGV4dGVuZHMgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBpZDogbnVtYmVyLCBcclxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIG1hbmE6IG51bWJlciwgXHJcbiAgICAgICAgc2tpbGxzOiBBcnJheTxudW1iZXI+LCBcclxuICAgICAgICBtb3R0bzogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBmaXJzdERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNlY29uZERlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGFuc3dlcjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyByZWFjdGlvbj86ICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4gdm9pZFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGhwLCBtYW5hLCBza2lsbHMsIG1vdHRvKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIF9oZXJvTnVtYmVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2FtZUVuZGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGhlcm9Xb24gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfa2lsbGVkRW5lbWllc0NvdW50ID0gMDtcclxuICAgIHByaXZhdGUgX21vdmVzVG9FbmQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZXJvOiBIZXJvO1xyXG4gICAgcHVibGljIGVuZW1pZXM6IEFycmF5PEVuZW15PjtcclxuICAgIHByaXZhdGUgX3Njb3JlID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9vc2VuV2luZG93KCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgJCgnI2dhbWUtc3RhcnQtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbmZpcm0oKSk7XHJcbiAgICAgICAgJCgnI25ldy1nYW1lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ2hvb3NlbldpbmRvdygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9vc2VuV2luZG93RXhjZXB0KGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjY2FyZC1jb250YWluZXInKTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5oZXJvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkY2FyZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVPbmVDYXJkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjY2hvb3NlLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgICRjYXJkLmNoaWxkcmVuKCdkaXYnKS5hdHRyKCdkYXRhLWhlcm8taWQnLCBpbmRleCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChzdG9yZS5oZXJvc1tpbmRleF0ubmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWZpcnN0LWRlc2NyaXB0aW9uJykuaHRtbChzdG9yZS5oZXJvc1tpbmRleF0uZmlyc3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXNlY29uZC1kZXNjcmlwdGlvbicpLmh0bWwoc3RvcmUuaGVyb3NbaW5kZXhdLnNlY29uZERlc2NyaXB0aW9uKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQub24oJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNob29zZUNhcmRPbkNsaWNrKGluZGV4LCAkY2FyZC5maW5kKCcuY2FyZCcpKSB9KTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaG9vc2VDYXJkT25DbGljayhpbmRleDogbnVtYmVyLCAkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgICQoJyNjb25maXJtLW1lbnUnKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2hvb3NlbldpbmRvd0V4Y2VwdChpbmRleCwgJGNhcmQucGFyZW50KCkpO1xyXG4gICAgICAgICRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuX2hlcm9OdW1iZXIgPSBpbmRleDtcclxuICAgICAgICB0aGlzLnNldFJlYWN0aW9uKHN0b3JlLmhlcm9zW2luZGV4XS5hbnN3ZXIsIHN0b3JlLmhlcm9zW2luZGV4XT8ucmVhY3Rpb24sICRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJlYWN0aW9uKHN0cmluZzogc3RyaW5nLCBtZXRob2Q/OiBGdW5jdGlvbiwgJGNhcmQ/OiBKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICAkKCcjcmVhY3Rpb24nKS5odG1sKHN0cmluZyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIG1ldGhvZCgkY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbmZpcm0oKTogdm9pZCB7XHJcbiAgICAgICAgJCgnI2J1dHRvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hlcm9OdW1iZXIgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSGVybyhzdG9yZS5oZXJvc1t0aGlzLl9oZXJvTnVtYmVyXSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRW5lbWllcygpO1xyXG4gICAgICAgIHRoaXMuX21vdmVzVG9FbmQgPSBzdG9yZS5tb3Zlc1RvV2lubmluZztcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZUVuZW1pZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5zdGFydEVuZW15Q291bnQ7IGkrKykgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRW5lbXkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHN0b3JlLmVuZW1pZXNbVXRpbC5yYW5kb21JbnQoMCwgc3RvcmUuZW5lbWllcy5sZW5ndGgpXSwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbmNyZWFzZUtpbGxlZENvdW50KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2tpbGxlZEVuZW1pZXNDb3VudCsrO1xyXG4gICAgICAgICQoJyNlbmVteS1jb3VudCcpLnRleHQodGhpcy5fa2lsbGVkRW5lbWllc0NvdW50KTtcclxuICAgICAgICB0aGlzLmFkZFNjb3JlKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVFbmRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tb3Zlc1RvRW5kLS07XHJcbiAgICAgICAgJCgnI21vdmVzLXRvLXdpbicpLnRleHQodGhpcy5fbW92ZXNUb0VuZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX21vdmVzVG9FbmQgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUVuZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmxlbmd0aCA8IHN0b3JlLmVuZW1pZXNNYXhDb3VudCAmJiBVdGlsLnJhbmRvbUludCgwLCAxMDApIDwgdGhpcy5jYWxjdWxhdGVBZGRpbmdDaGFuY2UoKSlcclxuICAgICAgICAgICAgdGhpcy5hZGRFbmVteSgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMubW92ZUhlcm8oKTtcclxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVFbmVtaWVzKCk7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gdGhpcy5lbmVtaWVzLmZpbHRlcigoZW5lbXkpID0+IGVuZW15LmhwID4gMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG1vdmVFbmVtaWVzKCkge1xyXG4gICAgICAgICQoJyNtb3ZlLW9mJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkVuZW1pZXM8L3NwYW4+Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbW92ZUhlcm8oKSB7XHJcbiAgICAgICAgJCgnI21vdmUtb2YnKS5odG1sKCc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPkhlcm88L3NwYW4+Jyk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5oZXJvLnVwZGF0ZSgpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkZW5kTW9kYWwgPSAkKCcjbXlNb2RhbDInKTtcclxuICAgICAgICAkZW5kTW9kYWwuZmluZCgnLm1vZGFsLXRpdGxlJykudGV4dCh0aGlzLmhlcm9Xb24gPyBcIllvdSB3b24hXCIgOiBcIllvdSBsb3N0Li4uXCIpO1xyXG4gICAgICAgIGxldCAkcmVzdWx0ID0gJCgnLnByb2dyZXNzLW1lbnUnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdjb2wtOCcpO1xyXG4gICAgICAgICRyZXN1bHQuZmluZCgnLm10LTUnKS5yZW1vdmVDbGFzcygnbXQtNScpO1xyXG4gICAgICAgICRyZXN1bHQuZmluZCgnLm11c3QtYmUtZGVsZXRlZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICRlbmRNb2RhbC5maW5kKCcubW9kYWwtYm9keScpLmFwcGVuZCgkcmVzdWx0KTtcclxuICAgICAgICAkKCcjYnV0dG9uMicpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVBZGRpbmdDaGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiAxMDA7XHJcbiAgICAgICAgbGV0IG1jID0gc3RvcmUuZW5lbWllc01heENvdW50O1xyXG4gICAgICAgIGxldCB0YyA9IHRoaXMuZW5lbWllcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IG1pbiA9IHN0b3JlLm1pbkFkZEVuZW15Q2hhbmNlO1xyXG4gICAgICAgIGxldCBtYXggPSBzdG9yZS5tYXhBZGRFbmVteUNoYW5jZTtcclxuICAgICAgICByZXR1cm4gKG1jIC0gdGMpIC8gbWMgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUVuZW1pZXMoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmFjdGl2YXRlKGVmZmVjdCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWN0aXZhdGVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmRpc2FjdGl2YXRlKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTG9nKG1ha2VyOiBGaWdodGVyLCB0YXJnZXQ6IEZpZ2h0ZXIsIGFjdGlvbkRlc2NyaXB0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGFjdGlvbkxvZyA9ICQoYDxkaXY+XHJcbiAgICAgICAgJHtVdGlsLmdldEZvcm1hdEN1cnJlbnRUaW1lKCl9IDxiPiR7bWFrZXIucHJvdG90eXBlLm5hbWV9PC9iPiAke2FjdGlvbkRlc2NyaXB0aW9ufSA8Yj4ke3RhcmdldCA9PSBtYWtlciA/ICcnIDogdGFyZ2V0LnByb3RvdHlwZS5uYW1lfTwvYj5cclxuICAgICAgICA8L2Rpdj5gKTtcclxuICAgICAgICAkKCcjbG9ncycpLnByZXBlbmQoJGFjdGlvbkxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU2NvcmUoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3Njb3JlICs9IGNvdW50O1xyXG4gICAgICAgICQoJyNzY29yZScpLnRleHQodGhpcy5fc2NvcmUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XHJcblxyXG5sZXQgZ2FtZTogR2FtZTtcclxuXHJcbmZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuICAgIGdhbWUgPSBuZXcgR2FtZSgpO1xyXG59XHJcblxyXG4kKHdpbmRvdykub24oJ2xvYWQnLCBvbkxvYWQpOyIsImltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCJcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIlxyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtcIlxyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRW5lbXlQZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgb3duZXI6IEVuZW15LFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgb3duZXIsIGdhbWUpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5hbmltYXRpb25QYXRocyAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBQZXJrQW5pbWF0aW9uKG93bmVyLmdldENhcmQoKSwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHkoKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMucHJvdG90eXBlLmZvclNlbGYgPyB0aGlzLm93bmVyIDogdGhpcy5nYW1lLmhlcm87XHJcbiAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi4vUGVya0NhcmRcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBQZXJrQW5pbWF0aW9uIH0gZnJvbSBcIi4uL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuLi9QZXJrXCI7XHJcblxyXG50eXBlIFBlcmtDYXJkT25DbGljayA9ICgpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEZvckZpZ2h0ZXJDYXJkT25DbGljayA9ICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIEFjdGl2YXRpb25GdW5jdGlvbiA9IChtZXRob2Q6IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4gdm9pZDtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGVyb1BlcmsgZXh0ZW5kcyBQZXJrIHtcclxuICAgIHByaXZhdGUgX2NhcmQ6IFBlcmtDYXJkO1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIG93bmVyOiBIZXJvO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgaGVybzogSGVybyxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGhlcm8sIGdhbWUpXHJcbiAgICAgICAgdGhpcy5fY2FyZCA9IHRoaXMuY3JlYXRlQ2FyZChwcm90b3R5cGUpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0T25jbGljayh0aGlzLmdldE9uY2xpY2soKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmFuaW1hdGlvblBhdGhzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24odGhpcy5fY2FyZCwgcHJvdG90eXBlPy5hbmltYXRpb25QYXRocyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUpOiBQZXJrQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJrQ2FyZChwcm90b3R5cGUubmFtZSwgcHJvdG90eXBlLmluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIHNldE1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyLnNldE1hbmEoY291bnQpO1xyXG4gICAgICAgIHRoaXMuX2NhcmQuc2V0UHJvZ3Jlc3NXaWR0aCh0aGlzLm1hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0T25jbGljaygpOiBQZXJrQ2FyZE9uQ2xpY2sge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QWN0aXZhdG9yKCkoXHJcbiAgICAgICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kID4gdGhpcy5vd25lci5tYW5hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIuc2F5TWFuYUxhY2tpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIubW92ZUVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXBwbHlFZmZlY3QodGFyZ2V0OiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuQmVBcHBsaWVkKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLmFwcGx5RWZmZWN0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGRTY29yZSh0aGlzLnByb3RvdHlwZS5zY29yZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kaXNhY3RpdmF0ZUVuZW1pZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kaXNhY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRPbkVuZW15TWV0aG9kKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIChvbkNsaWNrRnVuY3Rpb246IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmRpc2FjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5hY3RpdmF0ZUVuZW1pZXMob25DbGlja0Z1bmN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRPbkhlcm9NZXRob2QoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gKG9uQ2xpY2tGdW5jdGlvbjogRm9yRmlnaHRlckNhcmRPbkNsaWNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kaXNhY3RpdmF0ZUVuZW1pZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5hY3RpdmF0ZShvbkNsaWNrRnVuY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1hbmEgPj0gdGhpcy5wcm90b3R5cGUubWFuYSlcclxuICAgICAgICAgICAgdGhpcy5fY2FyZC50dXJuT24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYXJkLnR1cm5PZmYoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFjdGl2YXRpb25GdW5jdGlvbiwgSGVyb1BlcmsgfSBmcm9tIFwiLi9IZXJvUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uRW5lbXlQZXJrIGV4dGVuZHMgSGVyb1Blcmsge1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9uRW5lbXlNZXRob2QoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFjdGl2YXRpb25GdW5jdGlvbiwgSGVyb1BlcmsgfSBmcm9tIFwiLi9IZXJvUGVya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9uSGVyb1BlcmsgZXh0ZW5kcyBIZXJvUGVyayB7XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T25IZXJvTWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJrQ2FyZCB9IGZyb20gXCIuL1BlcmtDYXJkXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgUGVya0FuaW1hdGlvbiB9IGZyb20gXCIuL1BlcmtBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVyayB7XHJcbiAgICBwcm90ZWN0ZWQgX21hbmE6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBhbmltYXRpb24/OiBQZXJrQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCBwcm90b3R5cGU6IFBlcmtQcm90b3R5cGUsXHJcbiAgICAgICAgcHJvdGVjdGVkIG93bmVyOiBGaWdodGVyLFxyXG4gICAgICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMuYWRkTWFuYSgyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBQZXJrUHJvdG90eXBlKTogUGVya0NhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGVya0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hbmEoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFuYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2V0TWFuYShjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldE1hbmEoY291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX21hbmEgPSB0aGlzLmdldFJlYWxNYW5hKGNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFuYShjb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYW5hID0gdGhpcy5tYW5hICsgY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFJlYWxNYW5hKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLm1hbmEpIHJldHVybiB0aGlzLnByb3RvdHlwZS5tYW5hO1xyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXBwbHlFZmZlY3QodGFyZ2V0OiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbkJlQXBwbGllZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubWFuYSA9IDA7XHJcbiAgICAgICAgdGhpcy5vd25lci5hZGRNYW5hKC10aGlzLnByb3RvdHlwZS5maWdodGVyTWFuYURlbWFuZCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbiAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5hbmltYXRlKHRhcmdldC5nZXRDb29yZHMoKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5lZmZlY3QodGFyZ2V0LCB0aGlzLm93bmVyLCB0aGlzLmdhbWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHJvdG90eXBlLmVmZmVjdCh0YXJnZXQsIHRoaXMub3duZXIsIHRoaXMuZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFkZExvZyh0aGlzLm93bmVyLCB0YXJnZXQsIHRoaXMucHJvdG90eXBlLmFjdGlvblN0cmluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbkJlQXBwbGllZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hID49IHRoaXMucHJvdG90eXBlLm1hbmEgJiYgdGhpcy5vd25lci5tYW5hID49IHRoaXMucHJvdG90eXBlLmZpZ2h0ZXJNYW5hRGVtYW5kO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vQ29tbW9uL1V0aWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBvaW50IHtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIHRvcDogbnVtYmVyO1xyXG59IFxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtBbmltYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzdGFydFBvaW50SGFuZGxlcjogR2FtZUNhcmQsXHJcbiAgICAgICAgcHJpdmF0ZSBpbWFnZXNQYXRoczogQXJyYXk8c3RyaW5nPiBcclxuICAgICkge31cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYW5pbWF0ZShlbmRwb2ludDogSVBvaW50KSB7XHJcbiAgICAgICAgbGV0ICRvcmlnaW5hbCA9ICQoJy5hbmltYXRpb24nKTtcclxuICAgICAgICBsZXQgJGFuaW1hdGlvbiA9ICRvcmlnaW5hbC5jbG9uZSgpLnJlbW92ZUNsYXNzKCdhbmltYXRpb24nKTtcclxuICAgICAgICAkb3JpZ2luYWwuYWZ0ZXIoJGFuaW1hdGlvbik7XHJcbiAgICAgICAgJGFuaW1hdGlvbi5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZVBhdGggPSB0aGlzLmltYWdlc1BhdGhzW2luZGV4XTtcclxuICAgICAgICAgICAgJGFuaW1hdGlvbi5hdHRyKCdzcmMnLCBpbWFnZVBhdGgpO1xyXG4gICAgICAgICAgICAkYW5pbWF0aW9uLm9mZnNldCh7IFxyXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS5sZWZ0ICsgKGVuZHBvaW50LmxlZnQgLSB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLmxlZnQpICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLnRvcCArIChlbmRwb2ludC50b3AgLSB0aGlzLnN0YXJ0UG9pbnRIYW5kbGVyLmdldENvb3JkcygpLnRvcCkgKiBpbmRleCAvICh0aGlzLmltYWdlc1BhdGhzLmxlbmd0aClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwIC8gdGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkYW5pbWF0aW9uLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVya0NhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBwcml2YXRlIF9vbmNsaWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJwZXJrIG5hbWVcIiwgaW5mbyA9IFwiaW5mb1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgaW5mbyk7XHJcbiAgICAgICAgJCgnI2hlcm8tbWVudScpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgICAgICB0aGlzLl9vbmNsaWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBpbmZvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjcGVyay1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1pbmZvJykuaHRtbChpbmZvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQuYWRkQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9uY2xpY2sobWV0aG9kOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uY2xpY2sgPSBtZXRob2Q7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvZ3Jlc3NXaWR0aChwZXJjZW50czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgcGVyY2VudHMgPSB0aGlzLmdldFJlYWxQZXJjZW50cyhwZXJjZW50cyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICB0dXJuT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLnJlbW92ZUNsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAkKCcucGVyay1jYXJkJykucmVtb3ZlQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQuYWRkQ2xhc3MoJ2JvcmRlci1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuX29uY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykuYWRkQ2xhc3MoJ3Byb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVya1Byb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtYW5hOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGZpZ2h0ZXJNYW5hRGVtYW5kOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGluZm86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZWZmZWN0OiAodGFyZ2V0OiBGaWdodGVyLCBvd25lcj86IEZpZ2h0ZXIsIGdhbWU/OiBHYW1lKSA9PiB2b2lkLFxyXG4gICAgICAgIHB1YmxpYyBmb3JTZWxmOiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyBhY3Rpb25TdHJpbmc6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc2NvcmU6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgYW5pbWF0aW9uUGF0aHM/OiBzdHJpbmdbXVxyXG4gICAgKSB7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgUGVya1Byb3RvdHlwZSB9IGZyb20gXCIuLi9QZXJrcy9QZXJrUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCI7XHJcblxyXG5leHBvcnQgbGV0IHN0b3JlID0ge1xyXG4gICAgZW5lbWllc01heENvdW50OiAxMixcclxuICAgIG1pbkFkZEVuZW15Q2hhbmNlOiAxNSxcclxuICAgIG1heEFkZEVuZW15Q2hhbmNlOiAzNSxcclxuICAgIG1vdmVzVG9XaW5uaW5nOiA0MCxcclxuICAgIHN0YXJ0RW5lbXlDb3VudDogMSxcclxuICAgIGVuZW15TW92ZUNoYW5jZTogNzUsXHJcbiAgICBkaWVkTG9nOiAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC/0L7Qs9C40LEuPC9zcGFuPiBQcmVzcyBGIHRvIHBheSByZXNwZWN0JyxcclxuICAgIGhlcm9zOiBbXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0JrRg9C60YPQvNCx0LXRgCcsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF0sXHJcbiAgICAgICAgICAgICfQktGB0LXRhSDQt9Cw0LrRg9C60YPQvNCx0YDRjiEnLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Ql9C10LvRkdC90YvQuTwvc3Bhbj4sINC/0YPQv9GL0YDRh9Cw0YLRi9C5LCDQu9GO0LHQuNGCLCDQutC+0LPQtNCwINC10LPQviDQutGD0YHQsNGO0YInLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0LrRgNCw0YHQvdGL0Lk8L3NwYW4+ISDQndC1INC/0YPRgtCw0YLRjCEnLFxyXG4gICAgICAgICAgICAn0KXQvtGF0L4sINGF0LXRhdC10LkhINCvINGC0LXQsdGPIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LfQsNC60YPQutGD0LzQsdGA0Y48L3NwYW4+IScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy1zdWNjZXNzIHRleHQtd2hpdGVcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCJzcGFuXCIpLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJ0ZXh0LWRhcmtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMSwgXHJcbiAgICAgICAgICAgICfQn9C+0LzQuNC00L7RgNC40YPRgScsIFxyXG4gICAgICAgICAgICAzMDAsIFxyXG4gICAgICAgICAgICAyMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgNF0sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmFkZENsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLWxpZ2h0IHRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWwuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLCBcclxuICAgICAgICAgICAgJ9CU0YvQvdGH0YPQvdC00YPQuicsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICfQmtCw0Log0Y8g0YHRjtC00LAg0L/QvtC/0LDQuycsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPtCW0ZHQu9GC0YvQuTwvc3Bhbj4sINC/0L7Qv9Cw0Lsg0YHRjtC00LAg0YHQu9GD0YfQsNC50L3QvicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4hINCd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgJ9Cc0L7Qu9GOINGC0LXQsdGPIScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwiLnRleHQtd2FybmluZ1wiKS5yZW1vdmVDbGFzcyhcInRleHQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAzLCBcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYmctc3VjY2VzcyB0ZXh0LWxpZ2h0XCI+0J7Qs9GD0YDRhtCw0L08L3NwYW4+JywgXHJcbiAgICAgICAgICAgIDEwMDAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgIFsxLCAyLCAzXSxcclxuICAgICAgICAgICAgJ9Cf0YPQvNC/0YPRgNGD0LzQv9GD0LwnLFxyXG4gICAgICAgICAgICAn0J3QtSDQv9GD0YLQsNGC0Ywg0YEg0JrRg9C60YPQvNCx0LXRgNC+0LwhJyxcclxuICAgICAgICAgICAgJ9Ci0L7QttC1IDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0LfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQvdC+INC90LUg0JrRg9C60YPQvNCx0LXRgCEnLFxyXG4gICAgICAgICAgICAn0J3QtSDQstC30LTRg9C80LDQuSDRgdC60LDQt9Cw0YLRjCwg0YfRgtC+INGPIDxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JrRg9C60YPQvNCx0LXRgDwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVdGlsLmZpcmV3b3JrcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsIFxyXG4gICAgICAgICAgICAn0JDRgNCx0YPQt9C+0L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDJdLFxyXG4gICAgICAgICAgICAn0J/RiNC/0YjQv9GI0L8nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSA8Yj7QsdC+0LvRjNGI0L7QuTwvYj4nLFxyXG4gICAgICAgICAgICAn0KHQsNC80YvQuSDRgdC/0LXQu9GL0LknLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qn9C+0YLRgNGP0YHQuCDQvNC10L3RjyE8L3NwYW4+J1xyXG4gICAgICAgIClcclxuICAgIF0sXHJcbiAgICBlbmVtaWVzOiBbXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0KDQtdC00LjRgdC+0L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0J3QtdC90LDQstC40LbRgyE8L3NwYW4+J1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0JHQsNC60LvQsNC20YPQvScsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgNSwgN10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQotC+0LzQsNGC0YPRgScsIFxyXG4gICAgICAgICAgICA1MDAsIFxyXG4gICAgICAgICAgICAxMDAsIFxyXG4gICAgICAgICAgICBbMCwgMSwgNV0sXHJcbiAgICAgICAgICAgICfQo9C/0YQnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQotGL0LrQstC40L0nLCBcclxuICAgICAgICAgICAgNTAwLCBcclxuICAgICAgICAgICAgMTAwLCBcclxuICAgICAgICAgICAgWzAsIDEsIDRdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0JXRhdC10YXQtdC10YXQtdGFPC9zcGFuPidcclxuICAgICAgICApLFxyXG4gICAgXSxcclxuICAgIHBlcmtzOiBbXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/RgNC+0L/Rg9GB0Log0YXQvtC00LAnLCBcclxuICAgICAgICAgICAgMSwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAnJywgXHJcbiAgICAgICAgICAgICgpID0+IHsgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L/RgNC+0L/Rg9GB0YLQuNC7INGF0L7QtCcsIFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAn0JLQt9GA0YvQsicsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgIDIwLCBcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQvtC00L3QvtCz0L4g0LLRgNCw0LPQsCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHsgdGFyZ2V0LmFkZEhwKC0xMDApIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQt9GA0YvQstC+0Lwg0L/QvicsIFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygxLCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMiwgXHJcbiAgICAgICAgICAgICfQnNC+0LvQvdC40Y8nLCBcclxuICAgICAgICAgICAgMzAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLRgdC10YUnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiAoZW5lbXkuYWRkSHAoLTcwKSkpO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgZmFsc2UsIFxyXG4gICAgICAgICAgICAn0LHQsNGF0L3Rg9C7INC80L7Qu9C90LjQtdC5INC/0L4g0LLRgdC10LwsINCyINGC0L7QvCDRh9C40YHQu9C1INC/0L4nLCBcclxuICAgICAgICAgICAgMTIwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDIsIDYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsIFxyXG4gICAgICAgICAgICAn0JvQtdGH0LXQvdC40LUnLCBcclxuICAgICAgICAgICAgNTAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQndC40LrQvtCz0L4g0L3QtSDQv9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0YwnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEhwKDE1MCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C/0L7QtNC70LXRh9C40LvRgdGPINC70LXRh9C10L3QuNC10LwnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoMywgMTMpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsIFxyXG4gICAgICAgICAgICAn0JbQtdGA0YLQstCwJywgXHJcbiAgICAgICAgICAgIDcwLCBcclxuICAgICAgICAgICAgMCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0YHQsNC80L7Qs9C+INGB0LXQsdGPJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRNYW5hKDEwMCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTUwKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIHRydWUsIFxyXG4gICAgICAgICAgICAn0L/RgNC10LTQv9GA0LjQvdGP0Lsg0L/QvtC/0YvRgtC60YMg0YHRg9C40YbQuNC00LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjQuyDQvNCw0L3QvdGDJywgXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDQsIDIwKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA1LCBcclxuICAgICAgICAgICAgJ9Ca0YDQsNC20LAg0LbQuNC30L3QuCcsIFxyXG4gICAgICAgICAgICAzMCwgXHJcbiAgICAgICAgICAgIDIwLCBcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQstC+INCx0LvQsNCz0L4nLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkSHAoLXRhcmdldC5hZGRIcCgtNTApKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9C+0YLQvdGP0Lsg0LbQuNC30L3QuCDRgycsIFxyXG4gICAgICAgICAgICAzMCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg1LCA5KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA2LCBcclxuICAgICAgICAgICAgJ9CS0LjRhdGA0YwnLCBcclxuICAgICAgICAgICAgMzAsIFxyXG4gICAgICAgICAgICA1MCwgXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L7QutGA0YPQttC10L3QuNC1INCy0YDQsNCz0LAnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlciwgZ2FtZTogR2FtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gPEVuZW15PnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGVuZW15LmFkZEhwKC0yMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZ2FtZS5lbmVtaWVzLmluZGV4T2YoZW5lbXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkgZ2FtZS5lbmVtaWVzW2luZGV4IC0gMV0uYWRkSHAoLTEwMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBnYW1lLmVuZW1pZXMubGVuZ3RoIC0gMSkgZ2FtZS5lbmVtaWVzW2luZGV4ICsgMV0uYWRkSHAoLTEwMCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBmYWxzZSwgXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQuNGF0YDQtdC8INC/0L4g0YHQvtGB0LXQtNGP0LwsINC00LAg0Lgg0L/QviDRgdCw0LzQvtC80YMnLCBcclxuICAgICAgICAgICAgMTIwLCBcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg2LCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNywgXHJcbiAgICAgICAgICAgICfQmtGA0LDQttCwINC80LDQvdGLJywgXHJcbiAgICAgICAgICAgIDEwMCwgXHJcbiAgICAgICAgICAgIDAsIFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLXRhcmdldC5hZGRNYW5hKC0yMDApKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGZhbHNlLCBcclxuICAgICAgICAgICAgJ9GD0LrRgNCw0Lsg0LzQsNC90YMg0YMnLCBcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNywgMjYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDgsIFxyXG4gICAgICAgICAgICAn0JHQvtC70YzRiNC+0Lkg0Lgg0LPQu9GD0L/Ri9C5INCy0YDQtdC0INGB0LXQsdC1JywgXHJcbiAgICAgICAgICAgIDEsIFxyXG4gICAgICAgICAgICAwLCBcclxuICAgICAgICAgICAgJyjRgtC10YHRgtC+0LLQvtC1KScsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRIcCgtMzAwKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLTMwMCk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICB0cnVlLCBcclxuICAgICAgICAgICAgJ9C+0YfQtdC90Ywg0LPQu9GD0L/Ri9C5JywgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgIClcclxuICAgIF0sXHJcbn07Il19
