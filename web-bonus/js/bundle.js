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
    GameCard.prototype.getCard = function () {
        return this.$card;
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
    Fighter.prototype.deactivate = function () {
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
var FighterPrototype_1 = require("../Fighters/FighterPrototype");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.heroWon = true;
        this._killedEnemiesCount = 0;
        this._score = 0;
        this.initializeChosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', function () { return _this.onConfirm(); });
        $('#new-game-button').on('click', function () { return window.location.reload(); });
    }
    Game.prototype.initializeChosenWindow = function () {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
        $("[data-toggle=popover]").popover();
    };
    Game.prototype.initializeChosenWindowExcept = function (index, $card) {
        var $container = $('#card-container');
        $container.html("");
        for (var i = 0; i < Store_1.store.heroes.length; i++) {
            if (i === index)
                $container.append($card);
            else
                $container.append(this.initializeOneCard(i));
        }
        $("[data-toggle=popover]").popover();
    };
    Game.prototype.initializeOneCard = function (index) {
        var _this = this;
        var $card = $('#choose-card').clone();
        var prototype = Store_1.store.heroes[index];
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(prototype.name);
        $card.find('.my-first-description').html(prototype.firstDescription);
        $card.find('.my-second-description').html(prototype.secondDescription);
        var $innerCard = $card.find('.card');
        var $popover = $('.choose-card-data-content').clone();
        this.fillPopover(prototype, $popover);
        $innerCard.attr('title', prototype.name);
        $innerCard.attr('data-content', $popover.html());
        $card.removeClass('d-none');
        $card.on('click', function () { _this.chooseCardOnClick(index, $innerCard); });
        return $card;
    };
    Game.prototype.fillPopover = function (prototype, $popover) {
        $popover.find('.hp').text(prototype.hp);
        $popover.find('.mana').text(prototype.mana);
        $popover.find('.perks').html(prototype.skills.reduce(function (previous, current) {
            return "<div>".concat(Store_1.store.perks[current].name, "</div>>");
        }, ''));
        $popover.removeClass('d-none');
    };
    Game.prototype.chooseCardOnClick = function (index, $card) {
        var _a;
        $('#confirm-menu').removeClass('d-none');
        this.initializeChosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        Game.setReaction(Store_1.store.heroes[index].answer, (_a = Store_1.store.heroes[index]) === null || _a === void 0 ? void 0 : _a.reaction, $card);
    };
    Game.setReaction = function (string, method, $card) {
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
        if (arguments.length == 0)
            this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[Util_1.Util.randomInt(0, Store_1.store.enemies.length)], this));
        else if (typeof arguments[0] === 'number')
            this.enemies.push(new Enemy_1.Enemy(Store_1.store.enemies[arguments[0]], this));
        else if (arguments[0] instanceof FighterPrototype_1.FighterPrototype)
            this.enemies.push(new Enemy_1.Enemy(arguments[0], this));
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
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.moveEnemies()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.sleep(1000)];
                    case 4:
                        _a.sent();
                        this.enemies = this.enemies.filter(function (enemy) { return !enemy.wereRemoved; });
                        return [4 /*yield*/, this.update()];
                    case 5:
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
                        if (!(i < this.enemies.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.enemies[i].update()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Util_1.Util.sleep(500)];
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
    Game.prototype.moveHero = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $('#move-of').html('<span class="text-success">Hero</span>');
                        return [4 /*yield*/, this.hero.update()];
                    case 1:
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
    Game.prototype.deactivateEnemies = function () {
        this.enemies.map(function (enemy) { enemy.deactivate(); });
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
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/FighterPrototype":7,"../Fighters/Hero/Hero":8,"../Store/Store":21}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeJSON = void 0;
var Game_1 = require("./Game");
var game;
//storeJSON = data;
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
            this.game.deactivateEnemies();
            this.owner.deactivate();
        }
    };
    HeroPerk.prototype.getOnEnemyMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.owner.deactivate();
            _this.game.activateEnemies(onClickFunction);
        };
    };
    HeroPerk.prototype.getOnHeroMethod = function () {
        var _this = this;
        return function (onClickFunction) {
            _this.game.deactivateEnemies();
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
var storeJSON = JSON.parse(data);
exports.store = {
    enemiesMaxCount: storeJSON.enemiesMaxCount,
    minAddEnemyChance: storeJSON.minAddEnemyChance,
    maxAddEnemyChance: storeJSON.maxAddEnemyChance,
    movesToWinning: storeJSON.movesToWinning,
    startEnemyCount: storeJSON.startEnemyCount,
    enemyMoveChance: storeJSON.enemyMoveChance,
    diedLog: storeJSON.diedLog,
    heroes: storeJSON.heroes.map((jsonHero) => parseHero(jsonHero)),
    enemies: storeJSON.enemies,
    perks: storeJSON.perks.map((jsonPerk) => parsePerk(jsonPerk))
}
function parseHero(json) {
    return new HeroPrototype_1.HeroPrototype(json.id, json.name, json.hp, json.mana, json.skills, json.motto, json.firstDescription, json.secondDescription, json.answer, function ($card) { Function('$card', 'Util', json.reaction)($card, Util_1.Util); });
}
function parsePerk(json) {
    return new PerkPrototype_1.PerkPrototype(json.id, json.name, json.mana, json.fighterManaDemand, json.info, function (target, owner, game) {
        Function('target, owner', 'game', 'Util', json.effect)(target, owner, game, Util_1);
    }, json.forSelf, json.actionString, json.score, json.countOfImages != null ? Util_1.Util.getImagesPaths(json.id, json.countOfImages) : null);
}
// exports.store = {
//     enemiesMaxCount: 12,
//     minAddEnemyChance: 15,
//     maxAddEnemyChance: 35,
//     movesToWinning: 40,
//     startEnemyCount: 1,
//     enemyMoveChance: 75,
//     diedLog: '<span class="text-danger">погиб.</span> Press F to pay respect',
//     heroes: [
//         new HeroPrototype_1.HeroPrototype(0, 'Кукумбер', 500, 100, [0, 1, 2, 3, 4, 5, 6, 7, 8], 'Всех закукумбрю!', '<span class="text-success">Зелёный</span>, пупырчатый, любит, когда его кусают', 'Не <span class="text-danger">красный</span>! Не путать!', 'Хохо, хехей! Я тебя <span class="text-success">закукумбрю</span>!', function ($card) {
//             $card.addClass("bg-success text-white");
//             $card.find("span").removeClass().addClass("text-dark");
//         }),
//         new HeroPrototype_1.HeroPrototype(1, 'Помидориус', 750, 200, [0, 1, 3, 4], 'Я краснею', '<span class="text-danger">Красный</span>, гладкий, твой', 'Не <span class="text-success">зелёный</span>! Не путать!', 'Ахахахахахахахаххахахахахах', function ($card) {
//             $card.parent().parent().children().children().addClass("bg-transparent");
//             $card.addClass("bg-light text-dark");
//             $card.removeClass("bg-transparent");
//             $card.parent().parent().parent().parent().addClass("bg-dark text-white");
//             Util_1.Util.sleep(2000).then(function () {
//                 $card.parent().parent().parent().parent().removeClass("bg-dark text-white");
//             });
//         }),
//         new HeroPrototype_1.HeroPrototype(2, 'Дынчундук', 1000, 70, [0, 3, 6, 8], 'Как я сюда попал', '<span class="text-warning">Жёлтый</span>, попал сюда случайно', 'Не <span class="text-danger">зелёный</span>! Не <span class="text-success">красный</span>!', 'Молю тебя!', function ($card) {
//             $card.addClass("bg-warning");
//             $card.find(".text-warning").removeClass("text-warning");
//         }),
//         new HeroPrototype_1.HeroPrototype(3, '<span class="bg-success text-light">Огурцан</span>', 400, 500, [0, 3, 5, 7], 'Пумпурумпум', 'Не путать с Кукумбером!', 'Тоже <span class="text-success">зелёный</span>, но не Кукумбер!', 'Не вздумай сказать, что я <span class="text-success">Кукумбер</span>!', function () {
//             Util_1.Util.fireworks();
//         }),
//         new HeroPrototype_1.HeroPrototype(4, 'Арбузон', 800, 100, [0, 2, 3, 6], 'Пшпшпшп', 'Самый <b>большой</b>', 'Самый спелый', '<span class="text-success">Съешь меня?</span>')
//     ],
//     enemies: [
//         new FighterPrototype_1.FighterPrototype(0, 'Редисон', 300, 100, [0, 1, 3], '<span class="text-danger border-danger">Ненавижу!</span>'),
//         new FighterPrototype_1.FighterPrototype(0, 'Баклажун', 400, 80, [0, 1, 5, 7], 'Агрх!'),
//         new FighterPrototype_1.FighterPrototype(0, 'Томатус', 500, 100, [0, 1, 5], 'Упф'),
//         new FighterPrototype_1.FighterPrototype(0, 'Тыквин', 500, 100, [0, 1, 4], '<span class="text-danger border-danger">Ехехеехех</span>'),
//     ],
//     perks: [
//         new PerkPrototype_1.PerkPrototype(0, 'Пропуск хода', 1, 0, '', function () {
//         }, true, 'пропустил ход', 0),
//         new PerkPrototype_1.PerkPrototype(1, 'Взрыв', 30, 20, 'Пытается убить одного врага', function (target) {
//             target.addHp(-100);
//         }, false, 'бахнул взрывом по', 50, Util_1.Util.getImagesPaths(1, 25)),
//         new PerkPrototype_1.PerkPrototype(2, 'Молния', 50, 50, 'Пытается убить всех', function (target, owner, game) {
//             if (owner instanceof Enemy_1.Enemy)
//                 game.enemies.forEach(function (enemy) { return (enemy.addHp(10)); });
//             game.enemies.forEach(function (enemy) { return (enemy.addHp(-70)); });
//         }, false, 'бахнул молнией по всем, в том числе по', 120, Util_1.Util.getImagesPaths(2, 6)),
//         new PerkPrototype_1.PerkPrototype(3, 'Лечение', 50, 50, 'Никого не пытается убить', function (target, _) {
//             target.addHp(250);
//         }, true, 'подлечился лечением', 50, Util_1.Util.getImagesPaths(3, 13)),
//         new PerkPrototype_1.PerkPrototype(4, 'Жертва', 70, 0, 'Пытается убить самого себя', function (target) {
//             target.addMana(150);
//             target.addHp(-30);
//         }, true, 'предпринял попытку суицида и восстановил манну', 50, Util_1.Util.getImagesPaths(4, 20)),
//         new PerkPrototype_1.PerkPrototype(5, 'Кража жизни', 50, 20, 'Пытается убить во благо', function (target, owner) {
//             owner.addHp(-target.addHp(-75));
//         }, false, 'украл здоровье у', 50, Util_1.Util.getImagesPaths(5, 9)),
//         new PerkPrototype_1.PerkPrototype(6, 'Вихрь', 100, 70, 'Пытается убить окружение врага', function (target, owner, game) {
//             var enemy = target;
//             enemy.addHp(-200);
//             var index = game.enemies.indexOf(enemy);
//             if (index > 0)
//                 game.enemies[index - 1].addHp(-100);
//             if (index < game.enemies.length - 1)
//                 game.enemies[index + 1].addHp(-100);
//         }, false, 'бахнул вихрем по соседям, да и по самому', 120, Util_1.Util.getImagesPaths(6, 25)),
//         new PerkPrototype_1.PerkPrototype(7, 'Кража маны', 100, 0, 'Пытается убить посредственно', function (target, owner) {
//             owner.addMana(-target.addMana(-100));
//         }, false, 'украл ману у', 50, Util_1.Util.getImagesPaths(7, 26)),
//         new PerkPrototype_1.PerkPrototype(8, 'Большой и глупый вред себе', 1, 0, '(тестовое)', function (target, owner) {
//             owner.addHp(-300);
//             owner.addMana(-300);
//         }, true, 'очень глупый', 500)
//     ]
// };
},{"../Common/Util":2,"../Fighters/Enemy/Enemy":3,"../Fighters/FighterPrototype":7,"../Fighters/Hero/HeroPrototype":10,"../Perks/PerkPrototype":20}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJUU2NyaXB0L0NvbW1vbi9HYW1lQ2FyZC50cyIsIlRTY3JpcHQvQ29tbW9uL1V0aWwudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0VuZW15L0VuZW15LnRzIiwiVFNjcmlwdC9GaWdodGVycy9FbmVteS9FbmVteUNhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXIudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0ZpZ2h0ZXJDYXJkLnRzIiwiVFNjcmlwdC9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlLnRzIiwiVFNjcmlwdC9GaWdodGVycy9IZXJvL0hlcm8udHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb0NhcmQudHMiLCJUU2NyaXB0L0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvTWFpbi9HYW1lLnRzIiwiVFNjcmlwdC9NYWluL1Byb2dyYW0udHMiLCJUU2NyaXB0L1BlcmtzL0ZvckVuZW15L0VuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9IZXJvUGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9PbkVuZW15UGVyay50cyIsIlRTY3JpcHQvUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQW5pbWF0aW9uLnRzIiwiVFNjcmlwdC9QZXJrcy9QZXJrQ2FyZC50cyIsIlRTY3JpcHQvUGVya3MvUGVya1Byb3RvdHlwZS50cyIsIlRTY3JpcHQvU3RvcmUvU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNFQTtJQUFBO0lBVUEsQ0FBQztJQVBVLDRCQUFTLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSwwQkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJ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LEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDNUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDeEIsS0FBSyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQTt3QkFDM0MsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUNsQyxVQUFVLENBQUMsTUFBTSxDQUFDOzRCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7NEJBQzdJLEdBQUcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7eUJBQzVJLENBQUMsQ0FBQzt3QkFDSCxxQkFBTSxXQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBL0MsU0FBK0MsQ0FBQzs7O3dCQVBDLEtBQUssRUFBRSxDQUFBOzs7d0JBUzVELFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7S0FDdkI7SUFD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Q0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUM3QjtRQUVELElBQUksNkJBQWEsQ0FDYixDQUFDLEVBQ0QsWUFBWSxFQUNaLEdBQUcsRUFDSCxDQUFDLEVBQ0QsOEJBQThCLEVBQzlCLFVBQUMsTUFBZSxFQUFFLEtBQWM7WUFDNUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsRUFDRCxLQUFLLEVBQ0wsY0FBYyxFQUNkLEVBQUUsRUFDRixXQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FDN0I7UUFFRCxJQUFJLDZCQUFhLENBQ2IsQ0FBQyxFQUNELDRCQUE0QixFQUM1QixDQUFDLEVBQ0QsQ0FBQyxFQUNELFlBQVksRUFDWixVQUFDLE1BQWUsRUFBRSxLQUFjO1lBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUNELElBQUksRUFDSixjQUFjLEVBQ2QsR0FBRyxDQUNOO0tBQ0o7Q0FDSixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhcmQge1xyXG4gICAgcHJvdGVjdGVkICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZHMoKToge2xlZnQ6IG51bWJlciwgdG9wOiBudW1iZXJ9IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kY2FyZC5vZmZzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FyZCgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kY2FyZDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dW5rbm93bj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnQobWluID0gMCwgbWF4ID0gMTAwKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Rm9ybWF0Q3VycmVudFRpbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGBbJHtkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfToke2RhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX06JHtkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBmaXJld29ya3MoKSB7XHJcbiAgICAgICAgbGV0ICRmaXJld29ya3MgPSAkKCcuZmlyZXdvcmtzJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgICAgICRmaXJld29ya3Mub2Zmc2V0KHsgbGVmdDogVXRpbC5yYW5kb21JbnQoMCwgNTAwKSwgdG9wOiBVdGlsLnJhbmRvbUludCgwLCA1MDApIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICAgICAgJGZpcmV3b3Jrcy5hZGRDbGFzcygnZC1ub25lJylcclxuICAgICAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEltYWdlc1BhdGhzKG51bWJlcjogbnVtYmVyLCBjb3VudDogbnVtYmVyKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogY291bnQgfSkubWFwKCh1bnVzZWQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYC4vaW1hZ2VzL2FuaW1hdGlvbi8ke251bWJlcn0vaW1hZ2VfcGFydF8keyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKX0ucG5nYClcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBFbmVteUNhcmQgfSBmcm9tIFwiLi9FbmVteUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEVuZW15UGVyayB9IGZyb20gXCIuLi8uLi9QZXJrcy9Gb3JFbmVteS9FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi8uLi9Db21tb24vVXRpbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgRmlnaHRlciB7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcGVya3M6IEVuZW15UGVya1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSxcclxuICAgICAgICBnYW1lOiBHYW1lXHJcbiAgICApe1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuc2tpbGxzLmluZGV4T2YoMCkgPCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IEVuZW15UGVyayhzdG9yZS5wZXJrc1swXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgdGhpcy5wcm90b3R5cGUuc2tpbGxzLmZvckVhY2gocGVya051bWJlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgRW5lbXlQZXJrKHN0b3JlLnBlcmtzW3BlcmtOdW1iZXJdLCB0aGlzLCB0aGlzLmdhbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgdXBkYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUuZ2FtZUVuZGVkKSByZXR1cm47XHJcblx0aWYgKHRoaXMuaHAgPT09IDAgfHwgdGhpcy53ZXJlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKFV0aWwucmFuZG9tSW50KDAsIDEwMCkgPCBzdG9yZS5lbmVteU1vdmVDaGFuY2Upe1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBVdGlsLnJhbmRvbUludCgxLCB0aGlzLnBlcmtzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+IDAgJiYgIXRoaXMucGVya3NbaW5kZXhdLmNhbkJlQXBwbGllZCgpKVxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluY3JlYXNlUGVya0luZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5wZXJrc1tpbmRleF0uYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzWzBdLmFwcGx5KCk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmNyZWFzZVBlcmtJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKGluZGV4ICsgMSkgJSB0aGlzLnBlcmtzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgY3JlYXRlQ2FyZChwcm90b3R5cGU6IEZpZ2h0ZXJQcm90b3R5cGUpOiBGaWdodGVyQ2FyZCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteUNhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuaW5jcmVhc2VLaWxsZWRDb3VudCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi4vRmlnaHRlckNhcmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteUNhcmQgZXh0ZW5kcyBGaWdodGVyQ2FyZCB7XHJcblxyXG59IiwiaW1wb3J0IHsgRmlnaHRlckNhcmQgfSBmcm9tIFwiLi9GaWdodGVyQ2FyZFwiO1xyXG5pbXBvcnQgeyBGaWdodGVyUHJvdG90eXBlIH0gZnJvbSBcIi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBJUG9pbnQgfSBmcm9tIFwiLi4vUGVya3MvUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtzL1BlcmtcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vU3RvcmUvU3RvcmVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaWdodGVyIHtcclxuICAgIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgY2FyZDogRmlnaHRlckNhcmQ7XHJcbiAgICBwcm90ZWN0ZWQgcGVya3M6IFBlcmtbXTtcclxuICAgIHByaXZhdGUgX3dlcmVSZW1vdmVkOiBib29sZWFuOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgcHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlLFxyXG4gICAgICAgIHByb3RlY3RlZCBnYW1lOiBHYW1lXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLmNyZWF0ZUNhcmQocHJvdG90eXBlKTtcclxuICAgICAgICB0aGlzLl9ocCA9IHByb3RvdHlwZS5ocDtcclxuICAgICAgICB0aGlzLl9tYW5hID0gcHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgdGhpcy5wZXJrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBlcmtzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGluaXRpYWxpemVQZXJrcygpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhc3luYyB1cGRhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDAgfHwgdGhpcy5fd2VyZVJlbW92ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFkZE1hbmEoMzApO1xyXG4gICAgICAgIHRoaXMuYWRkSHAoMTApO1xyXG4gICAgICAgIHRoaXMucGVya3MuZm9yRWFjaCgocGVyaykgPT4gcGVyay51cGRhdGUoKSlcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl93ZXJlUmVtb3ZlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX3dlcmVSZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lLmFkZExvZyh0aGlzLCB0aGlzLCBzdG9yZS5kaWVkTG9nKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlcik7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogRmlnaHRlclByb3RvdHlwZSk6IEZpZ2h0ZXJDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZpZ2h0ZXJDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUubW90dG8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaHAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBocChjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faHAgPSB0aGlzLmdldEFkZXF1YXRlSHAoY291bnQpO1xyXG4gICAgICAgIHRoaXMuY2FyZC5zZXRIcFdpZHRoKHRoaXMuX2hwICogMTAwIC8gdGhpcy5wcm90b3R5cGUuaHApO1xyXG4gICAgICAgIGlmKHRoaXMuX2hwID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRIcChjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhcnRIcCA9IHRoaXMuX2hwO1xyXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLl9ocCArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ocCAtIHN0YXJ0SHA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZUhwKGNvdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChjb3VudCA+IHRoaXMucHJvdG90eXBlLmhwKSByZXR1cm4gdGhpcy5wcm90b3R5cGUuaHA7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbWFuYSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYW5hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IHRoaXMuZ2V0QWRlcXVhdGVNYW5hKGNvdW50KTtcclxuICAgICAgICB0aGlzLmNhcmQuc2V0TWFuYVdpZHRoKHRoaXMuX21hbmEgKiAxMDAgLyB0aGlzLnByb3RvdHlwZS5tYW5hKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgc3RhcnRNYW5hID0gdGhpcy5fbWFuYTtcclxuICAgICAgICB0aGlzLm1hbmEgPSB0aGlzLl9tYW5hICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmEgLSBzdGFydE1hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBZGVxdWF0ZU1hbmEoY291bnQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gdGhpcy5wcm90b3R5cGUubWFuYSkgcmV0dXJuIHRoaXMucHJvdG90eXBlLm1hbmE7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RpdmF0ZShlZmZlY3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYXJkLnR1cm5PbihlZmZlY3QsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhcmQoKTogR2FtZUNhcmQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkcygpOiBJUG9pbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmQuZ2V0Q29vcmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB3ZXJlUmVtb3ZlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2VyZVJlbW92ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT0gJ0tleUYnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZXIpO1xyXG4gICAgICAgIFV0aWwuZmlyZXdvcmtzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lQ2FyZCB9IGZyb20gXCIuLi9Db21tb24vR2FtZUNhcmRcIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuL0ZpZ2h0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodGVyQ2FyZCBleHRlbmRzIEdhbWVDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSBcImVuZW15IG5hbWVcIiwgbW90dG8gPSBcIm1vdHRvXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQgPSB0aGlzLiRpbml0aWFsaXplQ2FyZChuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kZ2V0TWVudSgpLmFwcGVuZCh0aGlzLiRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgJGdldE1lbnUoKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNlbmVtaWVzLW1lbnUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlICRpbml0aWFsaXplQ2FyZChuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjZmlnaHRlci1jYXJkJykuY2xvbmUoKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktdGl0bGUnKS5odG1sKG5hbWUpO1xyXG4gICAgICAgICRjYXJkLmZpbmQoJy5teS1tb3R0bycpLmh0bWwobW90dG8pO1xyXG4gICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhwV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLmhwLXByb2dyZXNzJykud2lkdGgocGVyY2VudHMgKyAnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNYW5hV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSZWFsUGVyY2VudHMocGVyY2VudHM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzIDwgMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKHBlcmNlbnRzID4gMTAwKSByZXR1cm4gMTAwO1xyXG4gICAgICAgIHJldHVybiBwZXJjZW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHVybk9uKGVmZmVjdDogRnVuY3Rpb24sIG93bmVyOiBGaWdodGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vZmYoXCJjbGljayBtb3VzZWVudGVyIG1vdXNlbGVhdmVcIik7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZWZmZWN0KG93bmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9uKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICdidXR0b24nKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0dXJuT2ZmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQub2ZmKFwiY2xpY2sgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuYXR0cigncm9sZScsICcnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQucmVtb3ZlQ2xhc3MoJ2JnLWxpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59IiwiXHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRlclByb3RvdHlwZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAgcHVibGljIGhwOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyBza2lsbHM6IG51bWJlcltdLCBcclxuICAgICAgICBwdWJsaWMgbW90dG86IHN0cmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEhlcm9Qcm90b3R5cGUgfSBmcm9tIFwiLi9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJQcm90b3R5cGUgfSBmcm9tIFwiLi4vRmlnaHRlclByb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBIZXJvQ2FyZCB9IGZyb20gXCIuL0hlcm9DYXJkXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcbmltcG9ydCB7IE9uSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9Pbkhlcm9QZXJrXCI7XHJcbmltcG9ydCB7IE9uRW5lbXlQZXJrIH0gZnJvbSBcIi4uLy4uL1BlcmtzL0Zvckhlcm8vT25FbmVteVBlcmtcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi8uLi9NYWluL0dhbWVcIjtcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vLi4vU3RvcmUvU3RvcmVcIjtcclxuaW1wb3J0IHsgSGVyb1BlcmsgfSBmcm9tIFwiLi4vLi4vUGVya3MvRm9ySGVyby9IZXJvUGVya1wiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVybyBleHRlbmRzIEZpZ2h0ZXIge1xyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IHBlcmtzOiBIZXJvUGVya1tdO1xyXG4gICAgcHVibGljIG1vdmVFbmRlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdG90eXBlOiBIZXJvUHJvdG90eXBlLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgZ2FtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGluaXRpYWxpemVQZXJrcygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuc2tpbGxzLmluZGV4T2YoMCkgPCAwKVxyXG4gICAgICAgICAgICB0aGlzLnBlcmtzLnB1c2gobmV3IE9uSGVyb1Blcmsoc3RvcmUucGVya3NbMF0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgIHRoaXMucHJvdG90eXBlLnNraWxscy5mb3JFYWNoKHBlcmtOdW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3RvcmUucGVya3NbcGVya051bWJlcl0uZm9yU2VsZilcclxuICAgICAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25IZXJvUGVyayhzdG9yZS5wZXJrc1twZXJrTnVtYmVyXSwgdGhpcywgdGhpcy5nYW1lKSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucGVya3MucHVzaChuZXcgT25FbmVteVBlcmsoc3RvcmUucGVya3NbcGVya051bWJlcl0sIHRoaXMsIHRoaXMuZ2FtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcblx0aWYgKHRoaXMuaHAgPT09IDAgfHwgdGhpcy53ZXJlUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGVya3MuZm9yRWFjaCgocGVyaykgPT4gcGVyay50cnlBY3RpdmF0ZSgpKTtcclxuICAgICAgICB0aGlzLm1vdmVFbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHdoaWxlICghdGhpcy5tb3ZlRW5kZWQpXHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wZXJrcy5mb3JFYWNoKChwZXJrKSA9PiBwZXJrLmRlYWN0aXZhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGNyZWF0ZUNhcmQocHJvdG90eXBlOiBGaWdodGVyUHJvdG90eXBlKTogRmlnaHRlckNhcmQge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGVyb0NhcmQocHJvdG90eXBlLm5hbWUsIHByb3RvdHlwZS5tb3R0byk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1ldGhvZCh0YXJnZXRNZXRob2Q6IEZ1bmN0aW9uLCBlZmZlY3RNZXRob2Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGFyZ2V0TWV0aG9kKGVmZmVjdE1ldGhvZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNheU1hbmFMYWNraW5nKCk6IHZvaWQge1xyXG4gICAgICAgICg8SGVyb0NhcmQ+dGhpcy5jYXJkKS5kcmF3TWFuYUxhY2tpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5nYW1lRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5oZXJvV29uID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uLy4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXJDYXJkIH0gZnJvbSBcIi4uL0ZpZ2h0ZXJDYXJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb0NhcmQgZXh0ZW5kcyBGaWdodGVyQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG1vdHRvOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBtb3R0byk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnZW5lbXktY2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSAkZ2V0TWVudSgpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICByZXR1cm4gJCgnI2hlcm8tbWVudScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBkcmF3TWFuYUxhY2tpbmcoKSB7XHJcbiAgICAgICAgbGV0ICRtYW5hUHJvZ3Jlc3MgPSB0aGlzLiRjYXJkLmZpbmQoJy5tYW5hLXByb2dyZXNzJyk7XHJcbiAgICAgICAgJG1hbmFQcm9ncmVzcy5yZW1vdmVDbGFzcygnYmctcHJpbWFyeScpLmFkZENsYXNzKCdiZy1kYXJrJyk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCg1MDApO1xyXG4gICAgICAgICRtYW5hUHJvZ3Jlc3MucmVtb3ZlQ2xhc3MoJ2JnLWRhcmsnKS5hZGRDbGFzcygnYmctcHJpbWFyeScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRmlnaHRlclByb3RvdHlwZSB9IGZyb20gXCIuLi9GaWdodGVyUHJvdG90eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb1Byb3RvdHlwZSBleHRlbmRzIEZpZ2h0ZXJQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IG51bWJlciwgXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBocDogbnVtYmVyLCBcclxuICAgICAgICBtYW5hOiBudW1iZXIsIFxyXG4gICAgICAgIHNraWxsczogQXJyYXk8bnVtYmVyPiwgXHJcbiAgICAgICAgbW90dG86IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZmlyc3REZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBzZWNvbmREZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBhbnN3ZXI6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgcmVhY3Rpb24/OiAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHZvaWRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGlkLCBuYW1lLCBocCwgbWFuYSwgc2tpbGxzLCBtb3R0byk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9TdG9yZS9TdG9yZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0VuZW15L0VuZW15XCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQge0ZpZ2h0ZXJQcm90b3R5cGV9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7SGVyb1Byb3RvdHlwZX0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0hlcm8vSGVyb1Byb3RvdHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSBfaGVyb051bWJlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdhbWVFbmRlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBoZXJvV29uID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2tpbGxlZEVuZW1pZXNDb3VudCA9IDA7XHJcbiAgICBwcml2YXRlIF9tb3Zlc1RvRW5kOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVybzogSGVybztcclxuICAgIHB1YmxpYyBlbmVtaWVzOiBBcnJheTxFbmVteT47XHJcbiAgICBwcml2YXRlIF9zY29yZSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ2hvc2VuV2luZG93KCk7XHJcbiAgICAgICAgJCgnI2J1dHRvbicpLmNsaWNrKCk7XHJcbiAgICAgICAgJCgnI2dhbWUtc3RhcnQtYnV0dG9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNvbmZpcm0oKSk7XHJcbiAgICAgICAgJCgnI25ldy1nYW1lLWJ1dHRvbicpLm9uKCdjbGljaycsICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQ2hvc2VuV2luZG93KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkY29udGFpbmVyID0gJCgnI2NhcmQtY29udGFpbmVyJyk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5odG1sKFwiXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuaGVyb2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPXBvcG92ZXJdXCIpLnBvcG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVDaG9zZW5XaW5kb3dFeGNlcHQoaW5kZXg6IG51bWJlciwgJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgJGNvbnRhaW5lciA9ICQoJyNjYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICRjb250YWluZXIuaHRtbChcIlwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLmhlcm9lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyLmFwcGVuZCgkY2FyZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICRjb250YWluZXIuYXBwZW5kKHRoaXMuaW5pdGlhbGl6ZU9uZUNhcmQoaSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPXBvcG92ZXJdXCIpLnBvcG92ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVPbmVDYXJkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgJGNhcmQgPSAkKCcjY2hvb3NlLWNhcmQnKS5jbG9uZSgpO1xyXG4gICAgICAgIGxldCBwcm90b3R5cGUgPSBzdG9yZS5oZXJvZXNbaW5kZXhdO1xyXG4gICAgICAgICRjYXJkLmNoaWxkcmVuKCdkaXYnKS5hdHRyKCdkYXRhLWhlcm8taWQnLCBpbmRleCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChwcm90b3R5cGUubmFtZSk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LWZpcnN0LWRlc2NyaXB0aW9uJykuaHRtbChwcm90b3R5cGUuZmlyc3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXNlY29uZC1kZXNjcmlwdGlvbicpLmh0bWwocHJvdG90eXBlLnNlY29uZERlc2NyaXB0aW9uKTtcclxuICAgICAgICBsZXQgJGlubmVyQ2FyZCA9ICRjYXJkLmZpbmQoJy5jYXJkJyk7XHJcbiAgICAgICAgbGV0ICRwb3BvdmVyID0gJCgnLmNob29zZS1jYXJkLWRhdGEtY29udGVudCcpLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5maWxsUG9wb3Zlcihwcm90b3R5cGUsICRwb3BvdmVyKTtcclxuICAgICAgICAkaW5uZXJDYXJkLmF0dHIoJ3RpdGxlJywgcHJvdG90eXBlLm5hbWUpO1xyXG4gICAgICAgICRpbm5lckNhcmQuYXR0cignZGF0YS1jb250ZW50JywgJHBvcG92ZXIuaHRtbCgpKTtcclxuICAgICAgICAkY2FyZC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcbiAgICAgICAgJGNhcmQub24oJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNob29zZUNhcmRPbkNsaWNrKGluZGV4LCAkaW5uZXJDYXJkKSB9KTtcclxuICAgICAgICByZXR1cm4gJGNhcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWxsUG9wb3Zlcihwcm90b3R5cGU6IEhlcm9Qcm90b3R5cGUsICRwb3BvdmVyOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KXtcclxuICAgICAgICAkcG9wb3Zlci5maW5kKCcuaHAnKS50ZXh0KHByb3RvdHlwZS5ocCk7XHJcbiAgICAgICAgJHBvcG92ZXIuZmluZCgnLm1hbmEnKS50ZXh0KHByb3RvdHlwZS5tYW5hKTtcclxuICAgICAgICAkcG9wb3Zlci5maW5kKCcucGVya3MnKS5odG1sKHByb3RvdHlwZS5za2lsbHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT5cclxuICAgICAgICAgICAgYDxkaXY+JHtzdG9yZS5wZXJrc1tjdXJyZW50XS5uYW1lfTwvZGl2Pj5gLCAnJykpO1xyXG4gICAgICAgICRwb3BvdmVyLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNob29zZUNhcmRPbkNsaWNrKGluZGV4OiBudW1iZXIsICRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI2NvbmZpcm0tbWVudScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDaG9zZW5XaW5kb3dFeGNlcHQoaW5kZXgsICRjYXJkLnBhcmVudCgpKTtcclxuICAgICAgICAkY2FyZC5hZGRDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgICAgICB0aGlzLl9oZXJvTnVtYmVyID0gaW5kZXg7XHJcbiAgICAgICAgR2FtZS5zZXRSZWFjdGlvbihzdG9yZS5oZXJvZXNbaW5kZXhdLmFuc3dlciwgc3RvcmUuaGVyb2VzW2luZGV4XT8ucmVhY3Rpb24sICRjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzZXRSZWFjdGlvbihzdHJpbmc6IHN0cmluZywgbWV0aG9kPzogRnVuY3Rpb24sICRjYXJkPzogSlF1ZXJ5KTogdm9pZCB7XHJcbiAgICAgICAgJCgnI3JlYWN0aW9uJykuaHRtbChzdHJpbmcpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBtZXRob2QoJGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Db25maXJtKCk6IHZvaWQge1xyXG4gICAgICAgICQoJyNidXR0b24nKS5jbGljaygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9oZXJvTnVtYmVyID09PSAtMSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvID0gbmV3IEhlcm8oc3RvcmUuaGVyb2VzW3RoaXMuX2hlcm9OdW1iZXJdLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFbmVtaWVzKCk7XHJcbiAgICAgICAgdGhpcy5fbW92ZXNUb0VuZCA9IHN0b3JlLm1vdmVzVG9XaW5uaW5nO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRW5lbWllcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlLnN0YXJ0RW5lbXlDb3VudDsgaSsrKSB0aGlzLmFkZEVuZW15KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEVuZW15KCk6IHZvaWQge1xyXG4gICAgICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHN0b3JlLmVuZW1pZXNbVXRpbC5yYW5kb21JbnQoMCwgc3RvcmUuZW5lbWllcy5sZW5ndGgpXSwgdGhpcykpO1xyXG4gICAgICAgIGVsc2UgaWYodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteShzdG9yZS5lbmVtaWVzW2FyZ3VtZW50c1swXV0sIHRoaXMpKTtcclxuICAgICAgICBlbHNlIGlmKGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIEZpZ2h0ZXJQcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteShhcmd1bWVudHNbMF0sIHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5jcmVhc2VLaWxsZWRDb3VudCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9raWxsZWRFbmVtaWVzQ291bnQrKztcclxuICAgICAgICAkKCcjZW5lbXktY291bnQnKS50ZXh0KHRoaXMuX2tpbGxlZEVuZW1pZXNDb3VudCk7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRW5kZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbW92ZXNUb0VuZC0tO1xyXG4gICAgICAgICQoJyNtb3Zlcy10by13aW4nKS50ZXh0KHRoaXMuX21vdmVzVG9FbmQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9tb3Zlc1RvRW5kID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmdhbWVFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCBzdG9yZS5lbmVtaWVzTWF4Q291bnQgJiYgVXRpbC5yYW5kb21JbnQoMCwgMTAwKSA8IHRoaXMuY2FsY3VsYXRlQWRkaW5nQ2hhbmNlKCkpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkRW5lbXkoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVIZXJvKCk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDAwKTtcclxuICAgICAgICBhd2FpdCB0aGlzLm1vdmVFbmVtaWVzKCk7XHJcbiAgICAgICAgYXdhaXQgVXRpbC5zbGVlcCgxMDAwKTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSB0aGlzLmVuZW1pZXMuZmlsdGVyKChlbmVteSkgPT4gIWVuZW15LndlcmVSZW1vdmVkKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgbW92ZUVuZW1pZXMoKSB7XHJcbiAgICAgICAgJCgnI21vdmUtb2YnKS5odG1sKCc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+RW5lbWllczwvc3Bhbj4nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmVuZW1pZXNbaV0udXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IFV0aWwuc2xlZXAoNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBtb3ZlSGVybygpIHtcclxuICAgICAgICAkKCcjbW92ZS1vZicpLmh0bWwoJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+SGVybzwvc3Bhbj4nKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmhlcm8udXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCAkZW5kTW9kYWwgPSAkKCcjbXlNb2RhbDInKTtcclxuICAgICAgICAkZW5kTW9kYWwuZmluZCgnLm1vZGFsLXRpdGxlJykudGV4dCh0aGlzLmhlcm9Xb24gPyBcIllvdSB3b24hXCIgOiBcIllvdSBsb3N0Li4uXCIpO1xyXG4gICAgICAgIGxldCAkcmVzdWx0ID0gJCgnLnByb2dyZXNzLW1lbnUnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdjb2wtOCcpO1xyXG4gICAgICAgICRyZXN1bHQuZmluZCgnLm10LTUnKS5yZW1vdmVDbGFzcygnbXQtNScpO1xyXG4gICAgICAgICRyZXN1bHQuZmluZCgnLm11c3QtYmUtZGVsZXRlZCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICRlbmRNb2RhbC5maW5kKCcubW9kYWwtYm9keScpLmFwcGVuZCgkcmVzdWx0KTtcclxuICAgICAgICAkKCcjYnV0dG9uMicpLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVBZGRpbmdDaGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiAxMDA7XHJcbiAgICAgICAgbGV0IG1jID0gc3RvcmUuZW5lbWllc01heENvdW50O1xyXG4gICAgICAgIGxldCB0YyA9IHRoaXMuZW5lbWllcy5sZW5ndGg7XHJcbiAgICAgICAgbGV0IG1pbiA9IHN0b3JlLm1pbkFkZEVuZW15Q2hhbmNlO1xyXG4gICAgICAgIGxldCBtYXggPSBzdG9yZS5tYXhBZGRFbmVteUNoYW5jZTtcclxuICAgICAgICByZXR1cm4gKG1jIC0gdGMpIC8gbWMgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUVuZW1pZXMoZWZmZWN0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5tYXAoKGVuZW15KSA9PiB7IGVuZW15LmFjdGl2YXRlKGVmZmVjdCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZUVuZW1pZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLm1hcCgoZW5lbXkpID0+IHsgZW5lbXkuZGVhY3RpdmF0ZSgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExvZyhtYWtlcjogRmlnaHRlciwgdGFyZ2V0OiBGaWdodGVyLCBhY3Rpb25EZXNjcmlwdGlvbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0ICRhY3Rpb25Mb2cgPSAkKGA8ZGl2PlxyXG4gICAgICAgICR7VXRpbC5nZXRGb3JtYXRDdXJyZW50VGltZSgpfSA8Yj4ke21ha2VyLnByb3RvdHlwZS5uYW1lfTwvYj4gJHthY3Rpb25EZXNjcmlwdGlvbn0gPGI+JHt0YXJnZXQgPT0gbWFrZXIgPyAnJyA6IHRhcmdldC5wcm90b3R5cGUubmFtZX08L2I+XHJcbiAgICAgICAgPC9kaXY+YCk7XHJcbiAgICAgICAgJCgnI2xvZ3MnKS5wcmVwZW5kKCRhY3Rpb25Mb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNjb3JlKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zY29yZSArPSBjb3VudDtcclxuICAgICAgICAkKCcjc2NvcmUnKS50ZXh0KHRoaXMuX3Njb3JlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xyXG5cclxubGV0IGdhbWU6IEdhbWU7XHJcblxyXG5leHBvcnQgbGV0IHN0b3JlSlNPTjtcclxuLy9zdG9yZUpTT04gPSBkYXRhO1xyXG5cclxuZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgZ2FtZSA9IG5ldyBHYW1lKCk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIG9uTG9hZCk7IiwiaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIlxyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uLy4uL01haW4vR2FtZVwiXHJcbmltcG9ydCB7IFBlcmsgfSBmcm9tIFwiLi4vUGVya1wiXHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi4vUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4uL1BlcmtQcm90b3R5cGVcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbmVteVBlcmsgZXh0ZW5kcyBQZXJrIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSxcclxuICAgICAgICBvd25lcjogRW5lbXksXHJcbiAgICAgICAgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIocHJvdG90eXBlLCBvd25lciwgZ2FtZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlLmFuaW1hdGlvblBhdGhzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBlcmtBbmltYXRpb24ob3duZXIuZ2V0Q2FyZCgpLCBwcm90b3R5cGU/LmFuaW1hdGlvblBhdGhzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBseSgpIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5wcm90b3R5cGUuZm9yU2VsZiA/IHRoaXMub3duZXIgOiB0aGlzLmdhbWUuaGVybztcclxuICAgICAgICB0aGlzLmFwcGx5RWZmZWN0KHRhcmdldCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQZXJrQ2FyZCB9IGZyb20gXCIuLi9QZXJrQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4uL1BlcmtQcm90b3R5cGVcIjtcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gXCIuLi8uLi9GaWdodGVycy9IZXJvL0hlcm9cIjtcclxuaW1wb3J0IHsgRmlnaHRlciB9IGZyb20gXCIuLi8uLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi4vUGVya0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBQZXJrIH0gZnJvbSBcIi4uL1BlcmtcIjtcclxuXHJcbnR5cGUgUGVya0NhcmRPbkNsaWNrID0gKCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgRm9yRmlnaHRlckNhcmRPbkNsaWNrID0gKHRhcmdldDogRmlnaHRlcikgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgQWN0aXZhdGlvbkZ1bmN0aW9uID0gKG1ldGhvZDogRm9yRmlnaHRlckNhcmRPbkNsaWNrKSA9PiB2b2lkO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIZXJvUGVyayBleHRlbmRzIFBlcmsge1xyXG4gICAgcHJpdmF0ZSBfY2FyZDogUGVya0NhcmQ7XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgb3duZXI6IEhlcm87XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSxcclxuICAgICAgICBoZXJvOiBIZXJvLFxyXG4gICAgICAgIGdhbWU6IEdhbWVcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHByb3RvdHlwZSwgaGVybywgZ2FtZSlcclxuICAgICAgICB0aGlzLl9jYXJkID0gdGhpcy5jcmVhdGVDYXJkKHByb3RvdHlwZSk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRPbmNsaWNrKHRoaXMuZ2V0T25jbGljaygpKTtcclxuICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuYW5pbWF0aW9uUGF0aHMgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgUGVya0FuaW1hdGlvbih0aGlzLl9jYXJkLCBwcm90b3R5cGU/LmFuaW1hdGlvblBhdGhzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSk6IFBlcmtDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBlcmtDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUuaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcnJpZGUgc2V0TWFuYShjb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIuc2V0TWFuYShjb3VudCk7XHJcbiAgICAgICAgdGhpcy5fY2FyZC5zZXRQcm9ncmVzc1dpZHRoKHRoaXMubWFuYSAqIDEwMCAvIHRoaXMucHJvdG90eXBlLm1hbmEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRPbmNsaWNrKCk6IFBlcmtDYXJkT25DbGljayB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRBY3RpdmF0b3IoKShcclxuICAgICAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQgPiB0aGlzLm93bmVyLm1hbmEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lci5zYXlNYW5hTGFja2luZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RWZmZWN0KHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lci5tb3ZlRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBhcHBseUVmZmVjdCh0YXJnZXQ6IEZpZ2h0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5CZUFwcGxpZWQpIHtcclxuICAgICAgICAgICAgc3VwZXIuYXBwbHlFZmZlY3QodGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZFNjb3JlKHRoaXMucHJvdG90eXBlLnNjb3JlKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmRlYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0QWN0aXZhdG9yKCk6IEFjdGl2YXRpb25GdW5jdGlvblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRPbkVuZW15TWV0aG9kKCk6IEFjdGl2YXRpb25GdW5jdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIChvbkNsaWNrRnVuY3Rpb246IEZvckZpZ2h0ZXJDYXJkT25DbGljaykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmFjdGl2YXRlRW5lbWllcyhvbkNsaWNrRnVuY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldE9uSGVyb01ldGhvZCgpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiAob25DbGlja0Z1bmN0aW9uOiBGb3JGaWdodGVyQ2FyZE9uQ2xpY2spID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmRlYWN0aXZhdGVFbmVtaWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuYWN0aXZhdGUob25DbGlja0Z1bmN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlBY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tYW5hID49IHRoaXMucHJvdG90eXBlLm1hbmEpXHJcbiAgICAgICAgICAgIHRoaXMuX2NhcmQudHVybk9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FyZC50dXJuT2ZmKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY3RpdmF0aW9uRnVuY3Rpb24sIEhlcm9QZXJrIH0gZnJvbSBcIi4vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkVuZW15UGVyayBleHRlbmRzIEhlcm9QZXJrIHtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRBY3RpdmF0b3IoKTogQWN0aXZhdGlvbkZ1bmN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPbkVuZW15TWV0aG9kKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBY3RpdmF0aW9uRnVuY3Rpb24sIEhlcm9QZXJrIH0gZnJvbSBcIi4vSGVyb1BlcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPbkhlcm9QZXJrIGV4dGVuZHMgSGVyb1Blcmsge1xyXG4gICAgcHVibGljIG92ZXJyaWRlIGdldEFjdGl2YXRvcigpOiBBY3RpdmF0aW9uRnVuY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9uSGVyb01ldGhvZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGVya0NhcmQgfSBmcm9tIFwiLi9QZXJrQ2FyZFwiO1xyXG5pbXBvcnQgeyBQZXJrUHJvdG90eXBlIH0gZnJvbSBcIi4vUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vTWFpbi9HYW1lXCI7XHJcbmltcG9ydCB7IFBlcmtBbmltYXRpb24gfSBmcm9tIFwiLi9QZXJrQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmsge1xyXG4gICAgcHJvdGVjdGVkIF9tYW5hOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgYW5pbWF0aW9uPzogUGVya0FuaW1hdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcHJvdG90eXBlOiBQZXJrUHJvdG90eXBlLFxyXG4gICAgICAgIHByb3RlY3RlZCBvd25lcjogRmlnaHRlcixcclxuICAgICAgICBwcm90ZWN0ZWQgZ2FtZTogR2FtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fbWFuYSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHVwZGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0aGlzLmFkZE1hbmEoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHByb3RvdHlwZTogUGVya1Byb3RvdHlwZSk6IFBlcmtDYXJkIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBlcmtDYXJkKHByb3RvdHlwZS5uYW1lLCBwcm90b3R5cGUuaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYW5hKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hbmE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBtYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNldE1hbmEoY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRNYW5hKGNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tYW5hID0gdGhpcy5nZXRSZWFsTWFuYShjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1hbmEoY291bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWFuYSA9IHRoaXMubWFuYSArIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXRSZWFsTWFuYShjb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSByZXR1cm4gMDtcclxuICAgICAgICBpZiAoY291bnQgPiB0aGlzLnByb3RvdHlwZS5tYW5hKSByZXR1cm4gdGhpcy5wcm90b3R5cGUubWFuYTtcclxuICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFwcGx5RWZmZWN0KHRhcmdldDogRmlnaHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW5CZUFwcGxpZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm1hbmEgPSAwO1xyXG4gICAgICAgIHRoaXMub3duZXIuYWRkTWFuYSgtdGhpcy5wcm90b3R5cGUuZmlnaHRlck1hbmFEZW1hbmQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uYW5pbWF0ZSh0YXJnZXQuZ2V0Q29vcmRzKCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGUuZWZmZWN0KHRhcmdldCwgdGhpcy5vd25lciwgdGhpcy5nYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByb3RvdHlwZS5lZmZlY3QodGFyZ2V0LCB0aGlzLm93bmVyLCB0aGlzLmdhbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5hZGRMb2codGhpcy5vd25lciwgdGFyZ2V0LCB0aGlzLnByb3RvdHlwZS5hY3Rpb25TdHJpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5CZUFwcGxpZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5tYW5hICYmIHRoaXMub3duZXIubWFuYSA+PSB0aGlzLnByb3RvdHlwZS5maWdodGVyTWFuYURlbWFuZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5pbXBvcnQgeyBVdGlsIH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQb2ludCB7XHJcbiAgICBsZWZ0OiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxufSBcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJrQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RhcnRQb2ludEhhbmRsZXI6IEdhbWVDYXJkLFxyXG4gICAgICAgIHByaXZhdGUgaW1hZ2VzUGF0aHM6IEFycmF5PHN0cmluZz4gXHJcbiAgICApIHt9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGFuaW1hdGUoZW5kcG9pbnQ6IElQb2ludCkge1xyXG4gICAgICAgIGxldCAkb3JpZ2luYWwgPSAkKCcuYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgbGV0ICRhbmltYXRpb24gPSAkb3JpZ2luYWwuY2xvbmUoKS5yZW1vdmVDbGFzcygnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgJG9yaWdpbmFsLmFmdGVyKCRhbmltYXRpb24pO1xyXG4gICAgICAgICRhbmltYXRpb24ucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmltYWdlc1BhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VQYXRoID0gdGhpcy5pbWFnZXNQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgICRhbmltYXRpb24uYXR0cignc3JjJywgaW1hZ2VQYXRoKTtcclxuICAgICAgICAgICAgJGFuaW1hdGlvbi5vZmZzZXQoeyBcclxuICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb2ludEhhbmRsZXIuZ2V0Q29vcmRzKCkubGVmdCArIChlbmRwb2ludC5sZWZ0IC0gdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS5sZWZ0KSAqIGluZGV4IC8gKHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS50b3AgKyAoZW5kcG9pbnQudG9wIC0gdGhpcy5zdGFydFBvaW50SGFuZGxlci5nZXRDb29yZHMoKS50b3ApICogaW5kZXggLyAodGhpcy5pbWFnZXNQYXRocy5sZW5ndGgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBVdGlsLnNsZWVwKDUwMCAvIHRoaXMuaW1hZ2VzUGF0aHMubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGFuaW1hdGlvbi5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWVDYXJkIH0gZnJvbSBcIi4uL0NvbW1vbi9HYW1lQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtDYXJkIGV4dGVuZHMgR2FtZUNhcmQge1xyXG4gICAgcHJpdmF0ZSBfb25jbGljazogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwicGVyayBuYW1lXCIsIGluZm8gPSBcImluZm9cIikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kY2FyZCA9IHRoaXMuJGluaXRpYWxpemVDYXJkKG5hbWUsIGluZm8pO1xyXG4gICAgICAgICQoJyNoZXJvLW1lbnUnKS5hcHBlbmQodGhpcy4kY2FyZCk7XHJcbiAgICAgICAgdGhpcy5fb25jbGljayA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgJGluaXRpYWxpemVDYXJkKG5hbWU6IHN0cmluZywgaW5mbzogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgbGV0ICRjYXJkID0gJCgnI3BlcmstY2FyZCcpLmNsb25lKCk7XHJcbiAgICAgICAgJGNhcmQuZmluZCgnLm15LXRpdGxlJykuaHRtbChuYW1lKTtcclxuICAgICAgICAkY2FyZC5maW5kKCcubXktaW5mbycpLmh0bWwoaW5mbyk7XHJcbiAgICAgICAgJGNhcmQucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG4gICAgICAgICRjYXJkLmFkZENsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIHJldHVybiAkY2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPbmNsaWNrKG1ldGhvZDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbmNsaWNrID0gbWV0aG9kO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2dyZXNzV2lkdGgocGVyY2VudHM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHBlcmNlbnRzID0gdGhpcy5nZXRSZWFsUGVyY2VudHMocGVyY2VudHMpO1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS53aWR0aChwZXJjZW50cyArICclJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVhbFBlcmNlbnRzKHBlcmNlbnRzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA8IDApIHJldHVybiAwO1xyXG4gICAgICAgIGlmIChwZXJjZW50cyA+IDEwMCkgcmV0dXJuIDEwMDtcclxuICAgICAgICByZXR1cm4gcGVyY2VudHM7XHJcbiAgICB9XHJcblxyXG4gICAgdHVybk9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuJGNhcmQuZmluZCgnLm1hbmEtcHJvZ3Jlc3MnKS5yZW1vdmVDbGFzcygncHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgJCgnLnBlcmstY2FyZCcpLnJlbW92ZUNsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLmFkZENsYXNzKCdib3JkZXItcHJpbWFyeScpO1xyXG4gICAgICAgICAgICB0aGlzLl9vbmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5vbihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJkLnJlbW92ZUNsYXNzKCdiZy1saWdodCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuJGNhcmQub24oXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY2FyZC5hZGRDbGFzcygnYmctbGlnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR1cm5PZmYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5maW5kKCcubWFuYS1wcm9ncmVzcycpLmFkZENsYXNzKCdwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLiRjYXJkLm9mZihcImNsaWNrIG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiKTtcclxuICAgICAgICB0aGlzLiRjYXJkLmF0dHIoJ3JvbGUnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kY2FyZC5yZW1vdmVDbGFzcygnYm9yZGVyLXByaW1hcnknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZ2h0ZXIgfSBmcm9tIFwiLi4vRmlnaHRlcnMvRmlnaHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlcmtQcm90b3R5cGUge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWFuYTogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBmaWdodGVyTWFuYURlbWFuZDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBpbmZvOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIGVmZmVjdDogKHRhcmdldDogRmlnaHRlciwgb3duZXI/OiBGaWdodGVyLCBnYW1lPzogR2FtZSkgPT4gdm9pZCxcclxuICAgICAgICBwdWJsaWMgZm9yU2VsZjogYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgYWN0aW9uU3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHNjb3JlOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGFuaW1hdGlvblBhdGhzPzogc3RyaW5nW11cclxuICAgICkge1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtIZXJvUHJvdG90eXBlfSBmcm9tIFwiLi4vRmlnaHRlcnMvSGVyby9IZXJvUHJvdG90eXBlXCI7XHJcbmltcG9ydCB7RmlnaHRlclByb3RvdHlwZX0gZnJvbSBcIi4uL0ZpZ2h0ZXJzL0ZpZ2h0ZXJQcm90b3R5cGVcIjtcclxuaW1wb3J0IHtQZXJrUHJvdG90eXBlfSBmcm9tIFwiLi4vUGVya3MvUGVya1Byb3RvdHlwZVwiO1xyXG5pbXBvcnQge0ZpZ2h0ZXJ9IGZyb20gXCIuLi9GaWdodGVycy9GaWdodGVyXCI7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uL0NvbW1vbi9VdGlsXCI7XHJcbmltcG9ydCB7R2FtZX0gZnJvbSBcIi4uL01haW4vR2FtZVwiO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tIFwiLi4vRmlnaHRlcnMvRW5lbXkvRW5lbXlcIjtcclxuaW1wb3J0IHtzdG9yZUpTT059IGZyb20gXCIuLi9NYWluL1Byb2dyYW1cIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgU3RvcmUge1xyXG4gICAgZW5lbWllc01heENvdW50OiBudW1iZXIsXHJcbiAgICBtaW5BZGRFbmVteUNoYW5jZTogbnVtYmVyLFxyXG4gICAgbWF4QWRkRW5lbXlDaGFuY2U6IG51bWJlcixcclxuICAgIG1vdmVzVG9XaW5uaW5nOiBudW1iZXIsXHJcbiAgICBzdGFydEVuZW15Q291bnQ6IG51bWJlcixcclxuICAgIGVuZW15TW92ZUNoYW5jZTogbnVtYmVyLFxyXG4gICAgZGllZExvZzogc3RyaW5nLFxyXG4gICAgaGVyb2VzOiBIZXJvUHJvdG90eXBlW10sXHJcbiAgICBlbmVtaWVzOiBGaWdodGVyUHJvdG90eXBlW10sXHJcbiAgICBwZXJrczogUGVya1Byb3RvdHlwZVtdXHJcbn1cclxuXHJcbi8vIHZhciBzdG9yZUpTT04gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4vLyBleHBvcnRzLnN0b3JlID0ge1xyXG4vLyAgICAgZW5lbWllc01heENvdW50OiBzdG9yZUpTT04uZW5lbWllc01heENvdW50LFxyXG4vLyAgICAgbWluQWRkRW5lbXlDaGFuY2U6IHN0b3JlSlNPTi5taW5BZGRFbmVteUNoYW5jZSxcclxuLy8gICAgIG1heEFkZEVuZW15Q2hhbmNlOiBzdG9yZUpTT04ubWF4QWRkRW5lbXlDaGFuY2UsXHJcbi8vICAgICBtb3Zlc1RvV2lubmluZzogc3RvcmVKU09OLm1vdmVzVG9XaW5uaW5nLFxyXG4vLyAgICAgc3RhcnRFbmVteUNvdW50OiBzdG9yZUpTT04uc3RhcnRFbmVteUNvdW50LFxyXG4vLyAgICAgZW5lbXlNb3ZlQ2hhbmNlOiBzdG9yZUpTT04uZW5lbXlNb3ZlQ2hhbmNlLFxyXG4vLyAgICAgZGllZExvZzogc3RvcmVKU09OLmRpZWRMb2csXHJcbi8vICAgICBoZXJvZXM6IHN0b3JlSlNPTi5oZXJvZXMubWFwKChqc29uSGVybykgPT4gcGFyc2VIZXJvKGpzb25IZXJvKSksXHJcbi8vICAgICBlbmVtaWVzOiBzdG9yZUpTT04uZW5lbWllcyxcclxuLy8gICAgIHBlcmtzOiBzdG9yZUpTT04ucGVya3MubWFwKChqc29uUGVyaykgPT4gcGFyc2VQZXJrKGpzb25QZXJrKSlcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gcGFyc2VIZXJvKGpzb246IGFueSk6IEhlcm9Qcm90b3R5cGUge1xyXG4gICAgcmV0dXJuIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgIGpzb24uaWQsXHJcbiAgICAgICAganNvbi5uYW1lLFxyXG4gICAgICAgIGpzb24uaHAsXHJcbiAgICAgICAganNvbi5tYW5hLFxyXG4gICAgICAgIGpzb24uc2tpbGxzLFxyXG4gICAgICAgIGpzb24ubW90dG8sXHJcbiAgICAgICAganNvbi5maXJzdERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGpzb24uc2Vjb25kRGVzY3JpcHRpb24sXHJcbiAgICAgICAganNvbi5hbnN3ZXIsXHJcbiAgICAgICAgKCRjYXJkKSA9PiB7IEZ1bmN0aW9uKCckY2FyZCcsIGpzb24ucmVhY3Rpb24pKCRjYXJkKSB9XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlUGVyayhqc29uOiBhbnkpOiBQZXJrUHJvdG90eXBlIHtcclxuICAgIHJldHVybiBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICBqc29uLmlkLFxyXG4gICAgICAgIGpzb24ubmFtZSxcclxuICAgICAgICBqc29uLm1hbmEsXHJcbiAgICAgICAganNvbi5maWdodGVyTWFuYURlbWFuZCxcclxuICAgICAgICBqc29uLmluZm8sXHJcbiAgICAgICAgKHRhcmdldCwgb3duZXIsIGdhbWUpID0+IHtcclxuICAgICAgICAgICAgRnVuY3Rpb24oJ3RhcmdldCwgb3duZXInLCAnZ2FtZScsIGpzb24uZWZmZWN0KSh0YXJnZXQsIG93bmVyLCBnYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpzb24uZm9yU2VsZixcclxuICAgICAgICBqc29uLmFjdGlvblN0cmluZyxcclxuICAgICAgICBqc29uLnNjb3JlLFxyXG4gICAgICAgIGpzb24uY291bnRPZkltYWdlcyAhPSBudWxsID8gVXRpbC5nZXRJbWFnZXNQYXRocyhqc29uLmlkLCBqc29uLmNvdW50T2ZJbWFnZXMpIDogbnVsbFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHN0b3JlOiBTdG9yZSA9IHtcclxuICAgIGVuZW1pZXNNYXhDb3VudDogMTIsXHJcbiAgICBtaW5BZGRFbmVteUNoYW5jZTogMTUsXHJcbiAgICBtYXhBZGRFbmVteUNoYW5jZTogMzUsXHJcbiAgICBtb3Zlc1RvV2lubmluZzogNDAsXHJcbiAgICBzdGFydEVuZW15Q291bnQ6IDEsXHJcbiAgICBlbmVteU1vdmVDaGFuY2U6IDc1LFxyXG4gICAgZGllZExvZzogJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj7Qv9C+0LPQuNCxLjwvc3Bhbj4gUHJlc3MgRiB0byBwYXkgcmVzcGVjdCcsXHJcbiAgICBoZXJvZXM6IFtcclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9Ca0YPQutGD0LzQsdC10YAnLFxyXG4gICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLFxyXG4gICAgICAgICAgICAn0JLRgdC10YUg0LfQsNC60YPQutGD0LzQsdGA0Y4hJyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0JfQtdC70ZHQvdGL0Lk8L3NwYW4+LCDQv9GD0L/Ri9GA0YfQsNGC0YvQuSwg0LvRjtCx0LjRgiwg0LrQvtCz0LTQsCDQtdCz0L4g0LrRg9GB0LDRjtGCJyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9Cl0L7RhdC+LCDRhdC10YXQtdC5ISDQryDRgtC10LHRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LDQutGD0LrRg9C80LHRgNGOPC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAoJGNhcmQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICRjYXJkLmFkZENsYXNzKFwiYmctc3VjY2VzcyB0ZXh0LXdoaXRlXCIpXHJcbiAgICAgICAgICAgICAgICAkY2FyZC5maW5kKFwic3BhblwiKS5yZW1vdmVDbGFzcygpLmFkZENsYXNzKFwidGV4dC1kYXJrXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgICfQn9C+0LzQuNC00L7RgNC40YPRgScsXHJcbiAgICAgICAgICAgIDc1MCxcclxuICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICBbMCwgMSwgMywgNF0sXHJcbiAgICAgICAgICAgICfQryDQutGA0LDRgdC90LXRjicsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+0JrRgNCw0YHQvdGL0Lk8L3NwYW4+LCDQs9C70LDQtNC60LjQuSwg0YLQstC+0LknLFxyXG4gICAgICAgICAgICAn0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSDQv9GD0YLQsNGC0YwhJyxcclxuICAgICAgICAgICAgJ9CQ0YXQsNGF0LDRhdCw0YXQsNGF0LDRhdCw0YXQsNGF0YXQsNGF0LDRhdCw0YXQsNGF0LDRhScsXHJcbiAgICAgICAgICAgICgkY2FyZDogSlF1ZXJ5PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmFkZENsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLWxpZ2h0IHRleHQtZGFya1wiKTtcclxuICAgICAgICAgICAgICAgICRjYXJkLnJlbW92ZUNsYXNzKFwiYmctdHJhbnNwYXJlbnRcIik7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcyhcImJnLWRhcmsgdGV4dC13aGl0ZVwiKTtcclxuICAgICAgICAgICAgICAgIFV0aWwuc2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNhcmQucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJiZy1kYXJrIHRleHQtd2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBIZXJvUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAn0JTRi9C90YfRg9C90LTRg9C6JyxcclxuICAgICAgICAgICAgMTAwMCxcclxuICAgICAgICAgICAgNzAsXHJcbiAgICAgICAgICAgIFswLCAzLCA2LCA4XSxcclxuICAgICAgICAgICAgJ9Ca0LDQuiDRjyDRgdGO0LTQsCDQv9C+0L/QsNC7JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC13YXJuaW5nXCI+0JbRkdC70YLRi9C5PC9zcGFuPiwg0L/QvtC/0LDQuyDRgdGO0LTQsCDRgdC70YPRh9Cw0LnQvdC+JyxcclxuICAgICAgICAgICAgJ9Cd0LUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiEg0J3QtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC60YDQsNGB0L3Ri9C5PC9zcGFuPiEnLFxyXG4gICAgICAgICAgICAn0JzQvtC70Y4g0YLQtdCx0Y8hJyxcclxuICAgICAgICAgICAgKCRjYXJkOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkY2FyZC5hZGRDbGFzcyhcImJnLXdhcm5pbmdcIilcclxuICAgICAgICAgICAgICAgICRjYXJkLmZpbmQoXCIudGV4dC13YXJuaW5nXCIpLnJlbW92ZUNsYXNzKFwidGV4dC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IEhlcm9Qcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImJnLXN1Y2Nlc3MgdGV4dC1saWdodFwiPtCe0LPRg9GA0YbQsNC9PC9zcGFuPicsXHJcbiAgICAgICAgICAgIDQwMCxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICBbMCwgMywgNSwgN10sXHJcbiAgICAgICAgICAgICfQn9GD0LzQv9GD0YDRg9C80L/Rg9C8JyxcclxuICAgICAgICAgICAgJ9Cd0LUg0L/Rg9GC0LDRgtGMINGBINCa0YPQutGD0LzQsdC10YDQvtC8IScsXHJcbiAgICAgICAgICAgICfQotC+0LbQtSA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtC30LXQu9GR0L3Ri9C5PC9zcGFuPiwg0L3QviDQvdC1INCa0YPQutGD0LzQsdC10YAhJyxcclxuICAgICAgICAgICAgJ9Cd0LUg0LLQt9C00YPQvNCw0Lkg0YHQutCw0LfQsNGC0YwsINGH0YLQviDRjyA8c3BhbiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPtCa0YPQutGD0LzQsdC10YA8L3NwYW4+IScsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIFV0aWwuZmlyZXdvcmtzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgSGVyb1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgJ9CQ0YDQsdGD0LfQvtC9JyxcclxuICAgICAgICAgICAgODAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAyLCAzLCA2XSxcclxuICAgICAgICAgICAgJ9Cf0YjQv9GI0L/RiNC/JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0LkgPGI+0LHQvtC70YzRiNC+0Lk8L2I+JyxcclxuICAgICAgICAgICAgJ9Ch0LDQvNGL0Lkg0YHQv9C10LvRi9C5JyxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+0KHRitC10YjRjCDQvNC10L3Rjz88L3NwYW4+J1xyXG4gICAgICAgIClcclxuICAgIF0sXHJcbiAgICBlbmVtaWVzOiBbXHJcbiAgICAgICAgbmV3IEZpZ2h0ZXJQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQoNC10LTQuNGB0L7QvScsXHJcbiAgICAgICAgICAgIDMwMCxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICBbMCwgMSwgM10sXHJcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyIGJvcmRlci1kYW5nZXJcIj7QndC10L3QsNCy0LjQttGDITwvc3Bhbj4nXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9CR0LDQutC70LDQttGD0L0nLFxyXG4gICAgICAgICAgICA0MDAsXHJcbiAgICAgICAgICAgIDgwLFxyXG4gICAgICAgICAgICBbMCwgMSwgNSwgN10sXHJcbiAgICAgICAgICAgICfQkNCz0YDRhSEnXHJcbiAgICAgICAgKSxcclxuICAgICAgICBuZXcgRmlnaHRlclByb3RvdHlwZShcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgJ9Ci0L7QvNCw0YLRg9GBJyxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAxLCA1XSxcclxuICAgICAgICAgICAgJ9Cj0L/RhCdcclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBGaWdodGVyUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0KLRi9C60LLQuNC9JyxcclxuICAgICAgICAgICAgNTAwLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIFswLCAxLCA0XSxcclxuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXIgYm9yZGVyLWRhbmdlclwiPtCV0YXQtdGF0LXQtdGF0LXRhTwvc3Bhbj4nXHJcbiAgICAgICAgKSxcclxuICAgIF0sXHJcbiAgICBwZXJrczogW1xyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAn0J/RgNC+0L/Rg9GB0Log0YXQvtC00LAnLFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L/RgNC+0L/Rg9GB0YLQuNC7INGF0L7QtCcsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgJ9CS0LfRgNGL0LInLFxyXG4gICAgICAgICAgICAzMCxcclxuICAgICAgICAgICAgMjAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L7QtNC90L7Qs9C+INCy0YDQsNCz0LAnLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkSHAoLTEwMClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICfQsdCw0YXQvdGD0Lsg0LLQt9GA0YvQstC+0Lwg0L/QvicsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDEsIDI1KVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAn0JzQvtC70L3QuNGPJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINCy0YHQtdGFJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvd25lciBpbnN0YW5jZW9mIEVuZW15KVxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWUuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4gKGVuZW15LmFkZEhwKDEwKSkpO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiAoZW5lbXkuYWRkSHAoLTcwKSkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9Cx0LDRhdC90YPQuyDQvNC+0LvQvdC40LXQuSDQv9C+INCy0YHQtdC8LCDQsiDRgtC+0Lwg0YfQuNGB0LvQtSDQv9C+JyxcclxuICAgICAgICAgICAgMTIwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDIsIDYpXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDMsXHJcbiAgICAgICAgICAgICfQm9C10YfQtdC90LjQtScsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgJ9Cd0LjQutC+0LPQviDQvdC1INC/0YvRgtCw0LXRgtGB0Y8g0YPQsdC40YLRjCcsXHJcbiAgICAgICAgICAgICh0YXJnZXQ6IEZpZ2h0ZXIsIF86IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgyNTApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L/QvtC00LvQtdGH0LjQu9GB0Y8g0LvQtdGH0LXQvdC40LXQvCcsXHJcbiAgICAgICAgICAgIDUwLFxyXG4gICAgICAgICAgICBVdGlsLmdldEltYWdlc1BhdGhzKDMsIDEzKVxyXG4gICAgICAgICksXHJcblxyXG4gICAgICAgIG5ldyBQZXJrUHJvdG90eXBlKFxyXG4gICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAn0JbQtdGA0YLQstCwJyxcclxuICAgICAgICAgICAgNzAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0YHQsNC80L7Qs9C+INGB0LXQsdGPJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZE1hbmEoMTUwKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRIcCgtMzApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L/RgNC10LTQv9GA0LjQvdGP0Lsg0L/QvtC/0YvRgtC60YMg0YHRg9C40YbQuNC00LAg0Lgg0LLQvtGB0YHRgtCw0L3QvtCy0LjQuyDQvNCw0L3QvdGDJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNCwgMjApXHJcbiAgICAgICAgKSxcclxuXHJcbiAgICAgICAgbmV3IFBlcmtQcm90b3R5cGUoXHJcbiAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgICfQmtGA0LDQttCwINC20LjQt9C90LgnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgMjAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0LLQviDQsdC70LDQs9C+JyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG93bmVyLmFkZEhwKC10YXJnZXQuYWRkSHAoLTc1KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAn0YPQutGA0LDQuyDQt9C00L7RgNC+0LLRjNC1INGDJyxcclxuICAgICAgICAgICAgNTAsXHJcbiAgICAgICAgICAgIFV0aWwuZ2V0SW1hZ2VzUGF0aHMoNSwgOSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNixcclxuICAgICAgICAgICAgJ9CS0LjRhdGA0YwnLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIDcwLFxyXG4gICAgICAgICAgICAn0J/Ri9GC0LDQtdGC0YHRjyDRg9Cx0LjRgtGMINC+0LrRgNGD0LbQtdC90LjQtSDQstGA0LDQs9CwJyxcclxuICAgICAgICAgICAgKHRhcmdldDogRmlnaHRlciwgb3duZXI6IEZpZ2h0ZXIsIGdhbWU6IEdhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBlbmVteSA9IDxFbmVteT50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBlbmVteS5hZGRIcCgtMjAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGdhbWUuZW5lbWllcy5pbmRleE9mKGVuZW15KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDApIGdhbWUuZW5lbWllc1tpbmRleCAtIDFdLmFkZEhwKC0xMDApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgZ2FtZS5lbmVtaWVzLmxlbmd0aCAtIDEpIGdhbWUuZW5lbWllc1tpbmRleCArIDFdLmFkZEhwKC0xMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9Cx0LDRhdC90YPQuyDQstC40YXRgNC10Lwg0L/QviDRgdC+0YHQtdC00Y/QvCwg0LTQsCDQuCDQv9C+INGB0LDQvNC+0LzRgycsXHJcbiAgICAgICAgICAgIDEyMCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg2LCAyNSlcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgJ9Ca0YDQsNC20LAg0LzQsNC90YsnLFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICfQn9GL0YLQsNC10YLRgdGPINGD0LHQuNGC0Ywg0L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90L4nLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkTWFuYSgtdGFyZ2V0LmFkZE1hbmEoLTEwMCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgJ9GD0LrRgNCw0Lsg0LzQsNC90YMg0YMnLFxyXG4gICAgICAgICAgICA1MCxcclxuICAgICAgICAgICAgVXRpbC5nZXRJbWFnZXNQYXRocyg3LCAyNilcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBuZXcgUGVya1Byb3RvdHlwZShcclxuICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgJ9CR0L7Qu9GM0YjQvtC5INC4INCz0LvRg9C/0YvQuSDQstGA0LXQtCDRgdC10LHQtScsXHJcbiAgICAgICAgICAgIDEsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICco0YLQtdGB0YLQvtCy0L7QtSknLFxyXG4gICAgICAgICAgICAodGFyZ2V0OiBGaWdodGVyLCBvd25lcjogRmlnaHRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuYWRkSHAoLTMwMCk7XHJcbiAgICAgICAgICAgICAgICBvd25lci5hZGRNYW5hKC0zMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAn0L7Rh9C10L3RjCDQs9C70YPQv9GL0LknLFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApXHJcbiAgICBdXHJcbn07Il19
