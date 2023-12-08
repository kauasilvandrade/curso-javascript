function contar() {

    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    
    if (inicio.length == 0) {
        resultado.innerHTML = `Impossível contar!`;
    } else {

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `Contando... <br>`;
        
        for (let i = Number(inicio); i <= Number(fim); i = i + Number(passo)) {
    
            if (passo.length == 0) {
                alert('Passo inválido! Considerando PASSO 1')
                
                for (let i = Number(inicio); i <= Number(fim); i++) { 

                    let span = document.createElement('span');
                    span.innerHTML = `👉${i} `;
                    resultado.appendChild(span);

                }

                break;

            } else {
    
                let span = document.createElement('span');
                span.innerHTML = `👉${i} `;
                resultado.appendChild(span);
    
            }
        }
    
        resultado.innerText += '🏁'
        
    }

    
}