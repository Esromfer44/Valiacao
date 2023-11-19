const element = (v) => document.getElementById(v)
const candidatoList = (i) => element(`candidato${i}`).classList

const votos = [0, 0, 0, 0]


function votar(op) {

    element(`voto${op}`).innerText = (++votos[op]).toString()

    const max = Math.max(...votos)
    votos.map((v, i) =>
        v === max ? candidatoList(i).add("vencedor") : candidatoList(i).remove("vencedor")
    )
}

