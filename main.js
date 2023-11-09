class Hero {
    constructor(name, type = "desconhecido", age = 0, ataque = null){
        this.name = name
        this.age = age
        this.type = type
        this.ataque = ataque

        if (this.type === "mago"){
            this.ataque = "magia"
        } else if (this.type === "guerreiro"){
            this.ataque = "espada"
        } else if (this.type === "monge"){
            this.ataque = "artes marciais"
        } else if (this.type === "ninja"){
            this.ataque = "shuriken"
        }
    }
    
    atacar (){
        console.log(`O ${this.type} atacou usando ${this.ataque}.`)
    }
}

let heroi = new Hero("Lucas", "guerreiro", 20)
heroi.atacar()

