
//Questao 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // Imprime o valor de SOMA ao final do processamento

//Questao 2
function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;

  while (b <= numero) {
    if (b === numero) {
      return true; // O número pertence à sequência de Fibonacci
    }
    let temp = b;
    b = a + b;
    a = temp;
  }

  return false; // O número não pertence à sequência de Fibonacci
}


// Exemplo de uso:
const numero = 21; // Número a ser verificado
if (verificaFibonacci(numero)) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}


/* 
Questao 3 - Completando a sequência lógica:
a) 1, 3, 5, 7, 9
b) 2, 4, 8, 16, 32, 64, 128
c) 0, 1, 4, 9, 16, 25, 36, 49
d) 4, 16, 36, 64, 100
e) 1, 1, 2, 3, 5, 8, 13
f) 2, 10, 12, 16, 17, 18, 19, 20

Questao 4 - Para descobrir qual interruptor controla cada lâmpada:
Ligue um interruptor e aguarde alguns minutos.
Desligue esse interruptor e ligue outro interruptor.
Entre na sala. A lâmpada acesa corresponde ao primeiro interruptor, a lâmpada apagada e quente corresponde ao segundo interruptor, e a lâmpada fria corresponde ao terceiro interruptor.
*/

//Questao 5
function inverteString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}



// Exemplo de uso:
const minhaString = "Olá, mundo!";
const stringInvertida = inverteString(minhaString);
console.log(stringInvertida);
