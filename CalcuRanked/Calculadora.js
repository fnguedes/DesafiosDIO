function Calculadora(vitorias,derrotas){
  valorF=vitorias-derrotas
  if(valorF<=10){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Ferro`)
  }
  else if(valorF<=20){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Bronze`)
  }
  else if(valorF<=50){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Prata`)
  }
  else if(valorF<=80){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Ouro`)
  }
  else if(valorF<=90){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Diamante`)
  }
  else if(valorF<=100){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Lendário`)
  }
  else if(valorF>100){
    console.log(`O Herói tem de saldo de ${valorF} está no nível de Imortal`)
  }
  return valorF
}

Resultado=Calculadora(80,15)//não vejo necessidade de retornar o valor...
