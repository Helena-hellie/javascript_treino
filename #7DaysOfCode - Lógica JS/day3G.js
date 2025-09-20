//código do gemini do desafio pq o meu ficou todo errado
const nome = prompt("Olá! Qual é o seu nome?");

let tecnologiaPrincipal = ""; // Variável para guardar a tecnologia escolhida (React, Vue, C# ou Java)

const area = prompt(`${nome}, para qual área você deseja seguir?\n1 para FRONT-END ou 2 para BACK-END:`);

if (area === "1") { // Usamos "===" para comparação estrita e "1" como string, pois prompt sempre retorna string
    const front = prompt("Que legal que você é do Front-end! Você deseja aprender React ou Vue?\nDigite 1 para REACT e 2 para VUE:");
    if (front === "1") {
        tecnologiaPrincipal = "React";
        alert(`Ótima escolha, ${nome}! ${tecnologiaPrincipal} é uma excelente tecnologia para Front-end.`);
    } else if (front === "2") {
        tecnologiaPrincipal = "Vue";
        alert(`Ótima escolha, ${nome}! ${tecnologiaPrincipal} é uma excelente tecnologia para Front-end.`);
    } else {
        alert("Opção inválida para Front-end.");
    }
} else if (area === "2") {
    const back = prompt("Que legal que você é do Back-end! Você deseja aprender C# ou Java?\nDigite 1 para C# e 2 para JAVA:");
    if (back === "1") {
        tecnologiaPrincipal = "C#";
        alert(`Ótima escolha, ${nome}! ${tecnologiaPrincipal} é uma excelente tecnologia para Back-end.`);
    } else if (back === "2") {
        tecnologiaPrincipal = "Java";
        alert(`Ótima escolha, ${nome}! ${tecnologiaPrincipal} é uma excelente tecnologia para Back-end.`);
    } else {
        alert("Opção inválida para Back-end.");
    }
} else {
    alert("Opção de área inválida! Por favor, escolha 1 ou 2.");
}

// Parte 3: Especialização ou Fullstack
const seguir_area = prompt(`Que legal! Você deseja seguir se especializando na área escolhida (${tecnologiaPrincipal}) ou deseja se desenvolver para se tornar Fullstack?\nDigite "sim" para especializar ou "não" para Fullstack.`);

// Convertendo a resposta para minúsculas para facilitar a comparação
const respostaSeguirArea = seguir_area.toLowerCase();

if (respostaSeguirArea === "sim") {
    alert(`QUE ÓTIMO, ${nome}! Isso vai ser muito bom para você se aprofundar em ${tecnologiaPrincipal} e se tornar um(a) especialista.`);
} else if (respostaSeguirArea === "não") {
    alert(`Ok ok. Entendi, ${nome}. Se tornar Fullstack é uma ótima ambição e pode abrir muitas portas!`);
} else {
    alert("Resposta inválida para a pergunta de especialização/Fullstack. Por favor, responda 'sim' ou 'não'.");
}

// Parte 4: Tecnologias adicionais
let continuarPerguntando = true;
while (continuarPerguntando) {
    const tecnologiaAdicional = prompt("Tem mais alguma tecnologia que você gostaria de aprender ou se especializar? (Digite '0' se não tiver mais nenhuma)");

    if (tecnologiaAdicional === "0") {
        continuarPerguntando = false; // Define como false para sair do loop
        alert("Entendido! Sucesso nos seus estudos!");
    } else if (tecnologiaAdicional) { // Verifica se a pessoa digitou algo (não deixou em branco)
        alert(`Que legal! ${tecnologiaAdicional} é uma tecnologia fascinante. Continue explorando e aprendendo!`);
    } else {
        // Caso a pessoa clique em cancelar ou deixe em branco
        alert("Nenhuma tecnologia inserida. Digite '0' para sair ou o nome da tecnologia.");
    }
}

alert("Obrigado por jogar!"); // Mensagem final após o loop