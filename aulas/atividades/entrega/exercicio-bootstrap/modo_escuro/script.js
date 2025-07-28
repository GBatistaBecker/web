document.getElementById("btn-toggle").addEventListener("click", function () {
    const body = document.body;
    const btn = this;
    const titulo = document.querySelector(".titulo");

    const modoEscuro = body.classList.toggle("bg-dark");
    body.classList.toggle("text-light");
    body.classList.toggle("bg-light");
    body.classList.toggle("text-dark");

    if (modoEscuro) {
        btn.textContent = "Modo claro";
        btn.classList.remove("btn-dark");
        btn.classList.add("btn-light");
        titulo.textContent = "Modo escuro";
    } else {
        btn.textContent = "Modo escuro";
        btn.classList.remove("btn-light");
        btn.classList.add("btn-dark");
        titulo.textContent = "Modo claro";
    }
});