
var produtos = JSON.parse(localStorage.getItem('produtos'))

console.log(produtos)

var tabela = document.getElementById('table')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var vnome = produto['Nome do Produto']
    var vns = produto['Nº de série']
    var vtipo = produto['Tipo']
    var vqtd = produto['Quantidade']
    var vcar = produto['Caracteristica']

    var tr = table.insertRow(1)
    var td = [tr.insertCell(0), tr.insertCell(1), tr.insertCell(2), tr.insertCell(3), tr.insertCell(4)]
    td[0].innerHTML = vnome
    td[1].innerHTML = vns
    td[2].innerHTML = vqtd
    td[3].innerHTML = vtipo
    td[4].innerHTML = vcar


};


