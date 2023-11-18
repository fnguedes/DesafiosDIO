class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  Atacar() {
    switch (this.tipo) {
      case 'Guerreiro':
        console.log(`O ${this.tipo} atacou usando espada`)
        break;

      case 'Mago':
        console.log(`O ${this.tipo} atacou usando magia`)
        break;

      case 'Monge':
        console.log(`O ${this.tipo} atacou usando artes marciais`)
        break;

      case 'Ninja':
        console.log(`O ${this.tipo} atacou usando shurikens`)
        break;
    }
  }

}

var hero = new Hero('Letícia', 24, 'Ninja')

hero.Atacar()