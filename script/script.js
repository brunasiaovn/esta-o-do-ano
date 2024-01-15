function estação() {
    let mês = prompt('Digite o mês em extenso (ex: Junho)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) {
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'OUTONO'
            break

        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'INVERNO'
            break

        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'PRIMAVERA'
            break

        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estação = 'INVERNO'
            break
            default: 
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <strong><mark>${mês}</mark></strong>, estamos na estação <strong><mark>${estação}</mark></strong></p>`
}
