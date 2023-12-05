function contar() {

    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Contando... <br>`;
    
    for (let i = inicio; i <= fim; i = ++passo) {
        let span = document.createElement('span');
        span.innerHTML = `👉${i} `
        resultado.appendChild(span)
    }
    
    resultado.innerText += '🏁'
    console.log(inicio)
    console.log(fim)
    console.log(passo)

}