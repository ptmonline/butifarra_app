import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardHelper } from '../helpers/card.helper';
import { IniciPartidaHelper } from '../helpers/inicipartida.helper';
// import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [CardHelper, IniciPartidaHelper]
})
export class HomePage {

  public card: any;
  public tapete: any;;
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

  constructor(public navCtrl: NavController, public _cardHelper: CardHelper, public _iniciPartidaHelper: IniciPartidaHelper) {
    this._iniciPartidaHelper.repartirCartaInitial();
    setTimeout(() => {
      this.myCards();
    }, 4000)
  }

  myCards() {
    for (let x = 0; x < this._iniciPartidaHelper.jugador_1_tu.length; x++) {
      this.card = document.createElement('div');
      this.card.innerHTML = this._iniciPartidaHelper.jugador_1_tu[x].valor;
      console.log(this._iniciPartidaHelper.jugador_1_tu[x])
      this._cardHelper.setAttributes(this.card, {
        'data-pal': this._iniciPartidaHelper.jugador_1_tu[x].pal,
        'data-val': this._iniciPartidaHelper.jugador_1_tu[x].valor,
        'data-punt': this._iniciPartidaHelper.jugador_1_tu[x].puntuacio,
        'class': 'tapetejugada carta __' + this._iniciPartidaHelper.jugador_1_tu[x].pal
      })

      this.tapete = document.getElementById('user1');
      this.tapete.appendChild(this.card);
      this.card.addEventListener('click', () => {
        let val, punt, pal;
        val = this.card.getAttribute('data-val');
        punt = this.card.getAttribute('data-punt');
        pal = this.card.getAttribute('data-pal');
        console.log(val)
        for (let x = 0; x < this._iniciPartidaHelper.jugador_1_tu.length; x++) {
          if (this._iniciPartidaHelper.jugador_1_tu[x].pal == pal && this._iniciPartidaHelper.jugador_1_tu[x].valor == val) {
            let rem = this._iniciPartidaHelper.jugador_1_tu.indexOf(this._iniciPartidaHelper.jugador_1_tu[x])
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
            for (let x = 0; x < this._iniciPartidaHelper.jugador_1_tu.length; x++) {
              if (this._iniciPartidaHelper.jugador_1_tu[x].pal == this._paldejugada || this._iniciPartidaHelper.jugador_1_tu[x].pal == this._triomf) {
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
          // showCard(this._iniciPartidaHelper.jugador_1_tu, 'tu', val, punt, pal, this.rem);
          // this.remove();
        } else {
          // showCard(this._iniciPartidaHelper.jugador_1_tu, 'tu', val, punt, pal, this.rem);
          // this.remove();
        }
      })
    }
  }
}
