function gerarTabuada() {

    let tabuada = document.getElementById('tabuada')
    tabuada.innerHTML = ""

    let nTabuada = document.getElementById('nTabuada');
    let n = Number(nTabuada.value);

    if (nTabuada.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {

        for (let i = 0; i <= 10; i++) {
            let resTabuada = n * i;
            tabuada.innerHTML += `${n} x ${i} = ${resTabuada}<br>`
        }

    }

}