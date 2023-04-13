function verificacao() {
idade = window.prompt('Qual é a sua idade?')
nome = document.getElementById('nome')
senha = document.getElementById('senha')

if (idade < 18) {
    window.alert('Nossa loja trabalha apenas para maiores de 18 anos, você não podera efetuar compras neste site.')
}
else{
    window.alert('Seja bem vindo, aproveite sua compra!')
}
}