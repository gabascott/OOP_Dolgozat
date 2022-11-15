class ZeneView{
    #elem;
    #adat;
    constructor(elem, adat){
        this.#elem = elem;
        this.#adat = adat;

        this.cim = this.#elem.children("#cim");
        this.eloado = this.#elem.children("#eloado");
        this.db = this.#elem.children("#darab");

        this.setAdat(this.#adat);
    }
    
    setAdat(ertekek){
        this.cim.html(ertekek.cim);
        this.eloado.html(ertekek.eloado);
        this.db.html(ertekek.darab + " db");
    }

    /*kattintasTrigger(action){
        
    }*/
}

export default ZeneView;