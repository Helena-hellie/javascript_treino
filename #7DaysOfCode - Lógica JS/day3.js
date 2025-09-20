//3/7: Fluxo de decisão

/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área
 escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, 
uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, 
continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a 
linguagem inserida.*/

contador = 1;
const nome = prompt("Olá! Qual é o seu nome? ");
const area = prompt(`${nome}, para qual área você deseja seguir?\n1 para FRONT-END, 2 para BACK-end:`);

if (area == 1) {
    const front = prompt("Que legal que você é do Front-end! Você deseja aprender React ou Vue?\nDigite 1 para REACT e 2 para VUE: ");
} else{
    const back = prompt("Que legal que você é do Back-end! Você deseja aprender C# ou Java?\nDigite 1 para C# e 2 para JAVA: ");
}

const seguir_area = prompt(`Que legal! Você deseja seguir essa área mesmo ${nome}? ou deseja se tornar Fullstack?\nDigite sim ou não`);
if ((seguir_area == sim) || (seguir_area == Sim) || (seguir_area == SIM)) {
    alert(`QUE ÓTIMO! Isso vai ser muito bom para você ${nome}`);
}if ((seguir_area == não) || (seguir_area == Não) || (seguir_area == NÃO)) {
    alert(`Ok ok. É escolha sua mas eu recomendo você pensar em ser um Fullstack ${nome}. É bom. Mas não obrigatório então sinta-se a vontade :)`);
}

while (contador != 0){
    contador = ("Tem alguma tecnologia que você gostaria de se especializar ou de conhecer?\n Se não tiver nenhuma, digite 0") 
    alert("Que legal!")
}
