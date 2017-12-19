declare namespace CardGameClient {

    export interface PilotConfig {
        valor:number;
        pal: string;
        puntuacio: number;   
    }
    
    export interface UserConfig {
        cards: Array<PilotConfig>;
        position: string;
        sortida: string;
    }

    export interface ValorJugada {
        val: number;
        punt: number;
        pal: string;
        rem: number;
    }
}