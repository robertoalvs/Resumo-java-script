function multa() {

    let velocidade = document.getElementById('inum')
    let div = document.getElementById('resultado')
    let input1 = Number(velocidade.value)

    let valor = input1

    div.innerHTML += `<p> Sua velocidade atual é de: <strong>${valor}Km/h</strong> </p>`

    if (valor < 61) {

        div.innerHTML += `<p>Velocidade permitida <strong>"APROVADO!!!"</strong> </p>`

        div.style.color = 'green'
    }

    else {
        div.innerHTML += `<p> Velocidade não permitida <strong>"MULTADO"</strong> </p>`

        div.style.color = 'red'
    }
}

