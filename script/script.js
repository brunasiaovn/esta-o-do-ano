function estação() { // sim é posivel usar acentuação
    let mês = prompt('Digite o mês em extenso (ex: Setembro)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letas de uma string para maiusculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'INVERNO'
             break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
             break 
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
           estação = 'OUTONO'
             break
        default:
            estação = 'INDEFINIDA'
             break      
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}
// Sugestão de melhoria: refaça esse programa para que ele aceite tanto o mês por extenso quanto o número do mês.