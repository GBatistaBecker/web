localStorage.setItem("nome","Guilherme");

const nomeGuardado = localStorage.getItem("nome");
console.log(nomeGuardado);

const nomeRemovido = localStorage.getItem("nome");
console.log(nomeRemovido);

localStorage.clear();
const nomeLimpo = localStorage.get("nome");
console.log(nomeLimpo);