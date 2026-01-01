/* const num = document.getElementsByClassName("um");
const botao_calc = document.getElementById("botao_calc");

botao_calc.onclick  = function() {
    for(let i = 0; i <= 10; i++) {
        document.getElementsByClassName("saida").innerHTML = "O cálculo resultou em: <strong>" + um + "X" + i + "=" + um * i + "</strong>";
        alert("deucerrto");
    }
}; */

const um = document.getElementById('um');
const botao_calc = document.getElementById('botao_calc');
const saida = document.getElementById('saida');

botao_calc.onclick = function () {

    if (um.value === "") {
        /*alert('Digite um número para realizar o cálculo!');*/
        saida.innerHTML = "Digite um número para realizar o cálculo!";
        return;
    } else if (um.value < 0){
        saida.innerHTML = "Digite um número positivo para realizar o cálculo!";
    } else {
        const valor = Number(um.value);
        saida.innerHTML = ""; // limpa antes de calcular
        for (let i = 0; i <= 10; i++) {
            saida.innerHTML += `
                <p>${valor} x ${i} = ${valor * i}</p>
            `;
        }
    }
};
