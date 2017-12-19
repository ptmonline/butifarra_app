import { Injectable } from "@angular/core";
import { CardHelper } from "./card.helper";

@Injectable()
export class IniciPartidaHelper {

    public jugadorSortida: string;
    public jugador_1_tu: CardGameClient.UserConfig = <CardGameClient.UserConfig>{};
    public jugador_2_esquerra: CardGameClient.UserConfig = <CardGameClient.UserConfig>{};
    public jugador_3_dreta: CardGameClient.UserConfig = <CardGameClient.UserConfig>{};
    public jugador_4_dalt: CardGameClient.UserConfig = <CardGameClient.UserConfig>{};

    public jugadorDeInici: string;
    public triomfPals: any;
    public _triomf: string;
    public pal: string;
    public seleccioInit: boolean = true;
    public pal_seleccionat: string;
    public pal_posicio: string;

    constructor(private _cardHelper: CardHelper) {

    }

    repartirCartaInitial() {
        let sortida: string[] = ['oros', 'espasses', 'copes', 'bastos'],
            cartaDeSortida: CardGameClient.PilotConfig = this._cardHelper.pilot.slice(Math.floor(Math.random() * 48))[0];

        this._cardHelper.shuffle(sortida);

        this.jugador_1_tu.sortida = sortida[0];
        this.jugador_2_esquerra.sortida = sortida[1];
        this.jugador_3_dreta.sortida = sortida[2];
        this.jugador_4_dalt.sortida = sortida[3];

        this._cardHelper.shuffle(this._cardHelper.pilot);

        cartaDeSortida.pal = cartaDeSortida.pal;
        console.log('cartaDeSortida: ', cartaDeSortida.pal);

        this.sortidaInitial(cartaDeSortida.pal);

    }

    sortidaInitial(pal: string) {
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
    }

    initGame(numb: number) {

        this.jugadorSortida = 'jugador numero ' + numb;
        this._cardHelper.shuffle(this._cardHelper.pilot)
        //Distribueix cartes
        this.jugador_1_tu.cards = this._cardHelper.pilot.slice(0, 12);
        this._cardHelper.ordenarCartesPerValor(this.jugador_1_tu);
        this.jugador_2_esquerra.cards = this._cardHelper.pilot.slice(12, 24);
        this._cardHelper.ordenarCartesPerValor(this.jugador_2_esquerra);
        this.jugador_3_dreta.cards = this._cardHelper.pilot.slice(24, 36);
        this._cardHelper.ordenarCartesPerValor(this.jugador_3_dreta);
        this.jugador_4_dalt.cards = this._cardHelper.pilot.slice(36, 48);
        this._cardHelper.ordenarCartesPerValor(this.jugador_4_dalt);

        if (numb == 1) this.repartirAndEscollir(this.jugador_1_tu);
        if (numb == 2) this.repartirAndEscollir(this.jugador_2_esquerra);
        if (numb == 3) this.repartirAndEscollir(this.jugador_3_dreta);
        if (numb == 4) this.repartirAndEscollir(this.jugador_4_dalt);

    }

    repartirAndEscollir(user: CardGameClient.UserConfig) {
        console.log('USER: ', user);
        user.cards == this.jugador_4_dalt.cards ? this.jugadorDeInici = 'company' : this.jugadorDeInici = 'contrari'
        if (user.cards != this.jugador_1_tu.cards) {
            let counts = {};
            user.cards.forEach((x) => {
                counts[x.pal] = (counts[x.pal] || 0) + 1;
                if (counts[x.pal] >= 4) {
                    this.createTriomfSign(x.pal, user.position)
                }
            });
            //  sortidaDeCartaGuanyadora(user, position)
        }
    }

    palSeleccionat(palseleccionat) {
        this.pal = palseleccionat;
        this.createTriomfSign(this.pal, 'tu')
    }

    createTriomfSign(pal: string, position: string) {
        this.seleccioInit = false;
        this.pal_seleccionat = 'TRIOMF ESCOLLIT PER JUGADOR ' + position;
        this.pal_posicio = 'EL TRIOMF ES: ' + pal;
        this._triomf = this.pal;
    }
}