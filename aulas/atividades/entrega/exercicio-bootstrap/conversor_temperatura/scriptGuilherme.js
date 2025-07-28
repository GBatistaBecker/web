document.querySelector(".form-conversor").addEventListener("submit", function (event){
    event.preventDefault();

    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const unidade = document.getElementById("unidade").value;
    let resultado;

    if (unidade === "celsius") {
        resultado = (temperatura * 9/5) + 32;
        alert(`${temperatura} °C tem sua conversão para ${resultado.toFixed(2)}°F`);
    } else {
        resultado = (temperatura - 32) * 5/9;
        alert(`${temperatura}°F tem sua conversão para ${resultado.toFixed(2)}°C`)
    }
    
})