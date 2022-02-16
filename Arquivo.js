/*
let num1 = 10;
const num2 = 20;

    console.log(num1 == num2 || typeof num2 == 'string'); 
        O typeof está comparando se a variável num2 é igual a uma string, neste caso retornará "false"
*/

let cor = "verde";

switch (cor) {
    case "verde":
        console.log ("Siga");
    break;

    case "amarelo":
        console.log ("Preste Atenção");
    break;

    case "vermelho":
        console.log ("Pare");
    break;
    
    default: 
        console.log ("nenhuma das alternativas foram selecionadas")        
}