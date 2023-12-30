
// VALORES QUE O USUÁRIO DIGITOU
let numerosUsuario = [];
let select = document.getElementById('select');
let checagem = document.getElementById('checagemLista');

// ANALISAR SE O NÚMERO JÁ ESTÁ NA LISTA
function inVetor(n, v) {
    
    if (v.indexOf(n) != -1) {
        return true;
    } else {
        return false;
    }

}

// ANALISAR SE O NÚMERO QUE O USUÁRIO DIGITOU É UM NÚMERO
function isNumero(n) {
    if (n >= 1 && n <= 100) {
        return true;
    } else {
        return false;
    }
}

// ADICIONAR NÚMERO AO SELECT
function adicionarNumero() {

    // PEGAR ENTRADA DO USUÁRIO
    let inputNumero = document.getElementById('numero');
    let numero = Number(inputNumero.value);

    // SE FOR UM NÚMERO E NÃO ESTIVER NA LISTA
    if (isNumero(numero) && !inVetor(numero, numerosUsuario)) {
        // ADICIONAR AO VETOR
        numerosUsuario.push(numero);
        
        // CRIAR OPTION NO SELECT
        let option = document.createElement('option');
        option.innerText = `Valor ${numero} adicionado.`;
        select.appendChild(option)

        checagem.innerHTML = " ";
        
    } else {
        
        window.alert('Valor invalido ou já encontrado na lista.')
        
    }
    
    inputNumero.value = "";
    inputNumero.focus()
}

// MOSTRAR CHECAGEM DE LISTA
function checagemLista() {
    
    if (numerosUsuario.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        
        let totalCadastrados = numerosUsuario.length
        let maiorValor = numerosUsuario[0]
        let menorValor = numerosUsuario[0]
        let soma = 0;
    
        for (let pos in numerosUsuario) {
            
            if (numerosUsuario[pos] > maiorValor) {
                maiorValor = numerosUsuario[pos]
            }

            if (numerosUsuario[pos] < menorValor) {
                menorValor = numerosUsuario[pos]
            }

            soma += numerosUsuario[pos]
        }
     
        let media = soma / totalCadastrados
        
        checagem.innerHTML = " "
        checagem.innerHTML += `<p>Ao todo, temos ${totalCadastrados} números cadastrados.</p>`;
        checagem.innerHTML += `<p>O maior valor informado foi ${maiorValor}.</p>`;
        checagem.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p>`;
        checagem.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        checagem.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`;

    }
    
}