//iniciamos capturando o conteúdo dos span de hora, minuto e segundo com o comando document.querySelector. Depois usa a propriedade setInterval do JavaScript para definir um intervalo de tempo em que determinado código deve ser executado.
//Usando o método Date(). para obter a data e hora atual de 1 em 1 segundo. Também usamos getHours(), getMinutes() e getSeconds() para capturarem as horas, minutos e segundos atuais, de forma separada, a partir da data obtida.  
//e por ultimo modificamos o conteúdo exibido na tela usando innerHTML e executamos a função formatTime. Essa função realiza um tratamento dos valores, atribuindo um zero em valores menores que 10, como em 9:40:22, que passaria a ser 09:40:22.

const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secunds = date.getSeconds();

    hour.innerHTML = `${formatTime(hours)}`;
    min.innerHTML = `${formatTime(minutes)}`;
    sec.innerHTML = `${formatTime(secunds)}`;
}, 1000);

function formatTime(time){
    return time < 10 ? "0" + time : time;

}
