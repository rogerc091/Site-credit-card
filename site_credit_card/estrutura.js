

function escrever(){
    var name = document.getElementById("name");
    var caixa = document.getElementById("disabledTextInput");

    caixa.addEventListener("keyup", function(){
        name.innerHTML = caixa.value;
    });

    var numero = document.getElementById("paragrafo_card");
    var valor = document.getElementById("disablednumbertInput");

    valor.addEventListener("keyup", function(){
        numero.innerHTML = valor.value;
    });

    var campo = document.getElementById("inputZip");
    var cvc = document.getElementById("cvc");

    campo.addEventListener("keyup", function(){
        cvc.innerHTML = campo.value;
    });

    var input1 = document.getElementsByTagName("select")[0].value;
    var input2 = document.getElementsByTagName("select")[1].value;
    input3 = input1 + input2;

    var campo2 = document.getElementById("date");

    input1.addEventListener("keyup", function(){
        campo2.innerHTML = input1.value

    })
}


