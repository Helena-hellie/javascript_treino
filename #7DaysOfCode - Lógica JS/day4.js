/* Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso.
 Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número 
que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar.
Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. 

DICA

Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento 
em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:
Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
Onde, claro, você terá que alterar os valores de mínimo e  máximo pelos limites inferior e superior, respectivamente.

Você pode ler mais sobre a Math.random() nesse site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random?utm_medium=email&_hsenc=p2ANqtz-9GjstCj_NituYreXazysNSRHTWf0X7k6a4j4JNd4fmQYXqERQ9CHGd6OUgjfGZQndvn9x0Xn1-SQQEpkrnWy1oIKh7Jg&_hsmi=231359753&utm_content=231359753&utm_source=hs_automation
*/
