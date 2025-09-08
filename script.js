console.log('script conectado');

function mostrarMensagem() {
  var nome = document.getElementById('inputNome').value;

  var mensagem =
    'Seja bem vindo ao meu Site, ' + nome + '! Que bom que você veio.';

  document.getElementById('displayMensagem').textContent = mensagem;
}
