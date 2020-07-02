import { timeoutPromise, ajaxPromise } from '../../core/js.js';

async function agendamento () {
  console.log('isso aconteceu antes');
  await timeoutPromise(2000);
  console.log('isso aconteceu depois de 2 segundos');
}

async function loadFuncionarios () {
  try {
    const text = await ajaxPromise('../api/funcionarios.php');
    const funcionarios = JSON.parse(text);
    console.log(funcionarios);
  } catch (e) {
    alert(e);
  }
}

async function rodaFolha () {
  let r, text;
  text = await ajaxPromise('../api/funcionarios.php');
  const funcionarios = JSON.parse(text);
  const n = funcionarios.length;
  text = await ajaxPromise('../api/folha-pagamento.php', 'n=' + n);
  r = JSON.parse(text);
  const totalDolares = r.total_dolares;
  text = await ajaxPromise('../api/conversor-reais.php', 'dolares=' + totalDolares);
  r = JSON.parse(text);
  console.log('Total em reais: ' + r.reais);
}

document.getElementById('b-timeout').addEventListener('click', agendamento);
document.getElementById('b-funcionarios').addEventListener('click', loadFuncionarios);
document.getElementById('b-folha-pagamento').addEventListener('click', rodaFolha);