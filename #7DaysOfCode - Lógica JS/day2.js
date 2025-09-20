/*Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Para imprimir e receber valores, você pode tanto usar console.log, prompt e alert, quanto usar HTML e CSS caso já tenha conhecimento nessas duas tecnologias.

Você pode usar a estrutura condicional if para resolver o Exercício Opcional. Algo como:

if (resposta == 1){
     dê a resposta positiva
}
if (resposta == 2){
     dê a resposta negativa
}

Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.

O alert() é usado para mostrar uma mensagem simples ao usuário.

Exemplo:

alert(“Olá, pessoal!”);

Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

Exemplo:
const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg); */

/* Use alert() para notificações simples ao usuário que não requerem interação específica.
Use console.log() para depuração, onde você precisa ver valores de variáveis e o fluxo do código sem interromper a execução.
Use prompt() quando precisar que o usuário forneça uma entrada de texto */

const nome = prompt("Qual é o seu nome? ");
const idade = prompt("Qual é a sua idade? ");
const linguagem = prompt("Qual linguagem de programação você está usando? ");

const msgNome = nome;
const msgIdade = idade;
const msgLinguagem = linguagem;
alert(`Seu nome é ${nome}!\nSua idade é ${idade}!\nSua linguagem de programação é ${linguagem}!`);

/* Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens? */

const pergunta = prompt(`Você gosta de estudar ${linguagem}?\nDigite 1 para 'SIM' e 2 para 'NÃO'`); //${linguagem}
if (pergunta == 1){
     alert("Muito bom! Continue estudando e você terá muito sucesso.")  
}
if (pergunta ==2 ){
     alert("Ahh que pena... Já tentou aprender outras linguagens?")
}