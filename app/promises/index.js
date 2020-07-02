import { timeoutPromise, ajaxPromise } from '../../core/js.js';

function agendamento () {
  timeoutPromise(2000).then(function () {
    console.log('isso aconteceu depois de 2 segundos');
  });
  console.log('isso aconteceu antes');
}

function loadFuncionarios () {
  ajaxPromise('../api/funcionarios.php').then(function (text) {
    const funcionarios = JSON.parse(text);
    console.log(funcionarios);
  });
}

function rodaFolha () {
  ajaxPromise('../api/funcionarios.php').then(function (text) {
    const funcionarios = JSON.parse(text);
    const n = funcionarios.length;
    return ajaxPromise('../api/folha-pagamento.php', 'n='+n);
  }).then(function (text) {
    const r = JSON.parse(text);
    const totalDolares = r.total_dolares;
    return ajaxPromise('../api/conversor-reais.php', 'dolares=' + totalDolares);
  }).then(function (text) {
    const r = JSON.parse(text);
    console.log('Total em reais: ' + r.reais);
  });
}

document.getElementById('b-timeout').addEventListener('click', agendamento);
document.getElementById('b-funcionarios').addEventListener('click', loadFuncionarios);
document.getElementById('b-folha-pagamento').addEventListener('click', rodaFolha);