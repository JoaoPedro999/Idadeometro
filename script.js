var idade;
var nome;

function age(event) {
    
    event.preventDefault();
    idade = parseFloat(document.getElementById("idade").value);
    nome = document.getElementById("nome").value;

    if (idade < 11) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome + " é uma criança!";
    } else if (idade >= 12 && idade <= 20) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome + " é um adolescente!";
    } else if (idade >= 21 && idade <= 65) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome +" é um adulto!";
    } else if (idade > 65) {
        document.getElementById("resultado").innerHTML = "Sua idade é: " + idade + "<br/>" + nome +" é um idoso!";
    }
}
