const formatador = (data) => {
  return {
    dia: {
      numerico: dayjs(data).format('DD'),
      semana: {
        curto: dayjs(data).format('ddd'),
        longo: dayjs(data).format('dddd'),
      }
    },
    mes: dayjs(data).format('MMMM'),
    hora: dayjs(data).format('HH:mm')
  }
}

const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-07 10:00"),
  finalizada: true
}

//lsita, array, vetor
let atividades = [
  atividade,
  {
    nome: 'Academia em grupo',
    data: new Date("2024-07-08 12:00"),
    finalizada: false
  },
  {
    nome: 'Gaming sesion',
    data: new Date("2024-07-09 16:00"),
    finalizada: true
  },
]

//atividades = []

const criarItemDeAtividade = (atividade) => {

  let input = `
  <input 
  onchange="concluirAtividade(event)"
  value="${atividade.data}"
  type="checkbox"
  `

  if(atividade.finalizada){
    input += ' checked'
  }

  input += '>'

  const formatar = formatador(atividade.data)

  return `
  <div>
    ${input}
    <span>${atividade.nome}</span>
    <time>
      ${formatar.dia.semana.longo}, 
      dia ${formatar.dia.numerico} 
      de ${formatar.mes} 
      às ${formatar.hora}h</time>
  </div>
  
  `
  //<time>${atividade.data}</time>  dava para usar lá dentro tbm
}

const atualizarListaDeAtividades = () => {
  const section = document.querySelector('section') //ele está pegando um elemento e atribuindo ao section
  section.innerHTML = ''

  //verificar se a minha lista está vazia
  if(atividades.length == 0){
    section.innerHTML = '<p>Nenhuma atividade cadastrada.<\p>'
    return
  }

  for (let atividade of atividades) {
    section.innerHTML +=  criarItemDeAtividade(atividade) //modificando o conteúdo html que existe no section. Tudo aquilo do html ele trocou por alo
  }
}

atualizarListaDeAtividades()


const salvarAtividade = (event) => {
  event.preventDefault()
  const dadosFormulario = new FormData(event.target)

  const nome = dadosFormulario.get('atividade')
  //alert(nome) para teste
  const dia = dadosFormulario.get('dia')
  const hora = dadosFormulario.get('hora')
  const data = `${dia} ${hora}`

  const novaAtividade = {
    nome,
    data,
    finalizada: false
  }

  const atividadeExiste = atividades.find((atividade) => {
    return atividade.data == novaAtividade.data
  })

  if(atividadeExiste) {
    return alert('Dia/hora não disponível')
  }

  atividades = [novaAtividade, ...atividades]
  atualizarListaDeAtividades()
} // essa função basicamente está dizendo para o programa não enviar o formulário quando clicar no botão de salvar

const criarDiasSelecao = () => {
  const dias = [ //obviamente são todos exemplos dos dias de férias ou viajem
    "2024-02-28",
    "2024-02-29",
    "2024-03-01",
    "2024-03-02",
    "2024-03-03",
  ]

  let diasSelecao = ' '

  for(let dia of dias) {
    const formatar = formatador(dia)
    const diaFormatado = `
    ${formatar.dia.numerico} de
    ${formatar.mes}
    `
    diasSelecao += `
    <Option value="${dia}">${diaFormatado}</Option>
    `
  }


  document
  .querySelector('select[name="dia"]')
  .innerHTML = diasSelecao

}
criarDiasSelecao()

const criarHorasSelecao = () => {
  let horasDisponiveis = ''

  for(let i = 6; i < 23; i++) {//começa às 6 da manhã, por isso o 6
    const hora = String(i).padStart(2, '0')
    horasDisponiveis += `<option value="${hora}:00">${hora}:00</option>`
    horasDisponiveis += `<option value="${hora}:30">${hora}:30</option>`
  } 

  document.querySelector('select[name="hora"]')
  .innerHTML = horasDisponiveis
}
criarHorasSelecao() 

const concluirAtividade = (event) => {
  const input = event.target
  const  dataDesteInput = input.value

  const atividade = atividades.find((atividade) => {
    return atividade.data = dataDesteInput
  })

  if(!atividade) {
    return
  }

  atividade.finalizada = !atividade.finalizada //invetendo a info.. Se era verdadeiro, agora é falso, se era verdadeiro, agora é falso. Se foi encontrado faz a troca, se não, return, não faz nada
}
