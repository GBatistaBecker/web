document
    .getElementById("form-animal")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const especie = document.getElementById("especie").value;
        const idade = document.getElementById("idade").value;
        const habitat = document.getElementById("habitat").value;

        const novoAnimal = { nome, especie, idade, habitat };

        let animais = JSON.parse(localStorage.getItem("animais")) || [];
        animais.push(novoAnimal);
        localStorage.setItem("animais", JSON.stringify(animais)); 

        document.getElementById("form-animal").reset();
        listarAnimais();
    });

function listarAnimais() {
    const container = document.getElementById("lista-animais");
    container.innerHTML = "";

    const animais = JSON.parse(localStorage.getItem("animais")) || [];
    if (animais.length === 0) { 
        container.innerHTML = "<p>Nenhum animal cadastrado</p>";
        return;
    }

    animais.forEach((animal) => {
        const div = document.createElement("div");
        div.className = "animal border rounded p-2 mb-2 bg-light";
        div.innerHTML = `<strong>Animal: ${animal.nome}</strong><br>
                         Espécie: ${animal.especie}<br>
                         Idade: ${animal.idade}<br>
                         Habitat: ${animal.habitat}`;
        container.appendChild(div);
    });
}

document.getElementById("resetar").addEventListener("click", function () {
    if (confirm("Tem certeza que deseja apagar todos os cadastros?")) {
        localStorage.removeItem("animais");
        listarAnimais();
    }
});

window.addEventListener("DOMContentLoaded", listarAnimais);