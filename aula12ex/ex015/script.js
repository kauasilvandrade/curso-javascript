function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let ano = document.getElementById('ano')
    let res = document.querySelector('div#res')

    if (ano.value.length == 0 || ano.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novemente!')
    } else {
        let sex = document.getElementsByName('radSex')
        let idade = anoAtual - ano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'img/foto-bebe-h.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'img/foto-jovem-h.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'img/foto-adulto-h.png')                
            } else {
                // IDOSO
                img.setAttribute('src', 'img/foto-idoso-h.png')

            }
        } else if (sex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'img/foto-adulto-f.png')                
            } else {
                // IDOSO
                img.setAttribute('src', 'img/foto-idoso-f.png')

            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}