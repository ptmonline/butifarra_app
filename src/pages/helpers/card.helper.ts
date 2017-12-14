import { Injectable } from "@angular/core";


@Injectable()
export class CardHelper {

    //Baralla
    public pilot: any[] = [
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

    constructor() { }

    //Barreixa cartes
    shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //Ordenar cartes per pal
    ordenarCartesPerValor(user) {
        user.sort((a, b) => {
            if (a.pal < b.pal) return -1;
            if (a.pal > b.pal) return 1;
            return 0;
        })
    }
    

    //Setting attributes helper
    setAttributes(el, attrs) {
        for (let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    //Netejar cartes de la taula
       cleanTapete(){
           console.log('calling this');
         let cleaner, palsId = ['dreta', 'esquerra', 'dalt', 'tu'];
         for (let t = 0; t < palsId.length; t++){
           cleaner = document.getElementById(palsId[t]);
           cleaner.innerHTML = '';
           cleaner.setAttribute('data-card' , '')
           cleaner.setAttribute('class' , 'tapetejugada carta')
         }
       }

    //Netejar informacio de partida
    //   cleanInfo(){
    //     triomfPos.innerHTML = '';
    //     triomfSel.innerHTML = '';
    //     basaSortidaGuanyador.innerHTML = '';
    //     puntuacioTeamA.innerHTML ='';
    //     puntuacioTeamB.innerHTML ='';
    //     seleccionatBasa.innerHTML='';
    //   }
}