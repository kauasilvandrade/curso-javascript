let numerosUsuario = [];
let select = document.getElementById('select');
let checagem = document.getElementById('checagemLista');

// ADICIONAR NÚMERO AO SELECT
function adicionarNumero() {

    // PEGAR ENTRADA DO USUÁRIO
    let inputNumero = document.getElementById('numero');
    let numero = Number(inputNumero.value);
    
    // ANALISAR SE O NÚMERO ESTÁ NA LISTA
    let estaNaLista = analisarNumeroVetor(numero)
    
    if (numero < 1 || numero > 100 || estaNaLista == true) {
        
        window.alert('Valor invalido ou já encontrado na lista.')
        
    } else {

        // CRIAR OPTION NO SELECT
        let option = document.createElement('option');
        option.innerText = `Valor ${numero} adicionado.`;
        select.appendChild(option)

        // ADICIONAR AO VETOR
        numerosUsuario.push(numero);
        checagem.innerHTML = " ";
        inputNumero.value = " ";
    }

}

// ANALISAR SE O NÚMERO JÁ ESTÁ NA LISTA
function analisarNumeroVetor(numero) {

    for (let i = 0; i < numerosUsuario.length; i++) {
        if (numero == numerosUsuario[i]) {
            return true;
        }
    }

}

// MOSTRAR CHECAGEM DE LISTA
function checagemLista() {
    
    if (numerosUsuario.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        
        let totalCadastrados = numerosUsuario.length
        let maiorValor = 0;
        let soma = 0;
        let menorValor = null
    
        for (let i = 0; i < numerosUsuario.length; i++) {
    
            if (numerosUsuario[i] > maiorValor) {
                maiorValor =  numerosUsuario[i]
            }
    
            if (menorValor == null || menorValor > numerosUsuario[i]) {
                menorValor = numerosUsuario[i]
            }
    
            soma += numerosUsuario[i]
    
        }
    
        let media = soma / numerosUsuario.length
    
        checagem.innerHTML = `<br>Ao todo, temos ${totalCadastrados} números cadastrados.<br>`
        checagem.innerHTML += `<br>O maior valor informado foi ${maiorValor}.<br>`
        checagem.innerHTML += `<br>O menor valor informado foi ${menorValor}.<br>`
        checagem.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
        checagem.innerHTML += `<br>A média dos valores digitados é ${media.toFixed(2)}.<br>`

    }
    
}