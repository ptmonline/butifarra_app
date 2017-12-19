import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardHelper } from '../helpers/card.helper';
import { IniciPartidaHelper } from '../helpers/inicipartida.helper';
// import _ from 'lodash';
interface PilotConfig {
  valor:number;
  pal: string;
  puntuacio: number;   
}

interface UserConfig {
  cards: Array<PilotConfig>;
  position: string;
  sortida: string;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CardHelper, IniciPartidaHelper]
})
export class HomePage {

  public card: any;
  public tapete: any;
  public _paldejugada: string;
  public _valor: any;
  public _punt: any;
  public _palo: string;
  public flagMeWinner: boolean = true;
  public _triomf: string;
  public penalitzacio: any = document.getElementById("penalitzacio");
  public teamOne: number = 0;
  public teamTwo: number = 0;
  public seleccionatBasa: any = document.getElementById("seleccionatBasa");
  public basaSortidaGuanyador: any = document.getElementById("basaSortidaGuanyador");
  public count: number = 0;
  public winner: any = {};
  public userSelected: any;
  public rem: any;
  public premi: any;
  public puntuacioTeamA: any = document.getElementById("puntuacioTeamA");
  public puntuacioTeamB: any = document.getElementById("puntuacioTeamB");

  constructor(public navCtrl: NavController, public _cardHelper: CardHelper, public _iniciPartidaHelper: IniciPartidaHelper) {
    setTimeout(()=>{
      this._iniciPartidaHelper.repartirCartaInitial();
    }, 2000)
    setTimeout(() => {
      this.myCards();
    }, 4000)
  }

  myCards() {
    for (let x = 0; x < this._iniciPartidaHelper.jugador_1_tu.cards.length; x++) {
      this.card = document.createElement('div');
      this.card.innerHTML = this._iniciPartidaHelper.jugador_1_tu.cards[x].valor;

      this._cardHelper.setAttributes(this.card, {
        'data-pal': this._iniciPartidaHelper.jugador_1_tu.cards[x].pal,
        'data-val': this._iniciPartidaHelper.jugador_1_tu.cards[x].valor,
        'data-punt': this._iniciPartidaHelper.jugador_1_tu.cards[x].puntuacio,
        'class': 'tapetejugada carta __' + this._iniciPartidaHelper.jugador_1_tu.cards[x].pal
      })

      this.tapete = document.getElementById('user1');
      this.tapete.appendChild(this.card);

      this.card.addEventListener('click', evt => {
        let val, punt, pal;
        val = evt.target.getAttribute('data-val');
        punt = evt.target.getAttribute('data-punt');
        pal = evt.target.getAttribute('data-pal');
        console.log(val)
        for (let x = 0; x < this._iniciPartidaHelper.jugador_1_tu.cards.length; x++) {
          if (this._iniciPartidaHelper.jugador_1_tu.cards[x].pal == pal && this._iniciPartidaHelper.jugador_1_tu.cards[x].valor == val) {
            this.rem = this._iniciPartidaHelper.jugador_1_tu.cards.indexOf(this._iniciPartidaHelper.jugador_1_tu.cards[x])
          }
        }
        if (pal == this._palo && punt > this._punt) {
          this._valor = val;
          this._punt = punt;
          this._palo = pal
        }
        //Penalitzar moviment incorrecta
        if (!this.flagMeWinner) {
          if (pal != this._triomf && pal != this._paldejugada) {
            for (let x = 0; x < this._iniciPartidaHelper.jugador_1_tu.cards.length; x++) {
              if (this._iniciPartidaHelper.jugador_1_tu.cards[x].pal == this._paldejugada || this._iniciPartidaHelper.jugador_1_tu.cards[x].pal == this._triomf) {
                this.penalitzacio = "penalitzacio"
                this.teamOne -= 1;
                this.teamTwo += 1;
              }
            }
          }
        }
        if (this.flagMeWinner) {
          this._paldejugada = pal;
          this.seleccionatBasa = 'EL PAL DE SORTIDA ES ' + this._paldejugada;
          this.basaSortidaGuanyador === '' ? this.basaSortidaGuanyador = "Jugador de sortida tu" : this.basaSortidaGuanyador = '', this.basaSortidaGuanyador = "Jugador de sortida tu";
          this._valor = val;
          this._punt = punt;
          this._palo = pal
          this.showCard(this._iniciPartidaHelper.jugador_1_tu.cards, 'tu', val, punt, pal, this.rem);
          // this.remove();
        } else {
          this.showCard(this._iniciPartidaHelper.jugador_1_tu.cards, 'tu', val, punt, pal, this.rem);
          // this.remove();
        }
      })
    }
  }

  showCard(player, position, value, punt, pal, removedcard) {
    player.splice(removedcard, 1);
    //Check and reset count
    this.count == 4 ? this.count = 1 : this.count += 1;
    this.winner[position] = parseInt(punt);
    this.userSelected = document.getElementById(position);
    this.userSelected.innerHTML === '' ? this.userSelected.innerHTML = value : this.userSelected.innerHTML = '', this.userSelected.innerHTML = value;
    this._cardHelper.setAttributes(this.userSelected, {
      'data-card': value,
      'class': 'tapetejugada carta __' + pal
    })
    console.log(this.userSelected);
    this.nextHandSelect(this.count, position, value, punt, pal)
  }

  nextHandSelect(count, position, value, punt, pal) {
    if (count < 4) {
      switch (position) {
        case 'tu':
          this.nextHand(this._iniciPartidaHelper.jugador_3_dreta.cards, 'dreta', value, punt, pal)
          break;
        case 'dreta':
          this.nextHand(this._iniciPartidaHelper.jugador_4_dalt.cards, 'dalt', value, punt, pal)
          break;
        case 'dalt':
          this.nextHand(this._iniciPartidaHelper.jugador_2_esquerra.cards, 'esquerra', value, punt, pal)
          break;
      }
    } else {
      this.andTheWinnerIs();
    }
  }
  nextHand(user, position, value, punt, pal) {
    console.log('USERNEXTHAND: ', user)
    setTimeout(() => {
      this.startPlay(user, position, value, punt, pal)
    }, 2000);
  }

  startPlay(user, position, value, punt, pal) {
    var newCard, _removecard, randomVal, randomValAndPal, _val;
    var cartaguanyadora = false;
    //Crear primera posibilitat
    newCard = user.filter((el) => {
      if (el.pal == this._paldejugada && el.puntuacio > punt) {
        return (el.pal == this._paldejugada && el.puntuacio > punt)
      } else {
        if (el.pal == this._paldejugada && el.puntuacio <= punt) {
          return (el.pal == this._paldejugada && el.puntuacio <= punt)
        } else if (el.pal == this._triomf && el.puntuacio > punt) {
          return (el.pal == this._triomf && el.valor == value)
        }
      }
    });

    //Crear segona posibilitat basat en la primera
    for (var w = 0; w < newCard.length; w++) {
      if (newCard[w].puntuacio > this._punt) {
        newCard = newCard.filter((el) => { return (el.puntuacio > punt) })
        cartaguanyadora = true;
      } else if (newCard[w].puntuacio < this._punt && newCard[w].pal == this._palo) {
        newCard = newCard.filter((el) => { return (el.puntuacio < this._punt && el.pal == this._palo) })
      } else if (newCard[w].pal != this._palo && newCard[w].pal == this._triomf && newCard[w].puntuacio == this._punt) {
        newCard = newCard.filter((el) => { return (el.pal != this._palo && el.pal == this._triomf) })
      }
    }
    //De las cartes seleccionades segons probabilitat, escollir una
    randomVal = Math.floor(Math.random() * newCard.length);
    randomValAndPal = Math.floor(Math.random() * user.length)
    _val = newCard[randomVal]
    if (_val) { //Cartes del mateix pal
      if (cartaguanyadora) {
        this._valor = _val.valor;
        this._punt = _val.puntuacio;
        this._palo = _val.pal
      }
      _removecard = user.indexOf(_val);
      this.showCard(user, position, _val.valor, _val.puntuacio, _val.pal, _removecard);
    } else { //cap carta seleccionada
      _val = user[randomValAndPal];
      _removecard = user.indexOf(_val);
      this.showCard(user, position, _val.valor, _val.puntuacio, _val.pal, _removecard);
    }
  }

  // Escollir guanyador ::TODO Refactor this!!
  andTheWinnerIs() {
    this.premi = this.winner.dreta + this.winner.tu + this.winner.esquerra + this.winner.dalt;
    if (this._triomf == 'butifarra') {
      this.premi = (this.premi * 2) + 1;
    }
    if (this.winner.tu > this.winner.dreta && this.winner.tu > this.winner.esquerra && this.winner.tu > this.winner.dalt) {
      this.flagMeWinner = true;
      this.teamOne += this.premi;
      this.teamOne += 1;
    } else if (this.winner.dreta > this.winner.tu && this.winner.dreta > this.winner.esquerra && this.winner.dreta > this.winner.dalt) {
      this.sortidaDeCartaGuanyadora(this._iniciPartidaHelper.jugador_3_dreta)
      this.teamTwo += this.premi;
      this.teamTwo += 1;
    } else if (this.winner.esquerra > this.winner.tu && this.winner.esquerra > this.winner.dreta && this.winner.esquerra > this.winner.dalt) {
      this.sortidaDeCartaGuanyadora(this._iniciPartidaHelper.jugador_2_esquerra)
      this.teamTwo += this.premi;
      this.teamTwo += 1;
    } else {
      this.sortidaDeCartaGuanyadora(this._iniciPartidaHelper.jugador_4_dalt)
      this.teamOne += this.premi;
      this.teamOne += 1;
    }
    this.winner = {};
    setTimeout(() => {
      this._cardHelper.cleanTapete();
      this.penalitzacio = ""
    }, 3000)
    this.puntuacioTeamA === '' ? this.puntuacioTeamA = "Puntuacio equip A " + this.teamOne : this.puntuacioTeamA = '', this.puntuacioTeamA = "Puntuacio equip A " + this.teamOne;
    this.puntuacioTeamB === '' ? this.puntuacioTeamB = "Puntuacio equip B " + this.teamTwo : this.puntuacioTeamB = '', this.puntuacioTeamB = "Puntuacio equip B " + this.teamTwo;
  }
  sortidaDeCartaGuanyadora(user: UserConfig) {
    console.log('USERUSER: ', user)
    this.flagMeWinner = false;
    if (user.cards.length != 0) {
      setTimeout(() => {
        let firstcard:PilotConfig = user[Math.floor(Math.random() * user.cards.length)];
        this._valor = firstcard.valor;
        this._punt = firstcard.puntuacio;
        this._palo = firstcard.pal;
        this._paldejugada = firstcard.pal;
        this.seleccionatBasa = 'EL PAL DE SORTIDA ES ' + this._paldejugada;
        this.showCard(user.cards, user.position, firstcard.valor, firstcard.puntuacio, firstcard.pal, user.cards.indexOf(firstcard))
        this.basaSortidaGuanyador === '' ? this.basaSortidaGuanyador = "Jugador de sortida " + user.position : this.basaSortidaGuanyador = '', this.basaSortidaGuanyador = "Jugador de sortida " + user.position
      }, 4000)
    } else {
      if (this.teamOne >= 101 || this.teamTwo >= 101) {
        this.teamOne >= 101 ? alert('GAME OVER! TeamOne (tu i dalt) GUANYADORS!!') : alert('GAME OVER! TeamTwo (esquerra i dreta) GUANYADORS!!');
        // novaPartida.style.display = 'block';
        // novaPartida.addEventListener("click", function(){
        //   cleanInfo();
        //   NewGame();
        // })
      } else {
        switch (user) {
          case this._iniciPartidaHelper.jugador_1_tu:
            this._iniciPartidaHelper.initGame(1)
            break;
          case this._iniciPartidaHelper.jugador_2_esquerra:
            this._iniciPartidaHelper.initGame(2)
            break;
          case this._iniciPartidaHelper.jugador_3_dreta:
            this._iniciPartidaHelper.initGame(3)
            break;
          case this._iniciPartidaHelper.jugador_4_dalt:
            this._iniciPartidaHelper.initGame(4)
            break;
        }
      }
    }
  }
}
