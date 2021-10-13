class Pokemon{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
    showMore(){
        console.log("Pokemon name: "+this.name+"\nPokemon type: "+this.type+"\nPokemon color: "+this.color+'\n')
    }
}

const pokemon1 = new Pokemon ('Pikatchu','electric','yellow');
const pokemon2 = new Pokemon ('Eevee','normal','brown');
const pokemon3 = new Pokemon ('Squirtle','water','blue');

pokemon1.showMore();
pokemon2.showMore();
pokemon3.showMore();


