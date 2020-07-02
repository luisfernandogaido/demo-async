function ajax (url, dados, callback, metodo = 'GET') {
  let body;
  if (typeof dados == 'string') {
    body = new URLSearchParams(dados);
  } else if (dados instanceof HTMLFormElement) {
    metodo = 'POST';
    body = new FormData(dados);
  } else if (dados instanceof FormData) {
    metodo = 'POST';
    body = dados;
  } else if (dados instanceof URLSearchParams) {
    body = dados;
  } else if (dados instanceof Object) {
    body = new URLSearchParams(dados);
  }
  if (metodo == 'GET' && body instanceof URLSearchParams) {
    url = url + '?' + body.toString();
    body = null;
  }
  const xhr = new XMLHttpRequest();
  xhr.onload = ev => {
    const cur = ev.currentTarget;
    if (callback) callback(cur.responseText, cur.status);
  };
  xhr.open(metodo, url, true);
  xhr.send(body);
}

function timeoutPromise (tempo) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, tempo);
  });
}

function ajaxPromise (url, dados) {
  return new Promise(function (resolve, reject) {
    ajax(url, dados, function (text) {
      resolve(text);
    });
  });
}

export { ajax, ajaxPromise, timeoutPromise };
