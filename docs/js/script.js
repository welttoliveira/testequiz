let nomeJogador = "";
let pontos = 0;
// Função para iniciar o quiz
function iniciar() {
  nomeJogador = document.getElementById("nome").value;
    // Verifica se o nome foi preenchido
    if (nomeJogador == "") {
        alert("Por favor, informe seu nome!");
        return; // Impede que o quiz inicie sem nome
    }
  document.getElementById('botaoinicio').style.display='none';
  document.getElementById('pergunta1').style.display='block';
} 

// Função para avançar para a próxima pergunta
function irpara2() {
  // Pergunta 1
  if (!document.querySelector('input[name="questao1"]:checked')){
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  } 
  else if (document.getElementById("q1c").checked) {
    pontos++;
  }
  document.getElementById('irpara2').style.display='none';
  document.getElementById('pergunta2').style.display='block';

}

function irpara3() {
  // Pergunta 2
  if (!document.querySelector('input[name="questao2"]:checked')) {
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  }  
  else if (document.getElementById("q2d").checked) {
    pontos++;
  }
  document.getElementById('irpara3').style.display='none';
  document.getElementById('pergunta3').style.display='block';

}
function irpara4() {
  // Pergunta 3
  if (!document.querySelector('input[name="questao3"]:checked')) {
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  }  
  else if (document.getElementById("q3c").checked) {
    pontos++;
  }
  document.getElementById('irpara4').style.display='none';
  document.getElementById('pergunta4').style.display='block';

}
function finalizar() {
  // Pergunta 4
  if (!document.querySelector('input[name="questao4"]:checked')) {
    alert("Por favor, escolha uma resposta para a pergunta!");
    return;
  }  
  else if (document.getElementById("q4b").checked) {
    pontos++;
  }
  document.getElementById('finalizar').style.display='none';
  document.getElementById('ultimosbotoes').style.display='block';
  alert(nomeJogador + ", você acertou " + pontos + "/4 !");
}

function respostas() {
  // Adiciona a classe bg-success ao elemento pai (label) das respostas corretas
  document.getElementById("q1c").parentElement.classList.add("bg-success"); // Pergunta 1
  document.getElementById("q2d").parentElement.classList.add("bg-success"); // Pergunta 2
  document.getElementById("q3c").parentElement.classList.add("bg-success"); // Pergunta 3
  document.getElementById("q4b").parentElement.classList.add("bg-success"); // Pergunta 4
}

function reiniciar() {
  location.reload(); // Recarrega a página
}
