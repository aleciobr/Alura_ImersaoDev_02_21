function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);
    //Converter em real
    var valorReal = valorDolar * 5;

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$ " + valorReal
    elementoValorConvertido.innerHTML = valorConvertido
    //converter em bitcoin
    var valorBit = valorDolar * 0.000021;

    var elementoValorConvertido2 = document.getElementById("valorConvertido2")
    var valorConvertido2 = "O resultado em Bitcoin é " + valorBit
    elementoValorConvertido2.innerHTML = valorConvertido2

    var valorLib = valorDolar * 0.72;

    var elementoValorConvertido3 = document.getElementById("valorConvertido3")
    var valorConvertido3 = "O resultado em Libra Esterlina é " + valorLib
    elementoValorConvertido3.innerHTML = valorConvertido3

    var valorIen = valorDolar * 109.58;

    var elementoValorConvertido4 = document.getElementById("valorConvertido4")
    var valorConvertido4 = "O resultado em Iene japonês é " + valorIen
    elementoValorConvertido4.innerHTML = valorConvertido4
}