 /*
           um programa que conta quantas letras A existem em uma string
           */

 const palavra = 'paralelepipedo';
 let letraEscolhida = "a";
 let contador = 0;

 for (let letra of palavra) {
     if (letra === letraEscolhida) {
         contador++;
     }
 }

 console.log(contador);