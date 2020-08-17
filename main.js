

function ponto(element) {
    if ((element.value).length == 3) {
        element.value += '.'
    }


}

var produtos = JSON.parse(localStorage.getItem('produtos'));

if (produtos == null) {
    produtos = []
}

function act(e) {

    produtos.push({
        'Nome do Produto': document.getElementById('label_prod').value,
        'Nº de série': document.getElementById('input_serie').value,
        'Tipo': document.getElementById('option').value,
        'Quantidade': document.getElementById('quantidade').value,
        'Caracteristica': document.getElementById('desc').value
    });

    var produtos_json = JSON.stringify(produtos)

    localStorage.produtos = produtos_json



}
