import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardHelper } from '../helpers/card.helper';
// import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CardHelper]
})
export class HomePage {

  jugadorSortida: string;
  public jugador_1_tu: any;
  public jugador_2_esquerra: any;
  public jugador_3_dreta: any;
  public jugador_4_dalt: any;

  public jugadorDeInici:string;
  public triomfPals:any;
  public _triomf: string;
  public pal: string;
  public seleccioInit: boolean = true;
  public pal_seleccionat: string;
  public pal_posicio: string;

  constructor(public navCtrl: NavController, public _cardHelper: CardHelper) {
    this.repartirCartaInitial();
  }

  repartirCartaInitial() {
    let sortida = ['oros', 'espasses', 'copes', 'bastos'],
      cartaDeSortida = this._cardHelper.pilot.slice(Math.floor(Math.random() * 48))[0];

    this._cardHelper.shuffle(sortida);

    this.jugador_1_tu = sortida[0];
    this.jugador_2_esquerra = sortida[1];
    this.jugador_3_dreta = sortida[2];
    this.jugador_4_dalt = sortida[3];


    this._cardHelper.shuffle(this._cardHelper.pilot);

    cartaDeSortida = cartaDeSortida.pal;
    console.log('cartaDeSortida: ', cartaDeSortida);

    this.sortidaInitial(cartaDeSortida);

  }

  sortidaInitial(pal) {
    switch (pal) {
      case this.jugador_1_tu: {
        this.initGame(1);
        break;
      }
      case this.jugador_2_esquerra: {
        this.initGame(2);
        break;
      }
      case this.jugador_3_dreta: {
        this.initGame(3);
        break;
      }
      case this.jugador_4_dalt: {
        this.initGame(4);
        break;
      }
    }
  }

  initGame(numb) {

    this.jugadorSortida = 'jugador numero ' + numb;
    this._cardHelper.shuffle(this._cardHelper.pilot)
    //Distribueix cartes
    this.jugador_1_tu = this._cardHelper.pilot.slice(0, 12);
    this._cardHelper.ordenarCartesPerValor(this.jugador_1_tu);
    this.jugador_2_esquerra = this._cardHelper.pilot.slice(12, 24);
    this._cardHelper.ordenarCartesPerValor(this.jugador_2_esquerra);
    this.jugador_3_dreta = this._cardHelper.pilot.slice(24, 36);
    this._cardHelper.ordenarCartesPerValor(this.jugador_3_dreta);
    this.jugador_4_dalt = this._cardHelper.pilot.slice(36, 48);
    this._cardHelper.ordenarCartesPerValor(this.jugador_4_dalt);

    if (numb == 1) this.repartirAndEscollir(this.jugador_1_tu, 'tu')
    if (numb == 2) this.repartirAndEscollir(this.jugador_2_esquerra, 'esquerra')
    if (numb == 3) this.repartirAndEscollir(this.jugador_3_dreta, 'dreta')
    if (numb == 4) this.repartirAndEscollir(this.jugador_4_dalt, 'dalt')


    //  setTimeout(function(){
    //    myCards();
    //  },4000)
  }

  repartirAndEscollir(user, position){
    user == this.jugador_4_dalt ? this.jugadorDeInici = 'company' : this.jugadorDeInici = 'contrari'
    if(user != this.jugador_1_tu){
      let counts = {};
      user.forEach((x)=> {
        counts[x.pal] = (counts[x.pal] || 0)+1;
        if(counts[x.pal] >= 4 ){
          this.createTriomfSign(x.pal, position)
        }
      });
    //  sortidaDeCartaGuanyadora(user, position)
    }
  }

  palSeleccionat(palseleccionat){
    this.pal =  palseleccionat;
    this.createTriomfSign(this.pal, 'tu')
  }

  createTriomfSign(pal, position){
    this.seleccioInit = false;
    this.pal_seleccionat = 'TRIOMF ESCOLLIT PER JUGADOR ' + position;
    this.pal_posicio = 'EL TRIOMF ES: ' + pal;
    this._triomf = this.pal;
 }
}
