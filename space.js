function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorKm = parseFloat(valor);

    var valorLuz = valorKm * 299792458;

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Luz é " + valorLuz + " m/s"
    elementoValorConvertido.innerHTML = valorConvertido
}