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
                if (this.hp === 0 || this.wereRemoved) {
                    return [2 /*return*/];
                }
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
                if (this.hp === 0 || this._wereRemoved) {
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
    Object.defineProperty(Fighter.prototype, "wereRemoved", {
        get: function () {
            return this._wereRemoved;
        },
        enumerable: false,
        configurable: true
    });
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
                        if (this.hp === 0 || this.wereRemoved) {
                            return [2 /*return*/];
                        }
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
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    };
    Game.prototype.initializeChoosenWindowExcept = function (index, $card) {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
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
        $card.find('.my-title').html(Store_1.store.heroes[index].name);
        $card.find('.my-first-description').html(Store_1.store.heroes[index].firstDescription);
        $card.find('.my-second-description').html(Store_1.store.heroes[index].secondDescription);
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
        this.setReaction(Store_1.store.heroes[index].answer, (_a = Store_1.store.heroes[index]) === null || _a === void 0 ? void 0 : _a.reaction, $card);
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
        this.hero = new Hero_1.Hero(Store_1.store.heroes[this._heroNumber], this);
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
                        this.enemies = this.enemies.filter(function (enemy) { return !enemy.wereRemoved; });
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
var Enemy_1 = require("../Fighters/Enemy/Enemy");
exports.store = {
    enemiesMaxCount: 12,
    minAddEnemyChance: 15,
    maxAddEnemyChance: 35,
    movesToWinning: 40,
    startEnemyCount: 1,
    enemyMoveChance: 75,
    diedLog: '<span class="text-danger">погиб.</span> Press F to pay respect',
    heroes: [
        new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
            $card.addClass("bg-success text-white");
            $card.find("span").removeClass().addClass("text-dark");
        }),
        new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 750, 200, [0, 1, 3, 4], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
            $card.parent().parent().children().children().addClass("bg-transparent");
            $card.addClass("bg-light text-dark");
            $card.removeClass("bg-transparent");
            $card.parent().parent().parent().parent().addClass("bg-dark text-white");
            Util_1.Util.sleep(2000).then(function () {
                $card.parent().parent().parent().parent().removeClass("bg-dark text-white");
            });
        }),
        new HeroPrototype_1.HeroPrototype(2, 'Дынчундук', 1000, 70, [0, 3, 6, 8], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!', function ($card) {
            $card.addClass("bg-warning");
            $card.find(".text-warning").removeClass("text-warning");
        }),
        new HeroPrototype_1.HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 400, 500, [0, 3, 5, 7], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!', function () {
            Util_1.Util.fireworks();
        }),
        new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 800, 100, [0, 2, 3, 6], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Съешь меня?</span>')
    ],
    enemies: [
        new FighterPrototype_1.FighterPrototype(0, 'Редисон', 300, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
        new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 400, 80, [0, 1, 5, 7], 'Агрх!'),
        new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 5], 'Упф'),
        new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 4], '<span class="text-danger border-danger">Ехехеехех</span>'),
    ],
    perks: [
        new PerkPrototype_1.PerkPrototype(0, 'Пропуск хода', 1, 0, '', function () {
        }, true, 'пропустил ход', 0),
        new PerkPrototype_1.PerkPrototype(1, 'Взрыв', 50, 20, 'Пытается убить одного врага', function (target) {
            target.addHp(-100);
        }, false, 'бахнул взрывом по', 50, Util_1.Util.getImagesPaths(1, 25)),
        new PerkPrototype_1.PerkPrototype(2, 'Молния', 50, 50, 'Пытается убить всех', function (target, owner, game) {
            if (owner instanceof Enemy_1.Enemy)
                game.enemies.forEach(function (enemy) { return (enemy.addHp(10)); });
            game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
        }, false, 'бахнул молнией по всем, в том числе по', 120, Util_1.Util.getImagesPaths(2, 6)),
        new PerkPrototype_1.PerkPrototype(3, 'Лечение', 50, 50, 'Никого не пытается убить', function (target, _) {
            target.addHp(250);
        }, true, 'подлечился лечением', 50, Util_1.Util.getImagesPaths(3, 13)),
        new PerkPrototype_1.PerkPrototype(4, 'Жертва', 70, 0, 'Пытается убить самого себя', function (target) {
            target.addMana(150);
            target.addHp(-30);
        }, true, 'предпринял попытку суицида и восстановил манну', 50, Util_1.Util.getImagesPaths(4, 20)),
        new PerkPrototype_1.PerkPrototype(5, 'Кража жизни', 50, 20, 'Пытается убить во благо', function (target, owner) {
            owner.addHp(-target.addHp(-75));
        }, false, 'украл здоровье у', 50, Util_1.Util.getImagesPaths(5, 9)),
        new PerkPrototype_1.PerkPrototype(6, 'Вихрь', 100, 70, 'Пытается убить окружение врага', function (target, owner, game) {
            var enemy = target;
            enemy.addHp(-200);
            var index = game.enemies.indexOf(enemy);
            if (index > 0)
                game.enemies[index - 1].addHp(-100);
            if (index < game.enemies.length - 1)
                game.enemies[index + 1].addHp(-100);
        }, false, 'бахнул вихрем по соседям, да и по самому', 120, Util_1.Util.getImagesPaths(6, 25)),
        new PerkPrototype_1.PerkPrototype(7, 'Кража маны', 100, 0, 'Пытается убить посредственно', function (target, owner) {
            owner.addMana(-target.addMana(-100));
        }, false, 'украл ману у', 50, Util_1.Util.getImagesPaths(7, 26)),
        new PerkPrototype_1.PerkPrototype(8, 'Большой и глупый вред себе', 1, 0, '(тестовое)', function (target, owner) {
            owner.addHp(-300);
            owner.addMana(-300);
        }, true, 'очень глупый', 500)
    ]
};
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":20}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9HYW1lQ2FyZC50cyIsIlRTY3JpcHQvQ29tbW9uL1V0aWwudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteUNhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm8udHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvTWFpbi9HYW1lLnRzIiwiVFNjcmlwdC9NYWluL1Byb2dyYW0udHMiLCJUU2NyaXB0L1BlcmtzL0ZvckVuZW15L0VuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9IZXJvUGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQ2FyZC50cyIsIlRTY3JpcHQvUGVya3MvUGVya1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUFBO0lBTUEsQ0FBQztJQUhVLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7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Q0o7Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhcmQge1xyXG4gICAgcHJvdGVjdGVkICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kY2FyZC5vZmZzZXQoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dW5rbm93bj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluID0gMCwgbWF4ID0gMTAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Rm9ybWF0Q3VycmVudFRpbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGBbJHtkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmaXJld29ya3MoKSB7XHJcbiAgICAgICAgbGV0ICRmaXJld29ya3MgPSAkKCcuZmlyZXdvcmtzJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICRmaXJld29ya3Mub2Zmc2V0KHsgbGVmdDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSwgdG9wOiBVdGlsLnJhbmRvbUludCgwLCA1MDApIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEltYWdlc1BhdGhzKG51bWJlcjogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogY291bnQgfSkubWFwKCh1bnVzZWQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYC4vaW1hZ2VzL2FuaW1hdGlvbi8ke251bWJlcn0vaW1hZ2VfcGFydF8keyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX0ucG5nYClcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBFbmVteUNhcmQgfSBmcm9tIFwiLi9FbmVteUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEVuZW15UGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JFbmVteS9FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcGVya3M6IEVuZW15UGVya1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuc2tpbGxzLmluZGV4T2YoMCkgPCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IEVuZW15UGVyayhzdG9yZS5wZXJrc1swXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZUVuZGVkKSByZXR1cm47XHJcblx0aWYgKHRoaXMuaHAgPT09IDAgfHwgdGhpcy53ZXJlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKFV0aWwucmFuZG9tSW50KDAsIDEwMCkgPCBzdG9yZS5lbmVteU1vdmVDaGFuY2Upe1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBVdGlsLnJhbmRvbUludCgxLCB0aGlzLnBlcmtzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+IDAgJiYgIXRoaXMucGVya3NbaW5kZXhdLmNhbkJlQXBwbGllZCgpKVxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluY3JlYXNlUGVya0luZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5wZXJrc1tpbmRleF0uYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzWzBdLmFwcGx5KCk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmNyZWFzZVBlcmtJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKGluZGV4ICsgMSkgJSB0aGlzLnBlcmtzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuaW5jcmVhc2VLaWxsZWRDb3VudCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNhcmQgZXh0ZW5kcyBGaWdodGVyQ2FyZCB7XHJcblxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tIFwiLi4vUGVya3MvUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtzL1BlcmtcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWdodGVyIHtcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgY2FyZDogRmlnaHRlckNhcmQ7XHJcbiAgICBwcm90ZWN0ZWQgcGVya3M6IFBlcmtbXTtcclxuICAgIHByaXZhdGUgX3dlcmVSZW1vdmVkOiBib29sZWFuOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlLFxyXG4gICAgICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9ocCA9IHByb3RvdHlwZS5ocDtcclxuICAgICAgICB0aGlzLl9tYW5hID0gcHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgdGhpcy5wZXJrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBlcmtzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRpYWxpemVQZXJrcygpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDAgfHwgdGhpcy5fd2VyZVJlbW92ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZE1hbmEoMzApO1xyXG4gICAgICAgIHRoaXMuYWRkSHAoMTApO1xyXG4gICAgICAgIHRoaXMucGVya3MuZm9yRWFjaCgocGVyaykgPT4gcGVyay51cGRhdGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93ZXJlUmVtb3ZlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3dlcmVSZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFkZExvZyh0aGlzLCB0aGlzLCBzdG9yZS5kaWVkTG9nKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpZ2h0ZXJDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBocChjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faHAgPSB0aGlzLmdldEFkZXF1YXRlSHAoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRIcFdpZHRoKHRoaXMuX2hwICogMTAwIC8gdGhpcy5wcm90b3R5cGUuaHApO1xyXG4gICAgICAgIGlmKHRoaXMuX2hwID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIcChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhcnRIcCA9IHRoaXMuX2hwO1xyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLl9ocCArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocCAtIHN0YXJ0SHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZUhwKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLmhwKSByZXR1cm4gdGhpcy5wcm90b3R5cGUuaHA7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IHRoaXMuZ2V0QWRlcXVhdGVNYW5hKGNvdW50KTtcclxuICAgICAgICB0aGlzLmNhcmQuc2V0TWFuYVdpZHRoKHRoaXMuX21hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhcnRNYW5hID0gdGhpcy5fbWFuYTtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLl9tYW5hICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmEgLSBzdGFydE1hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZU1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnR1cm5PbihlZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhcmQudHVybk9mZigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDYXJkKCk6IEdhbWVDYXJkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKTogSVBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkLmdldENvb3JkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgd2VyZVJlbW92ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlcmVSZW1vdmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmIChldmVudC5jb2RlID09ICdLZXlGJykge1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVyKTtcclxuICAgICAgICBVdGlsLmZpcmV3b3JrcygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZUNhcmQgfSBmcm9tIFwiLi4vQ29tbW9uL0dhbWVDYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi9GaWdodGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlckNhcmQgZXh0ZW5kcyBHYW1lQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJlbmVteSBuYW1lXCIsIG1vdHRvID0gXCJtb3R0b1wiKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLiRjYXJkID0gdGhpcy4kaW5pdGlhbGl6ZUNhcmQobmFtZSwgbW90dG8pO1xyXG4gICAgICAgIHRoaXMuJGdldE1lbnUoKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkICRnZXRNZW51KCk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIHJldHVybiAkKCcjZW5lbWllcy1tZW51Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSAkaW5pdGlhbGl6ZUNhcmQobmFtZTogc3RyaW5nLCBtb3R0bzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2ZpZ2h0ZXItY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktbW90dG8nKS5odG1sKG1vdHRvKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIcFdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5ocC1wcm9ncmVzcycpLndpZHRoKHBlcmNlbnRzICsgJyUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TWFuYVdpZHRoKHBlcmNlbnRzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBwZXJjZW50cyA9IHRoaXMuZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PbihlZmZlY3Q6IEZ1bmN0aW9uLCBvd25lcjogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVmZmVjdChvd25lcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9mZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIHB1YmxpYyBocDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgc2tpbGxzOiBudW1iZXJbXSwgXHJcbiAgICAgICAgcHVibGljIG1vdHRvOiBzdHJpbmdcclxuICAgICAgICApIHtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBIZXJvUHJvdG90eXBlIH0gZnJvbSBcIi4vSGVyb1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVyb0NhcmQgfSBmcm9tIFwiLi9IZXJvQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBPbkhlcm9QZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vT25IZXJvUGVya1wiO1xyXG5pbXBvcnQgeyBPbkVuZW15UGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JIZXJvL09uRW5lbXlQZXJrXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uLy4uL1N0b3JlL1N0b3JlXCI7XHJcbmltcG9ydCB7IEhlcm9QZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vSGVyb1BlcmtcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBGaWdodGVyIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBwZXJrczogSGVyb1BlcmtbXTtcclxuICAgIHB1YmxpYyBtb3ZlRW5kZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogSGVyb1Byb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIGdhbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplUGVya3MoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLnNraWxscy5pbmRleE9mKDApIDwgMClcclxuICAgICAgICAgICAgdGhpcy5wZXJrcy5wdXNoKG5ldyBPbkhlcm9QZXJrKHN0b3JlLnBlcmtzWzBdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB0aGlzLnByb3RvdHlwZS5za2lsbHMuZm9yRWFjaChwZXJrTnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLmZvclNlbGYpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uSGVyb1Blcmsoc3RvcmUucGVya3NbcGVya051bWJlcl0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG5cdGlmICh0aGlzLmhwID09PSAwIHx8IHRoaXMud2VyZVJlbW92ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBlcmtzLmZvckVhY2goKHBlcmspID0+IHBlcmsudHJ5QWN0aXZhdGUoKSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAoIXRoaXMubW92ZUVuZGVkKVxyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMDApO1xyXG4gICAgICAgIHRoaXMucGVya3MuZm9yRWFjaCgocGVyaykgPT4gcGVyay5kZWFjdGl2YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEhlcm9DYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNZXRob2QodGFyZ2V0TWV0aG9kOiBGdW5jdGlvbiwgZWZmZWN0TWV0aG9kOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRhcmdldE1ldGhvZChlZmZlY3RNZXRob2QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXlNYW5hTGFja2luZygpOiB2b2lkIHtcclxuICAgICAgICAoPEhlcm9DYXJkPnRoaXMuY2FyZCkuZHJhd01hbmFMYWNraW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuZ2FtZUVuZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWUuaGVyb1dvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyQ2FyZCB9IGZyb20gXCIuLi9GaWdodGVyQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm9DYXJkIGV4dGVuZHMgRmlnaHRlckNhcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBtb3R0bzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbW90dG8pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2VuZW15LWNhcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgJGdldE1lbnUoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNoZXJvLW1lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZHJhd01hbmFMYWNraW5nKCkge1xyXG4gICAgICAgIGxldCAkbWFuYVByb2dyZXNzID0gdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpO1xyXG4gICAgICAgICRtYW5hUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ2JnLXByaW1hcnknKS5hZGRDbGFzcygnYmctZGFyaycpO1xyXG4gICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAkbWFuYVByb2dyZXNzLnJlbW92ZUNsYXNzKCdiZy1kYXJrJykuYWRkQ2xhc3MoJ2JnLXByaW1hcnknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm9Qcm90b3R5cGUgZXh0ZW5kcyBGaWdodGVyUHJvdG90eXBlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGlkOiBudW1iZXIsIFxyXG4gICAgICAgIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgaHA6IG51bWJlciwgXHJcbiAgICAgICAgbWFuYTogbnVtYmVyLCBcclxuICAgICAgICBza2lsbHM6IEFycmF5PG51bWJlcj4sIFxyXG4gICAgICAgIG1vdHRvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGZpcnN0RGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc2Vjb25kRGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgYW5zd2VyOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHJlYWN0aW9uPzogKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihpZCwgbmFtZSwgaHAsIG1hbmEsIHNraWxscywgbW90dG8pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9Db21tb24vVXRpbFwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1wiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi9GaWdodGVycy9FbmVteS9FbmVteVwiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgX2hlcm9OdW1iZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnYW1lRW5kZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaGVyb1dvbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9raWxsZWRFbmVtaWVzQ291bnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbW92ZXNUb0VuZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlcm86IEhlcm87XHJcbiAgICBwdWJsaWMgZW5lbWllczogQXJyYXk8RW5lbXk+O1xyXG4gICAgcHJpdmF0ZSBfc2NvcmUgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob29zZW5XaW5kb3coKTtcclxuICAgICAgICAkKCcjYnV0dG9uJykuY2xpY2soKTtcclxuICAgICAgICAkKCcjZ2FtZS1zdGFydC1idXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLm9uQ29uZmlybSgpKTtcclxuICAgICAgICAkKCcjbmV3LWdhbWUtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9vc2VuV2luZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9vc2VuV2luZG93RXhjZXB0KGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRjb250YWluZXIgPSAkKCcjY2FyZC1jb250YWluZXInKTtcclxuICAgICAgICAkY29udGFpbmVyLmh0bWwoXCJcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5oZXJvZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IGluZGV4KVxyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lci5hcHBlbmQoJGNhcmQpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCh0aGlzLmluaXRpYWxpemVPbmVDYXJkKGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplT25lQ2FyZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI2Nob29zZS1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5jaGlsZHJlbignZGl2JykuYXR0cignZGF0YS1oZXJvLWlkJywgaW5kZXgpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS10aXRsZScpLmh0bWwoc3RvcmUuaGVyb2VzW2luZGV4XS5uYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktZmlyc3QtZGVzY3JpcHRpb24nKS5odG1sKHN0b3JlLmhlcm9lc1tpbmRleF0uZmlyc3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXNlY29uZC1kZXNjcmlwdGlvbicpLmh0bWwoc3RvcmUuaGVyb2VzW2luZGV4XS5zZWNvbmREZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRjYXJkLm9uKCdjbGljaycsICgpID0+IHsgdGhpcy5jaG9vc2VDYXJkT25DbGljayhpbmRleCwgJGNhcmQuZmluZCgnLmNhcmQnKSkgfSk7XHJcbiAgICAgICAgcmV0dXJuICRjYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hvb3NlQ2FyZE9uQ2xpY2soaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICAkKCcjY29uZmlybS1tZW51JykucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNob29zZW5XaW5kb3dFeGNlcHQoaW5kZXgsICRjYXJkLnBhcmVudCgpKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLl9oZXJvTnVtYmVyID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zZXRSZWFjdGlvbihzdG9yZS5oZXJvZXNbaW5kZXhdLmFuc3dlciwgc3RvcmUuaGVyb2VzW2luZGV4XT8ucmVhY3Rpb24sICRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFJlYWN0aW9uKHN0cmluZzogc3RyaW5nLCBtZXRob2Q/OiBGdW5jdGlvbiwgJGNhcmQ/OiBKUXVlcnkpOiB2b2lkIHtcclxuICAgICAgICAkKCcjcmVhY3Rpb24nKS5odG1sKHN0cmluZyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIG1ldGhvZCgkY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbmZpcm0oKTogdm9pZCB7XHJcbiAgICAgICAgJCgnI2J1dHRvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hlcm9OdW1iZXIgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhlcm8gPSBuZXcgSGVybyhzdG9yZS5oZXJvZXNbdGhpcy5faGVyb051bWJlcl0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUVuZW1pZXMoKTtcclxuICAgICAgICB0aGlzLl9tb3Zlc1RvRW5kID0gc3RvcmUubW92ZXNUb1dpbm5pbmc7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVFbmVtaWVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuc3RhcnRFbmVteUNvdW50OyBpKyspIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZEVuZW15KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteShzdG9yZS5lbmVtaWVzW1V0aWwucmFuZG9tSW50KDAsIHN0b3JlLmVuZW1pZXMubGVuZ3RoKV0sIHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VLaWxsZWRDb3VudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9raWxsZWRFbmVtaWVzQ291bnQrKztcclxuICAgICAgICAkKCcjZW5lbXktY291bnQnKS50ZXh0KHRoaXMuX2tpbGxlZEVuZW1pZXNDb3VudCk7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbW92ZXNUb0VuZC0tO1xyXG4gICAgICAgICQoJyNtb3Zlcy10by13aW4nKS50ZXh0KHRoaXMuX21vdmVzVG9FbmQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9tb3Zlc1RvRW5kID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCBzdG9yZS5lbmVtaWVzTWF4Q291bnQgJiYgVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IHRoaXMuY2FsY3VsYXRlQWRkaW5nQ2hhbmNlKCkpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVIZXJvKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5tb3ZlRW5lbWllcygpO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuZW5lbWllcy5maWx0ZXIoKGVuZW15KSA9PiAhZW5lbXkud2VyZVJlbW92ZWQpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBtb3ZlRW5lbWllcygpIHtcclxuICAgICAgICAkKCcjbW92ZS1vZicpLmh0bWwoJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5FbmVtaWVzPC9zcGFuPicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllc1tpXS51cGRhdGUoKTtcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIG1vdmVIZXJvKCkge1xyXG4gICAgICAgICQoJyNtb3ZlLW9mJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5IZXJvPC9zcGFuPicpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuaGVyby51cGRhdGUoKTtcclxuICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5kR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGVuZE1vZGFsID0gJCgnI215TW9kYWwyJyk7XHJcbiAgICAgICAgJGVuZE1vZGFsLmZpbmQoJy5tb2RhbC10aXRsZScpLnRleHQodGhpcy5oZXJvV29uID8gXCJZb3Ugd29uIVwiIDogXCJZb3UgbG9zdC4uLlwiKTtcclxuICAgICAgICBsZXQgJHJlc3VsdCA9ICQoJy5wcm9ncmVzcy1tZW51JykuY2xvbmUoKS5yZW1vdmVDbGFzcygnY29sLTgnKTtcclxuICAgICAgICAkcmVzdWx0LmZpbmQoJy5tdC01JykucmVtb3ZlQ2xhc3MoJ210LTUnKTtcclxuICAgICAgICAkcmVzdWx0LmZpbmQoJy5tdXN0LWJlLWRlbGV0ZWQnKS5yZW1vdmUoKTtcclxuICAgICAgICAkZW5kTW9kYWwuZmluZCgnLm1vZGFsLWJvZHknKS5hcHBlbmQoJHJlc3VsdCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbjInKS5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlQWRkaW5nQ2hhbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gMTAwO1xyXG4gICAgICAgIGxldCBtYyA9IHN0b3JlLmVuZW1pZXNNYXhDb3VudDtcclxuICAgICAgICBsZXQgdGMgPSB0aGlzLmVuZW1pZXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBtaW4gPSBzdG9yZS5taW5BZGRFbmVteUNoYW5jZTtcclxuICAgICAgICBsZXQgbWF4ID0gc3RvcmUubWF4QWRkRW5lbXlDaGFuY2U7XHJcbiAgICAgICAgcmV0dXJuIChtYyAtIHRjKSAvIG1jICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVFbmVtaWVzKGVmZmVjdDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMubWFwKChlbmVteSkgPT4geyBlbmVteS5hY3RpdmF0ZShlZmZlY3QpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FjdGl2YXRlRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMubWFwKChlbmVteSkgPT4geyBlbmVteS5kaXNhY3RpdmF0ZSgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExvZyhtYWtlcjogRmlnaHRlciwgdGFyZ2V0OiBGaWdodGVyLCBhY3Rpb25EZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRhY3Rpb25Mb2cgPSAkKGA8ZGl2PlxyXG4gICAgICAgICR7VXRpbC5nZXRGb3JtYXRDdXJyZW50VGltZSgpfSA8Yj4ke21ha2VyLnByb3RvdHlwZS5uYW1lfTwvYj4gJHthY3Rpb25EZXNjcmlwdGlvbn0gPGI+JHt0YXJnZXQgPT0gbWFrZXIgPyAnJyA6IHRhcmdldC5wcm90b3R5cGUubmFtZX08L2I+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgJCgnI2xvZ3MnKS5wcmVwZW5kKCRhY3Rpb25Mb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNjb3JlKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zY29yZSArPSBjb3VudDtcclxuICAgICAgICAkKCcjc2NvcmUnKS50ZXh0KHRoaXMuX3Njb3JlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxubGV0IGdhbWU6IEdhbWU7XHJcblxyXG5mdW5jdGlvbiBvbkxvYWQoKSB7XHJcbiAgICBnYW1lID0gbmV3IEdhbWUoKTtcclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgb25Mb2FkKTsiLCJpbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9GaWdodGVycy9FbmVteS9FbmVteVwiXHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCJcclxuaW1wb3J0IHsgUGVyayB9IGZyb20gXCIuLi9QZXJrXCJcclxuaW1wb3J0IHsgUGVya0FuaW1hdGlvbiB9IGZyb20gXCIuLi9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi4vUGVya1Byb3RvdHlwZVwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15UGVyayBleHRlbmRzIFBlcmsge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBQZXJrUHJvdG90eXBlLFxyXG4gICAgICAgIG93bmVyOiBFbmVteSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihwcm90b3R5cGUsIG93bmVyLCBnYW1lKTtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuYW5pbWF0aW9uUGF0aHMgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgUGVya0FuaW1hdGlvbihvd25lci5nZXRDYXJkKCksIHByb3RvdHlwZT8uYW5pbWF0aW9uUGF0aHMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGx5KCkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnByb3RvdHlwZS5mb3JTZWxmID8gdGhpcy5vd25lciA6IHRoaXMuZ2FtZS5oZXJvO1xyXG4gICAgICAgIHRoaXMuYXBwbHlFZmZlY3QodGFyZ2V0KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBlcmtDYXJkIH0gZnJvbSBcIi4uL1BlcmtDYXJkXCI7XHJcbmltcG9ydCB7IFBlcmtQcm90b3R5cGUgfSBmcm9tIFwiLi4vUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4uLy4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1wiO1xyXG5pbXBvcnQgeyBGaWdodGVyIH0gZnJvbSBcIi4uLy4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgUGVya0FuaW1hdGlvbiB9IGZyb20gXCIuLi9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi4vUGVya1wiO1xyXG5cclxudHlwZSBQZXJrQ2FyZE9uQ2xpY2sgPSAoKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBGb3JGaWdodGVyQ2FyZE9uQ2xpY2sgPSAodGFyZ2V0OiBGaWdodGVyKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBBY3RpdmF0aW9uRnVuY3Rpb24gPSAobWV0aG9kOiBGb3JGaWdodGVyQ2FyZE9uQ2xpY2spID0+IHZvaWQ7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhlcm9QZXJrIGV4dGVuZHMgUGVyayB7XHJcbiAgICBwcml2YXRlIF9jYXJkOiBQZXJrQ2FyZDtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBvd25lcjogSGVybztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBQZXJrUHJvdG90eXBlLFxyXG4gICAgICAgIGhlcm86IEhlcm8sXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBoZXJvLCBnYW1lKVxyXG4gICAgICAgIHRoaXMuX2NhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9jYXJkLnNldE9uY2xpY2sodGhpcy5nZXRPbmNsaWNrKCkpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5hbmltYXRpb25QYXRocyAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBQZXJrQW5pbWF0aW9uKHRoaXMuX2NhcmQsIHByb3RvdHlwZT8uYW5pbWF0aW9uUGF0aHMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBQZXJrUHJvdG90eXBlKTogUGVya0NhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgUGVya0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBvdmVycmlkZSBzZXRNYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlci5zZXRNYW5hKGNvdW50KTtcclxuICAgICAgICB0aGlzLl9jYXJkLnNldFByb2dyZXNzV2lkdGgodGhpcy5tYW5hICogMTAwIC8gdGhpcy5wcm90b3R5cGUubWFuYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE9uY2xpY2soKTogUGVya0NhcmRPbkNsaWNrIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldEFjdGl2YXRvcigpKFxyXG4gICAgICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5maWdodGVyTWFuYURlbWFuZCA+IHRoaXMub3duZXIubWFuYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyLnNheU1hbmFMYWNraW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlFZmZlY3QodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm93bmVyLm1vdmVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGFwcGx5RWZmZWN0KHRhcmdldDogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbkJlQXBwbGllZCkge1xyXG4gICAgICAgICAgICBzdXBlci5hcHBseUVmZmVjdCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkU2NvcmUodGhpcy5wcm90b3R5cGUuc2NvcmUpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGlzYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGlzYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb25cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0T25FbmVteU1ldGhvZCgpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAob25DbGlja0Z1bmN0aW9uOiBGb3JGaWdodGVyQ2FyZE9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kaXNhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWN0aXZhdGVFbmVtaWVzKG9uQ2xpY2tGdW5jdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0T25IZXJvTWV0aG9kKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIChvbkNsaWNrRnVuY3Rpb246IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZGlzYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuYWN0aXZhdGUob25DbGlja0Z1bmN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlBY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tYW5hID49IHRoaXMucHJvdG90eXBlLm1hbmEpXHJcbiAgICAgICAgICAgIHRoaXMuX2NhcmQudHVybk9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY3RpdmF0aW9uRnVuY3Rpb24sIEhlcm9QZXJrIH0gZnJvbSBcIi4vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkVuZW15UGVyayBleHRlbmRzIEhlcm9QZXJrIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPbkVuZW15TWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY3RpdmF0aW9uRnVuY3Rpb24sIEhlcm9QZXJrIH0gZnJvbSBcIi4vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkhlcm9QZXJrIGV4dGVuZHMgSGVyb1Blcmsge1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9uSGVyb01ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi9QZXJrQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4vUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmsge1xyXG4gICAgcHJvdGVjdGVkIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uPzogUGVya0FuaW1hdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcHJvdG90eXBlOiBQZXJrUHJvdG90eXBlLFxyXG4gICAgICAgIHByb3RlY3RlZCBvd25lcjogRmlnaHRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmFkZE1hbmEoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSk6IFBlcmtDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBlcmtDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUuaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldE1hbmEoY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRNYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRSZWFsTWFuYShjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hbmEoY291bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMubWFuYSArIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRSZWFsTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5tYW5hKSByZXR1cm4gdGhpcy5wcm90b3R5cGUubWFuYTtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFwcGx5RWZmZWN0KHRhcmdldDogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5CZUFwcGxpZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm1hbmEgPSAwO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkTWFuYSgtdGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uYW5pbWF0ZSh0YXJnZXQuZ2V0Q29vcmRzKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5vd25lciwgdGhpcy5nYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5lZmZlY3QodGFyZ2V0LCB0aGlzLm93bmVyLCB0aGlzLmdhbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hZGRMb2codGhpcy5vd25lciwgdGFyZ2V0LCB0aGlzLnByb3RvdHlwZS5hY3Rpb25TdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5CZUFwcGxpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5tYW5hICYmIHRoaXMub3duZXIubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5maWdodGVyTWFuYURlbWFuZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2ludCB7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxufSBcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RhcnRQb2ludEhhbmRsZXI6IEdhbWVDYXJkLFxyXG4gICAgICAgIHByaXZhdGUgaW1hZ2VzUGF0aHM6IEFycmF5PHN0cmluZz4gXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGUoZW5kcG9pbnQ6IElQb2ludCkge1xyXG4gICAgICAgIGxldCAkb3JpZ2luYWwgPSAkKCcuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgbGV0ICRhbmltYXRpb24gPSAkb3JpZ2luYWwuY2xvbmUoKS5yZW1vdmVDbGFzcygnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgJG9yaWdpbmFsLmFmdGVyKCRhbmltYXRpb24pO1xyXG4gICAgICAgICRhbmltYXRpb24ucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmltYWdlc1BhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VQYXRoID0gdGhpcy5pbWFnZXNQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgICRhbmltYXRpb24uYXR0cignc3JjJywgaW1hZ2VQYXRoKTtcclxuICAgICAgICAgICAgJGFuaW1hdGlvbi5vZmZzZXQoeyBcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkubGVmdCArIChlbmRwb2ludC5sZWZ0IC0gdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS5sZWZ0KSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS50b3AgKyAoZW5kcG9pbnQudG9wIC0gdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS50b3ApICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCAvIHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGFuaW1hdGlvbi5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtDYXJkIGV4dGVuZHMgR2FtZUNhcmQge1xyXG4gICAgcHJpdmF0ZSBfb25jbGljazogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwicGVyayBuYW1lXCIsIGluZm8gPSBcImluZm9cIikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kY2FyZCA9IHRoaXMuJGluaXRpYWxpemVDYXJkKG5hbWUsIGluZm8pO1xyXG4gICAgICAgICQoJyNoZXJvLW1lbnUnKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaXRpYWxpemVDYXJkKG5hbWU6IHN0cmluZywgaW5mbzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI3BlcmstY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktaW5mbycpLmh0bWwoaW5mbyk7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPbmNsaWNrKG1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbmNsaWNrID0gbWV0aG9kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyZXNzV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnLnBlcmstY2FyZCcpLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBmaWdodGVyTWFuYURlbWFuZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBpbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGVmZmVjdDogKHRhcmdldDogRmlnaHRlciwgb3duZXI/OiBGaWdodGVyLCBnYW1lPzogR2FtZSkgPT4gdm9pZCxcclxuICAgICAgICBwdWJsaWMgZm9yU2VsZjogYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgYWN0aW9uU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNjb3JlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGFuaW1hdGlvblBhdGhzPzogc3RyaW5nW11cclxuICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtIZXJvUHJvdG90eXBlfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7RmlnaHRlclByb3RvdHlwZX0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHtQZXJrUHJvdG90eXBlfSBmcm9tIFwiLi4vUGVya3MvUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQge0ZpZ2h0ZXJ9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuXHJcbmV4cG9ydCBsZXQgc3RvcmUgPSB7XHJcbiAgICBlbmVtaWVzTWF4Q291bnQ6IDEyLFxyXG4gICAgbWluQWRkRW5lbXlDaGFuY2U6IDE1LFxyXG4gICAgbWF4QWRkRW5lbXlDaGFuY2U6IDM1LFxyXG4gICAgbW92ZXNUb1dpbm5pbmc6IDQwLFxyXG4gICAgc3RhcnRFbmVteUNvdW50OiAxLFxyXG4gICAgZW5lbXlNb3ZlQ2hhbmNlOiA3NSxcclxuICAgIGRpZWRMb2c6ICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0L/QvtCz0LjQsS48L3NwYW4+IFByZXNzIEYgdG8gcGF5IHJlc3BlY3QnLFxyXG4gICAgaGVyb2VzOiBbXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQmtGD0LrRg9C80LHQtdGAJyxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSxcclxuICAgICAgICAgICAgJ9CS0YHQtdGFINC30LDQutGD0LrRg9C80LHRgNGOIScsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCX0LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L/Rg9C/0YvRgNGH0LDRgtGL0LksINC70Y7QsdC40YIsINC60L7Qs9C00LAg0LXQs9C+INC60YPRgdCw0Y7RgicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQpdC+0YXQviwg0YXQtdGF0LXQuSEg0K8g0YLQtdCx0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9Cw0LrRg9C60YPQvNCx0YDRjjwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXN1Y2Nlc3MgdGV4dC13aGl0ZVwiKVxyXG4gICAgICAgICAgICAgICAgJGNhcmQuZmluZChcInNwYW5cIikucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcInRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAn0J/QvtC80LjQtNC+0YDQuNGD0YEnLFxyXG4gICAgICAgICAgICA3NTAsXHJcbiAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgWzAsIDEsIDMsIDRdLFxyXG4gICAgICAgICAgICAn0K8g0LrRgNCw0YHQvdC10Y4nLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtCa0YDQsNGB0L3Ri9C5PC9zcGFuPiwg0LPQu9Cw0LTQutC40LksINGC0LLQvtC5JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4hINCd0LUg0L/Rg9GC0LDRgtGMIScsXHJcbiAgICAgICAgICAgICfQkNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdGF0LDRhdCw0YXQsNGF0LDRhdCw0YUnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLnBhcmVudCgpLnBhcmVudCgpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5hZGRDbGFzcyhcImJnLXRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy1saWdodCB0ZXh0LWRhcmtcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcyhcImJnLXRyYW5zcGFyZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICBVdGlsLnNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjYXJkLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYmctZGFyayB0ZXh0LXdoaXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJ9CU0YvQvdGH0YPQvdC00YPQuicsXHJcbiAgICAgICAgICAgIDEwMDAsXHJcbiAgICAgICAgICAgIDcwLFxyXG4gICAgICAgICAgICBbMCwgMywgNiwgOF0sXHJcbiAgICAgICAgICAgICfQmtCw0Log0Y8g0YHRjtC00LAg0L/QvtC/0LDQuycsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtd2FybmluZ1wiPtCW0ZHQu9GC0YvQuTwvc3Bhbj4sINC/0L7Qv9Cw0Lsg0YHRjtC00LAg0YHQu9GD0YfQsNC50L3QvicsXHJcbiAgICAgICAgICAgICfQndC1IDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4hINCd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QutGA0LDRgdC90YvQuTwvc3Bhbj4hJyxcclxuICAgICAgICAgICAgJ9Cc0L7Qu9GOINGC0LXQsdGPIScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQuYWRkQ2xhc3MoXCJiZy13YXJuaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwiLnRleHQtd2FybmluZ1wiKS5yZW1vdmVDbGFzcyhcInRleHQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJiZy1zdWNjZXNzIHRleHQtbGlnaHRcIj7QntCz0YPRgNGG0LDQvTwvc3Bhbj4nLFxyXG4gICAgICAgICAgICA0MDAsXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgWzAsIDMsIDUsIDddLFxyXG4gICAgICAgICAgICAn0J/Rg9C80L/Rg9GA0YPQvNC/0YPQvCcsXHJcbiAgICAgICAgICAgICfQndC1INC/0YPRgtCw0YLRjCDRgSDQmtGD0LrRg9C80LHQtdGA0L7QvCEnLFxyXG4gICAgICAgICAgICAn0KLQvtC20LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7Qt9C10LvRkdC90YvQuTwvc3Bhbj4sINC90L4g0L3QtSDQmtGD0LrRg9C80LHQtdGAIScsXHJcbiAgICAgICAgICAgICfQndC1INCy0LfQtNGD0LzQsNC5INGB0LrQsNC30LDRgtGMLCDRh9GC0L4g0Y8gPHNwYW4gY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj7QmtGD0LrRg9C80LHQtdGAPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBVdGlsLmZpcmV3b3JrcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICfQkNGA0LHRg9C30L7QvScsXHJcbiAgICAgICAgICAgIDgwMCxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICBbMCwgMiwgMywgNl0sXHJcbiAgICAgICAgICAgICfQn9GI0L/RiNC/0YjQvycsXHJcbiAgICAgICAgICAgICfQodCw0LzRi9C5IDxiPtCx0L7Qu9GM0YjQvtC5PC9iPicsXHJcbiAgICAgICAgICAgICfQodCw0LzRi9C5INGB0L/QtdC70YvQuScsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCh0YrQtdGI0Ywg0LzQtdC90Y8/PC9zcGFuPidcclxuICAgICAgICApXHJcbiAgICBdLFxyXG4gICAgZW5lbWllczogW1xyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0KDQtdC00LjRgdC+0L0nLFxyXG4gICAgICAgICAgICAzMDAsXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgWzAsIDEsIDNdLFxyXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlciBib3JkZXItZGFuZ2VyXCI+0J3QtdC90LDQstC40LbRgyE8L3NwYW4+J1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQkdCw0LrQu9Cw0LbRg9C9JyxcclxuICAgICAgICAgICAgNDAwLFxyXG4gICAgICAgICAgICA4MCxcclxuICAgICAgICAgICAgWzAsIDEsIDUsIDddLFxyXG4gICAgICAgICAgICAn0JDQs9GA0YUhJ1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQotC+0LzQsNGC0YPRgScsXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICBbMCwgMSwgNV0sXHJcbiAgICAgICAgICAgICfQo9C/0YQnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9Ci0YvQutCy0LjQvScsXHJcbiAgICAgICAgICAgIDUwMCxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICBbMCwgMSwgNF0sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QldGF0LXRhdC10LXRhdC10YU8L3NwYW4+J1xyXG4gICAgICAgICksXHJcbiAgICBdLFxyXG4gICAgcGVya3M6IFtcclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9Cf0YDQvtC/0YPRgdC6INGF0L7QtNCwJyxcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgJ9C/0YDQvtC/0YPRgdGC0LjQuyDRhdC+0LQnLFxyXG4gICAgICAgICAgICAwXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICfQktC30YDRi9CyJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIDIwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC+0LTQvdC+0LPQviDQstGA0LDQs9CwJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZEhwKC0xMDApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAn0LHQsNGF0L3Rg9C7INCy0LfRgNGL0LLQvtC8INC/0L4nLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygxLCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMixcclxuICAgICAgICAgICAgJ9Cc0L7Qu9C90LjRjycsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQstGB0LXRhScsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyLCBnYW1lOiBHYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIgaW5zdGFuY2VvZiBFbmVteSlcclxuICAgICAgICAgICAgICAgICAgICBnYW1lLmVuZW1pZXMuZm9yRWFjaCgoZW5lbXkpID0+IChlbmVteS5hZGRIcCgxMCkpKTtcclxuICAgICAgICAgICAgICAgIGdhbWUuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4gKGVuZW15LmFkZEhwKC03MCkpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LzQvtC70L3QuNC10Lkg0L/QviDQstGB0LXQvCwg0LIg0YLQvtC8INGH0LjRgdC70LUg0L/QvicsXHJcbiAgICAgICAgICAgIDEyMCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygyLCA2KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAn0JvQtdGH0LXQvdC40LUnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgICfQndC40LrQvtCz0L4g0L3QtSDQv9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0YwnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBfOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoMjUwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgJ9C/0L7QtNC70LXRh9C40LvRgdGPINC70LXRh9C10L3QuNC10LwnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocygzLCAxMylcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgJ9CW0LXRgNGC0LLQsCcsXHJcbiAgICAgICAgICAgIDcwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINGB0LDQvNC+0LPQviDRgdC10LHRjycsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRNYW5hKDE1MCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTMwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgJ9C/0YDQtdC00L/RgNC40L3Rj9C7INC/0L7Qv9GL0YLQutGDINGB0YPQuNGG0LjQtNCwINC4INCy0L7RgdGB0YLQsNC90L7QstC40Lsg0LzQsNC90L3RgycsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDQsIDIwKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAn0JrRgNCw0LbQsCDQttC40LfQvdC4JyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIDIwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINCy0L4g0LHQu9Cw0LPQvicsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRIcCgtdGFyZ2V0LmFkZEhwKC03NSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9GD0LrRgNCw0Lsg0LfQtNC+0YDQvtCy0YzQtSDRgycsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDUsIDkpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICfQktC40YXRgNGMJyxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICA3MCxcclxuICAgICAgICAgICAgJ9Cf0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCDQvtC60YDRg9C20LXQvdC40LUg0LLRgNCw0LPQsCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIG93bmVyOiBGaWdodGVyLCBnYW1lOiBHYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXkgPSA8RW5lbXk+dGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgZW5lbXkuYWRkSHAoLTIwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBnYW1lLmVuZW1pZXMuaW5kZXhPZihlbmVteSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAwKSBnYW1lLmVuZW1pZXNbaW5kZXggLSAxXS5hZGRIcCgtMTAwKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGdhbWUuZW5lbWllcy5sZW5ndGggLSAxKSBnYW1lLmVuZW1pZXNbaW5kZXggKyAxXS5hZGRIcCgtMTAwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQuNGF0YDQtdC8INC/0L4g0YHQvtGB0LXQtNGP0LwsINC00LAg0Lgg0L/QviDRgdCw0LzQvtC80YMnLFxyXG4gICAgICAgICAgICAxMjAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNiwgMjUpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgICfQmtGA0LDQttCwINC80LDQvdGLJyxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZE1hbmEoLXRhcmdldC5hZGRNYW5hKC0xMDApKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICfRg9C60YDQsNC7INC80LDQvdGDINGDJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNywgMjYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDgsXHJcbiAgICAgICAgICAgICfQkdC+0LvRjNGI0L7QuSDQuCDQs9C70YPQv9GL0Lkg0LLRgNC10LQg0YHQtdCx0LUnLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAnKNGC0LXRgdGC0L7QstC+0LUpJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZEhwKC0zMDApO1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkTWFuYSgtMzAwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgJ9C+0YfQtdC90Ywg0LPQu9GD0L/Ri9C5JyxcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKVxyXG4gICAgXVxyXG59OyJdfQ==
