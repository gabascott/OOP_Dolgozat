class ZeneModel{
    #zeneTomb = [];

    constructor(){
        console.log("ZeneModel");
    }

    adatModosit(adat){
        console.log("Modelben módosít!", adat);
    }

    /*adatTorol(){
        console.log("Modelben töröl!", adat);
    }*/

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#zeneTomb = data.zene;
                myCallBack(this.#zeneTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default ZeneModel;