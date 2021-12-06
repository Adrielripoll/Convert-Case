//Uppercase
const convertUpper = ()=>{
    const valorUpper = document.getElementById("texto").value;
    const conversaoUpper = valorUpper.toUpperCase();
    document.getElementById("texto").value = conversaoUpper;
}

//Lowercase
const convertLower = ()=>{
    const valorLower = document.getElementById("texto").value;
    const conversaoLower = valorLower.toLowerCase();
    document.getElementById("texto").value = conversaoLower;
}

//Alternate case 
var alternateCase = (s)=> {
    var chars = s.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
};

const convertAlt = ()=> {
    const valorAlt = document.getElementById("texto").value;
    const conversaoAlt = alternateCase(valorAlt);
    document.getElementById("texto").value = conversaoAlt;
}

//Capitalized Case
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

const convertCap = ()=> {
    const valorCap = document.getElementById("texto").value;
    const conversaoCap = valorCap.toProperCase();
    document.getElementById("texto").value = conversaoCap;
}

//Inverse Case
var inverseCase = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    return newLetters;
}

const convertInv = ()=> {
    const valorInv = document.getElementById("texto").value;
    const conversaoInv = inverseCase(valorInv);
    document.getElementById("texto").value = conversaoInv;
}


//Botões
var botaoUpper = document.getElementById("upper");
var botaoLower = document.getElementById("lower");
var botaoAlt = document.getElementById("alt");
var botaoCap = document.getElementById("cap");
var botaoInv = document.getElementById("inv");

botaoUpper.addEventListener("click", convertUpper);
botaoLower.addEventListener("click", convertLower);
botaoAlt.addEventListener("click", convertAlt);
botaoCap.addEventListener("click", convertCap);
botaoInv.addEventListener("click", convertInv);

    

