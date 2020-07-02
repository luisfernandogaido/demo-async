import { ajax } from '../../core/js.js';

function agendamento () {
  setTimeout(function () {
    console.log('isso aconteceu depois de 2 segundos');
  }, 2000);
  console.log('isso aconteceu antes');
}

function loadFuncionarios () {
  ajax('../api/funcionarios.php', null, function (text) {
    const funcionarios = JSON.parse(text);
    console.log(funcionarios);
  });
}

function rodaFolha () {
  ajax('../api/funcionarios.php', null, function (text) {
    const funcionarios = JSON.parse(text);
    const n = funcionarios.length;
    ajax('../api/folha-pagamento.php', 'n=' + n, function (text) {
      const r = JSON.parse(text);
      const totalDolares = r.total_dolares;
      ajax('../api/conversor-reais.php', 'dolares=' + totalDolares, function (text) {
        const r = JSON.parse(text);
        console.log('Total em reais: ' + r.reais);
      });
    });
  });
}

document.getElementById('b-timeout').addEventListener('click', agendamento);
document.getElementById('b-funcionarios').addEventListener('click', loadFuncionarios);
document.getElementById('b-folha-pagamento').addEventListener('click', rodaFolha);