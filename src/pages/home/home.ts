import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardHelper } from '../helpers/card.helper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CardHelper]
})
export class HomePage {

  cards: string;
  public user1Sortida: any;
  public user2Sortida: any;
  public user3Sortida: any;
  public user4Sortida: any;

  public user1: any;
  public user2: any;
  public user3: any;
  public user4: any;

  constructor(public navCtrl: NavController, public _cardHelper: CardHelper) {
    this.cards = this._cardHelper.pilot[0].pal;
    this.repartirCartaInitial();
  }

  repartirCartaInitial(){
    var sortida = ['oros', 'espasses', 'copes', 'bastos'],
        cartaDeSortida = this._cardHelper.pilot.slice(Math.floor(Math.random() * 48))[0];

    this._cardHelper.shuffle(sortida);

    this.user1Sortida = sortida[0];
    this.user2Sortida = sortida[1];
    this.user3Sortida = sortida[2];
    this.user4Sortida = sortida[3];

    this._cardHelper.shuffle(this._cardHelper.pilot);

    cartaDeSortida = cartaDeSortida.pal;
    console.log('cartaDeSortida: ', cartaDeSortida)

    if (cartaDeSortida === this.user1Sortida) this.initGame(1)
    if (cartaDeSortida === this.user2Sortida) this.initGame(2)
    if (cartaDeSortida === this.user3Sortida) this.initGame(3)
    if (cartaDeSortida === this.user4Sortida) this.initGame(4)

  }

  initGame(numb){
    this._cardHelper.shuffle(this._cardHelper.pilot)
    //Distribueix cartes
    this.user1 = this._cardHelper.pilot.slice(0, 12);
    this._cardHelper.ordenarCartesPerValor(this.user1);
    this.user2 = this._cardHelper.pilot.slice(12, 24);
    this._cardHelper.ordenarCartesPerValor(this.user2);
    this.user3 = this._cardHelper.pilot.slice(24, 36);
    this._cardHelper.ordenarCartesPerValor(this.user3);
    this.user4 = this._cardHelper.pilot.slice(36, 48);
    this._cardHelper.ordenarCartesPerValor(this.user4);

    console.log('USER1: ',this.user1);
    console.log('USER2: ',this.user2);
    console.log('USER3: ',this.user3);
    console.log('USER4: ',this.user4);

    // if (numb == 1) repartirAndEscollir(user1, 'tu')
    // if (numb == 2) repartirAndEscollir(user2, 'esquerra')
    // if (numb == 3) repartirAndEscollir(user3, 'dreta')
    // if (numb == 4) repartirAndEscollir(user4, 'dalt')


    //  setTimeout(function(){
    //    myCards();
    //  },4000)
  }

}
