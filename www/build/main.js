webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_inicipartida_helper__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, _cardHelper, _iniciPartidaHelper) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._cardHelper = _cardHelper;
        this._iniciPartidaHelper = _iniciPartidaHelper;
        this.flagMeWinner = true;
        this.penalitzacio = document.getElementById("penalitzacio");
        this.teamOne = 0;
        this.teamTwo = 0;
        this.seleccionatBasa = document.getElementById("seleccionatBasa");
        this.basaSortidaGuanyador = document.getElementById("basaSortidaGuanyador");
        this.count = 0;
        this.winner = {};
        this.puntuacioTeamA = document.getElementById("puntuacioTeamA");
        this.puntuacioTeamB = document.getElementById("puntuacioTeamB");
        this._iniciPartidaHelper.repartirCartaInitial();
        setTimeout(function () {
            _this.myCards();
        }, 4000);
    }
    HomePage.prototype.myCards = function () {
        var _this = this;
        for (var x = 0; x < this._iniciPartidaHelper.jugador_1_tu.cards.length; x++) {
            this.card = document.createElement('div');
            this.card.innerHTML = this._iniciPartidaHelper.jugador_1_tu.cards[x].valor;
            this._cardHelper.setAttributes(this.card, {
                'data-pal': this._iniciPartidaHelper.jugador_1_tu.cards[x].pal,
                'data-val': this._iniciPartidaHelper.jugador_1_tu.cards[x].valor,
                'data-punt': this._iniciPartidaHelper.jugador_1_tu.cards[x].puntuacio,
                'class': 'tapetejugada carta __' + this._iniciPartidaHelper.jugador_1_tu.cards[x].pal
            });
            this.tapete = document.getElementById('user1');
            this.tapete.appendChild(this.card);
            this.card.addEventListener('click', function (evt) {
                var val, punt, pal;
                val = evt.target.getAttribute('data-val');
                punt = evt.target.getAttribute('data-punt');
                pal = evt.target.getAttribute('data-pal');
                console.log(val);
                for (var x_1 = 0; x_1 < _this._iniciPartidaHelper.jugador_1_tu.cards.length; x_1++) {
                    if (_this._iniciPartidaHelper.jugador_1_tu.cards[x_1].pal == pal && _this._iniciPartidaHelper.jugador_1_tu.cards[x_1].valor == val) {
                        _this.rem = _this._iniciPartidaHelper.jugador_1_tu.cards.indexOf(_this._iniciPartidaHelper.jugador_1_tu.cards[x_1]);
                    }
                }
                if (pal == _this._palo && punt > _this._punt) {
                    _this._valor = val;
                    _this._punt = punt;
                    _this._palo = pal;
                }
                //Penalitzar moviment incorrecta
                if (!_this.flagMeWinner) {
                    if (pal != _this._triomf && pal != _this._paldejugada) {
                        for (var x_2 = 0; x_2 < _this._iniciPartidaHelper.jugador_1_tu.cards.length; x_2++) {
                            if (_this._iniciPartidaHelper.jugador_1_tu.cards[x_2].pal == _this._paldejugada || _this._iniciPartidaHelper.jugador_1_tu.cards[x_2].pal == _this._triomf) {
                                _this.penalitzacio = "penalitzacio";
                                _this.teamOne -= 1;
                                _this.teamTwo += 1;
                            }
                        }
                    }
                }
                if (_this.flagMeWinner) {
                    _this._paldejugada = pal;
                    _this.seleccionatBasa = 'EL PAL DE SORTIDA ES ' + _this._paldejugada;
                    _this.basaSortidaGuanyador === '' ? _this.basaSortidaGuanyador = "Jugador de sortida tu" : _this.basaSortidaGuanyador = '', _this.basaSortidaGuanyador = "Jugador de sortida tu";
                    _this._valor = val;
                    _this._punt = punt;
                    _this._palo = pal;
                    _this.showCard(_this._iniciPartidaHelper.jugador_1_tu.cards, 'tu', val, punt, pal, _this.rem);
                    // this.remove();
                }
                else {
                    _this.showCard(_this._iniciPartidaHelper.jugador_1_tu.cards, 'tu', val, punt, pal, _this.rem);
                    // this.remove();
                }
            });
        }
    };
    HomePage.prototype.showCard = function (player, position, value, punt, pal, removedcard) {
        console.log('PLAYER: ', player);
        player.splice(removedcard, 1);
        //Check and reset count
        this.count == 4 ? this.count = 1 : this.count += 1;
        this.winner[position] = parseInt(punt);
        this.userSelected = document.getElementById(position);
        console.log('user selection: ', position);
        this.userSelected.innerHTML === '' ? this.userSelected.innerHTML = value : this.userSelected.innerHTML = '', this.userSelected.innerHTML = value;
        this._cardHelper.setAttributes(this.userSelected, {
            'data-card': value,
            'class': 'tapetejugada carta __' + pal
        });
        console.log(this.userSelected);
        this.nextHandSelect(this.count, position, value, punt, pal);
    };
    HomePage.prototype.nextHandSelect = function (count, position, value, punt, pal) {
        if (count < 4) {
            switch (position) {
                case 'tu':
                    this.nextHand(this._iniciPartidaHelper.jugador_3_dreta.cards, 'dreta', value, punt, pal);
                    break;
                case 'dreta':
                    this.nextHand(this._iniciPartidaHelper.jugador_4_dalt.cards, 'dalt', value, punt, pal);
                    break;
                case 'dalt':
                    this.nextHand(this._iniciPartidaHelper.jugador_2_esquerra.cards, 'esquerra', value, punt, pal);
                    break;
            }
        }
        else {
            this.andTheWinnerIs();
        }
    };
    HomePage.prototype.nextHand = function (user, position, value, punt, pal) {
        var _this = this;
        console.log('USERNEXTHAND: ', user);
        setTimeout(function () {
            _this.startPlay(user, position, value, punt, pal);
        }, 2000);
    };
    HomePage.prototype.startPlay = function (user, position, value, punt, pal) {
        var _this = this;
        var newCard, _removecard, randomVal, randomValAndPal, _val;
        var cartaguanyadora = false;
        //Crear primera posibilitat
        newCard = user.filter(function (el) {
            if (el.pal == _this._paldejugada && el.puntuacio > punt) {
                return (el.pal == _this._paldejugada && el.puntuacio > punt);
            }
            else {
                if (el.pal == _this._paldejugada && el.puntuacio <= punt) {
                    return (el.pal == _this._paldejugada && el.puntuacio <= punt);
                }
                else if (el.pal == _this._triomf && el.puntuacio > punt) {
                    return (el.pal == _this._triomf && el.valor == value);
                }
            }
        });
        //Crear segona posibilitat basat en la primera
        for (var w = 0; w < newCard.length; w++) {
            if (newCard[w].puntuacio > this._punt) {
                newCard = newCard.filter(function (el) { return (el.puntuacio > punt); });
                cartaguanyadora = true;
            }
            else if (newCard[w].puntuacio < this._punt && newCard[w].pal == this._palo) {
                newCard = newCard.filter(function (el) { return (el.puntuacio < _this._punt && el.pal == _this._palo); });
            }
            else if (newCard[w].pal != this._palo && newCard[w].pal == this._triomf && newCard[w].puntuacio == this._punt) {
                newCard = newCard.filter(function (el) { return (el.pal != _this._palo && el.pal == _this._triomf); });
            }
        }
        //De las cartes seleccionades segons probabilitat, escollir una
        randomVal = Math.floor(Math.random() * newCard.length);
        randomValAndPal = Math.floor(Math.random() * user.length);
        _val = newCard[randomVal];
        if (_val) {
            if (cartaguanyadora) {
                this._valor = _val.valor;
                this._punt = _val.puntuacio;
                this._palo = _val.pal;
            }
            _removecard = user.indexOf(_val);
            this.showCard(user, position, _val.valor, _val.puntuacio, _val.pal, _removecard);
        }
        else {
            _val = user[randomValAndPal];
            _removecard = user.indexOf(_val);
            this.showCard(user, position, _val.valor, _val.puntuacio, _val.pal, _removecard);
        }
    };
    // Escollir guanyador ::TODO Refactor this!!
    HomePage.prototype.andTheWinnerIs = function () {
        var _this = this;
        this.premi = this.winner.dreta + this.winner.tu + this.winner.esquerra + this.winner.dalt;
        if (this._triomf == 'butifarra') {
            this.premi = (this.premi * 2) + 1;
        }
        if (this.winner.tu > this.winner.dreta && this.winner.tu > this.winner.esquerra && this.winner.tu > this.winner.dalt) {
            this.flagMeWinner = true;
            this.teamOne += this.premi;
            this.teamOne += 1;
        }
        else if (this.winner.dreta > this.winner.tu && this.winner.dreta > this.winner.esquerra && this.winner.dreta > this.winner.dalt) {
            this._iniciPartidaHelper.jugador_3_dreta.position = "dreta";
            this.sortidaDeCartaGuanyadora(this._iniciPartidaHelper.jugador_3_dreta);
            this.teamTwo += this.premi;
            this.teamTwo += 1;
        }
        else if (this.winner.esquerra > this.winner.tu && this.winner.esquerra > this.winner.dreta && this.winner.esquerra > this.winner.dalt) {
            this._iniciPartidaHelper.jugador_2_esquerra.position = "esquerra";
            this.sortidaDeCartaGuanyadora(this._iniciPartidaHelper.jugador_2_esquerra);
            this.teamTwo += this.premi;
            this.teamTwo += 1;
        }
        else {
            this._iniciPartidaHelper.jugador_4_dalt.position = "dalt";
            this.sortidaDeCartaGuanyadora(this._iniciPartidaHelper.jugador_4_dalt);
            this.teamOne += this.premi;
            this.teamOne += 1;
        }
        this.winner = {};
        setTimeout(function () {
            _this._cardHelper.cleanTapete();
            _this.penalitzacio = "";
        }, 3000);
        this.puntuacioTeamA === '' ? this.puntuacioTeamA = "Puntuacio equip A " + this.teamOne : this.puntuacioTeamA = '', this.puntuacioTeamA = "Puntuacio equip A " + this.teamOne;
        this.puntuacioTeamB === '' ? this.puntuacioTeamB = "Puntuacio equip B " + this.teamTwo : this.puntuacioTeamB = '', this.puntuacioTeamB = "Puntuacio equip B " + this.teamTwo;
    };
    HomePage.prototype.sortidaDeCartaGuanyadora = function (user) {
        var _this = this;
        console.log('USERUSER: ', user);
        this.flagMeWinner = false;
        if (user.cards.length != 0) {
            setTimeout(function () {
                var firstcard = user.cards[Math.floor(Math.random() * user.cards.length)];
                _this._valor = firstcard.valor;
                _this._punt = firstcard.puntuacio;
                _this._palo = firstcard.pal;
                _this._paldejugada = firstcard.pal;
                _this.seleccionatBasa = 'EL PAL DE SORTIDA ES ' + _this._paldejugada;
                _this.showCard(user.cards, user.position, firstcard.valor, firstcard.puntuacio, firstcard.pal, user.cards.indexOf(firstcard));
                _this.basaSortidaGuanyador === '' ? _this.basaSortidaGuanyador = "Jugador de sortida " + user.position : _this.basaSortidaGuanyador = '', _this.basaSortidaGuanyador = "Jugador de sortida " + user.position;
            }, 4000);
        }
        else {
            if (this.teamOne >= 101 || this.teamTwo >= 101) {
                this.teamOne >= 101 ? alert('GAME OVER! TeamOne (tu i dalt) GUANYADORS!!') : alert('GAME OVER! TeamTwo (esquerra i dreta) GUANYADORS!!');
                // novaPartida.style.display = 'block';
                // novaPartida.addEventListener("click", function(){
                //   cleanInfo();
                //   NewGame();
                // })
            }
            else {
                switch (user) {
                    case this._iniciPartidaHelper.jugador_1_tu:
                        this._iniciPartidaHelper.initGame(1);
                        break;
                    case this._iniciPartidaHelper.jugador_2_esquerra:
                        this._iniciPartidaHelper.initGame(2);
                        break;
                    case this._iniciPartidaHelper.jugador_3_dreta:
                        this._iniciPartidaHelper.initGame(3);
                        break;
                    case this._iniciPartidaHelper.jugador_4_dalt:
                        this._iniciPartidaHelper.initGame(4);
                        break;
                }
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\butifarra_app\src\pages\home\home.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    {{_iniciPartidaHelper.jugadorSortida}}\n\n  </p>\n\n  <aside class="texte-seleccio">\n\n    <h3>L A &nbsp;&nbsp;B U T I F A R R A</h3>\n\n    <div id="seleccionat" class="pal-seleccionat">{{_iniciPartidaHelper.pal_seleccionat}}</div>\n\n    <div id="seleccionatPosition" class="pal-seleccionat">{{_iniciPartidaHelper.pal_posicio}}</div>\n\n    <div id="seleccionatBasa" class="pal-seleccionat">{{seleccionatBasa}}</div>\n\n    <div id="basaSortidaGuanyador" class="pal-seleccionat">{{basaSortidaGuanyador}}</div>\n\n    <div id="puntuacioTeamA" class="pal-seleccionat">&nbsp;</div>\n\n    <div id="puntuacioTeamB" class="pal-seleccionat">&nbsp;</div>\n\n    <div id="penalitzacio" class="pal-seleccionat">{{penalitzacio}}</div>\n\n    <div id="novaPartida" class="pal-seleccionat">clickar per a nova partida</div>\n\n  </aside>\n\n  <section class="jugada">\n\n    <div id="esquerra" class="tapetejugada carta"></div>\n\n    <div id="dreta" class="tapetejugada carta"></div>\n\n    <div id="dalt" class="tapetejugada carta"></div>\n\n    <div id="tu" class="tapetejugada carta"></div>\n\n  </section>\n\n  <section class="seleccio" *ngIf="_iniciPartidaHelper.seleccioInit">\n\n    <h3>Selecciona Triomf</h3>\n\n    <div class="pals_triomf" (click)="_iniciPartidaHelper.palSeleccionat(\'oros\')">OROS</div>\n\n    <div class="pals_triomf" (click)="_iniciPartidaHelper.palSeleccionat(\'copes\')">COPES</div>\n\n    <div class="pals_triomf" (click)="_iniciPartidaHelper.palSeleccionat(\'espasses\')">ESPASSES</div>\n\n    <div class="pals_triomf" (click)="_iniciPartidaHelper.palSeleccionat(\'bastos\')">BASTOS</div>\n\n    <div class="pals_triomf" (click)="_iniciPartidaHelper.palSeleccionat(\'butifarra\')">BUTIFARRA</div>\n\n  </section>\n\n  <section id="user1"></section>\n\n\n\n</ion-content>`/*ion-inline-end:"C:\Users\ce9\Documents\personal\butifarra_app\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__["a" /* CardHelper */], __WEBPACK_IMPORTED_MODULE_3__helpers_inicipartida_helper__["a" /* IniciPartidaHelper */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__["a" /* CardHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__helpers_card_helper__["a" /* CardHelper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__helpers_inicipartida_helper__["a" /* IniciPartidaHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__helpers_inicipartida_helper__["a" /* IniciPartidaHelper */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// interface PilotConfig {
//     valor:number;
//     pal: string;
//     puntuacio: number;   
// }
// interface UserConfig {
//     cards: Array<PilotConfig>;
//     position: string;
//     sortida: string;
// }
var CardHelper = (function () {
    function CardHelper() {
        //Baralla
        this.pilot = [
            { valor: 1, pal: 'oros', puntuacio: 4 }, { valor: 2, pal: 'oros', puntuacio: 0 }, { valor: 3, pal: 'oros', puntuacio: 0 },
            { valor: 4, pal: 'oros', puntuacio: 0 }, { valor: 5, pal: 'oros', puntuacio: 0 }, { valor: 6, pal: 'oros', puntuacio: 0 },
            { valor: 7, pal: 'oros', puntuacio: 0 }, { valor: 8, pal: 'oros', puntuacio: 0 }, { valor: 9, pal: 'oros', puntuacio: 5 },
            { valor: 10, pal: 'oros', puntuacio: 1 }, { valor: 11, pal: 'oros', puntuacio: 2 }, { valor: 12, pal: 'oros', puntuacio: 3 },
            { valor: 1, pal: 'copes', puntuacio: 4 }, { valor: 2, pal: 'copes', puntuacio: 0 }, { valor: 3, pal: 'copes', puntuacio: 0 },
            { valor: 4, pal: 'copes', puntuacio: 0 }, { valor: 5, pal: 'copes', puntuacio: 0 }, { valor: 6, pal: 'copes', puntuacio: 0 },
            { valor: 7, pal: 'copes', puntuacio: 0 }, { valor: 8, pal: 'copes', puntuacio: 0 }, { valor: 9, pal: 'copes', puntuacio: 5 },
            { valor: 10, pal: 'copes', puntuacio: 1 }, { valor: 11, pal: 'copes', puntuacio: 2 }, { valor: 12, pal: 'copes', puntuacio: 3 },
            { valor: 1, pal: 'bastos', puntuacio: 4 }, { valor: 2, pal: 'bastos', puntuacio: 0 }, { valor: 3, pal: 'bastos', puntuacio: 0 },
            { valor: 4, pal: 'bastos', puntuacio: 0 }, { valor: 5, pal: 'bastos', puntuacio: 0 }, { valor: 6, pal: 'bastos', puntuacio: 0 },
            { valor: 7, pal: 'bastos', puntuacio: 0 }, { valor: 8, pal: 'bastos', puntuacio: 0 }, { valor: 9, pal: 'bastos', puntuacio: 5 },
            { valor: 10, pal: 'bastos', puntuacio: 1 }, { valor: 11, pal: 'bastos', puntuacio: 2 }, { valor: 12, pal: 'bastos', puntuacio: 3 },
            { valor: 1, pal: 'espasses', puntuacio: 4 }, { valor: 2, pal: 'espasses', puntuacio: 0 }, { valor: 3, pal: 'espasses', puntuacio: 0 },
            { valor: 4, pal: 'espasses', puntuacio: 0 }, { valor: 5, pal: 'espasses', puntuacio: 0 }, { valor: 6, pal: 'espasses', puntuacio: 0 },
            { valor: 7, pal: 'espasses', puntuacio: 0 }, { valor: 8, pal: 'espasses', puntuacio: 0 }, { valor: 9, pal: 'espasses', puntuacio: 5 },
            { valor: 10, pal: 'espasses', puntuacio: 1 }, { valor: 11, pal: 'espasses', puntuacio: 2 }, { valor: 12, pal: 'espasses', puntuacio: 3 },
        ];
    }
    //Barreixa cartes
    CardHelper.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    //Ordenar cartes per pal
    CardHelper.prototype.ordenarCartesPerValor = function (user) {
        console.log(typeof user);
        user.cards.sort(function (a, b) {
            if (a.pal < b.pal)
                return -1;
            if (a.pal > b.pal)
                return 1;
            return 0;
        });
    };
    //Setting attributes helper
    CardHelper.prototype.setAttributes = function (el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    };
    //Netejar cartes de la taula
    CardHelper.prototype.cleanTapete = function () {
        var cleaner, palsId = ['dreta', 'esquerra', 'dalt', 'tu'];
        for (var t = 0; t < palsId.length; t++) {
            cleaner = document.getElementById(palsId[t]);
            cleaner.innerHTML = '';
            cleaner.setAttribute('data-card', '');
            cleaner.setAttribute('class', 'tapetejugada carta');
        }
    };
    CardHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CardHelper);
    return CardHelper;
}());

//# sourceMappingURL=card.helper.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ce9\Documents\personal\butifarra_app\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\ce9\Documents\personal\butifarra_app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciPartidaHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_helper__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IniciPartidaHelper = (function () {
    function IniciPartidaHelper(_cardHelper) {
        this._cardHelper = _cardHelper;
        this.jugador_1_tu = {};
        this.jugador_2_esquerra = {};
        this.jugador_3_dreta = {};
        this.jugador_4_dalt = {};
        this.seleccioInit = true;
    }
    IniciPartidaHelper.prototype.repartirCartaInitial = function () {
        var sortida = ['oros', 'espasses', 'copes', 'bastos'], cartaDeSortida = this._cardHelper.pilot.slice(Math.floor(Math.random() * 48))[0];
        this._cardHelper.shuffle(sortida);
        this.jugador_1_tu.sortida = sortida[0];
        this.jugador_2_esquerra.sortida = sortida[1];
        this.jugador_3_dreta.sortida = sortida[2];
        this.jugador_4_dalt.sortida = sortida[3];
        this._cardHelper.shuffle(this._cardHelper.pilot);
        cartaDeSortida.pal = cartaDeSortida.pal;
        console.log('cartaDeSortida: ', cartaDeSortida.pal);
        this.sortidaInitial(cartaDeSortida.pal);
    };
    IniciPartidaHelper.prototype.sortidaInitial = function (pal) {
        switch (pal) {
            case this.jugador_1_tu.sortida: {
                this.initGame(1);
                break;
            }
            case this.jugador_2_esquerra.sortida: {
                this.initGame(2);
                break;
            }
            case this.jugador_3_dreta.sortida: {
                this.initGame(3);
                break;
            }
            case this.jugador_4_dalt.sortida: {
                this.initGame(4);
                break;
            }
        }
    };
    IniciPartidaHelper.prototype.initGame = function (numb) {
        this.jugadorSortida = 'jugador numero ' + numb;
        this._cardHelper.shuffle(this._cardHelper.pilot);
        //Distribueix cartes
        this.jugador_1_tu.cards = this._cardHelper.pilot.slice(0, 12);
        this._cardHelper.ordenarCartesPerValor(this.jugador_1_tu);
        this.jugador_2_esquerra.cards = this._cardHelper.pilot.slice(12, 24);
        this._cardHelper.ordenarCartesPerValor(this.jugador_2_esquerra);
        this.jugador_3_dreta.cards = this._cardHelper.pilot.slice(24, 36);
        this._cardHelper.ordenarCartesPerValor(this.jugador_3_dreta);
        this.jugador_4_dalt.cards = this._cardHelper.pilot.slice(36, 48);
        this._cardHelper.ordenarCartesPerValor(this.jugador_4_dalt);
        if (numb == 1)
            this.repartirAndEscollir(this.jugador_1_tu);
        if (numb == 2)
            this.repartirAndEscollir(this.jugador_2_esquerra);
        if (numb == 3)
            this.repartirAndEscollir(this.jugador_3_dreta);
        if (numb == 4)
            this.repartirAndEscollir(this.jugador_4_dalt);
    };
    IniciPartidaHelper.prototype.repartirAndEscollir = function (user) {
        var _this = this;
        console.log('USER: ', user);
        user.cards == this.jugador_4_dalt.cards ? this.jugadorDeInici = 'company' : this.jugadorDeInici = 'contrari';
        if (user.cards != this.jugador_1_tu.cards) {
            var counts_1 = {};
            user.cards.forEach(function (x) {
                counts_1[x.pal] = (counts_1[x.pal] || 0) + 1;
                if (counts_1[x.pal] >= 4) {
                    _this.createTriomfSign(x.pal, user.position);
                }
            });
            //  sortidaDeCartaGuanyadora(user, position)
        }
    };
    IniciPartidaHelper.prototype.palSeleccionat = function (palseleccionat) {
        this.pal = palseleccionat;
        this.createTriomfSign(this.pal, 'tu');
    };
    IniciPartidaHelper.prototype.createTriomfSign = function (pal, position) {
        this.seleccioInit = false;
        this.pal_seleccionat = 'TRIOMF ESCOLLIT PER JUGADOR ' + position;
        this.pal_posicio = 'EL TRIOMF ES: ' + pal;
        this._triomf = this.pal;
    };
    IniciPartidaHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__card_helper__["a" /* CardHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__card_helper__["a" /* CardHelper */]) === "function" && _a || Object])
    ], IniciPartidaHelper);
    return IniciPartidaHelper;
    var _a;
}());

//# sourceMappingURL=inicipartida.helper.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map