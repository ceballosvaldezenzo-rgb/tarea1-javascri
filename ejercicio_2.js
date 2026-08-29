"use strict";

const readline = require('readline/promises');
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  
  async function sumaa( arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        arreglo.push(num);
        suma=suma+num;

        console.log("ingrese 1 si desea continuar sumando\ningrese 2 si desea dejar de sumar\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar sumando\ningrese 2 si desea dejar de sumar\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }

  async function resta(arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        arreglo.push(num);
        if(cont<=1){ 
        suma=num;
        }else{
            suma=suma-num;
        }
        console.log("ingrese 1 si desea continuar restando\ningrese 2 si desea dejar de restar\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar restando\ningrese 2 si desea dejar de restar\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }
  async function division(arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        if(cont>1){
            while(num<=0||num>suma){
                console.log(`error, ingrese un numero entre 1 y ${suma}`);
                num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
            }
        } else {
            while(num<=0){
                console.log("error, ingrese un numero positivo");
                num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
            }
        }
        arreglo.push(num);
        if(cont<=1){ 
        suma=num;
        }else{
            suma=suma/num;
        }
        console.log("ingrese 1 si desea continuar dividiendo\ningrese 2 si desea dejar de dividirr\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar dividiendo\ningrese 2 si desea dejar de dividir\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }
   async function multi(arreglo){
      let op=1;
      let num=0;
      let cont=1;
      let suma=0;
      

      while(op==1){
        num=Number( await rl.question(`ingrese el ${cont} numero:\n`));
        arreglo.push(num);
        if(cont<=1){ 
        suma=num*1;
        }
        else{
           suma=suma*num; 
        }
        console.log("ingrese 1 si desea continuar multiplicando\ningrese 2 si desea dejar de multiplicar\n");
        op=Number(await rl.question(''));
        while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea continuar restando\ningrese 2 si desea dejar de restar\n");
            op=Number(await rl.question(''));
        }
        if(op==1){
          cont=cont+1;  
        }
    }
      return suma;
  }

  async function main(){
    let op=0;
    let resultado=0;
    let arreglo=[];
    console.log("===BIENVENIDOS AL MENU CALCULATOREE===\n");
    console.log("Segun lo que desee introduzca un numero\n");
    
    while(op!=5){
     console.log("1-Para sumar\n");
     console.log("2-Para resta\n");
     console.log("3-Para dividir\n");
     console.log("4-Para multiplicar\n");
     console.log("5-Para salir\n");
     op=Number(await rl.question(''));

     while(op<1||op>5){
        console.log("Error ingresa un numero entre 1 y 5");
        console.log("1-Para sumar");
        console.log("2-Para resta");
        console.log("3-Para dividir");
        console.log("4-Para multiplicar");
        console.log("5-Para salir");
        op=Number(await rl.question(''));
     }
    
     switch(op){
        case 1:
             resultado=await sumaa(arreglo);
             console.log("\nLa suma de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 2:
            resultado=await resta(arreglo);
             console.log("\nLa resta de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 3:
              resultado=await division(arreglo);
             console.log("\nLa division sucesiva de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 4:
             resultado=await multi(arreglo);
             console.log("\nLa multiplicacion de:\n");
             for(let i=0;i<arreglo.length;i++){
              console.log(arreglo[i]);
             }
             console.log(`da como resultado:${resultado}\n`);
             arreglo = [];
            break;
        case 5:
            console.log("gracias por usar la calcu,lo esperamos pronto");
            break;                
     }
    }
     rl.close();
  }
 
main();

