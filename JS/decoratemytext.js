var timer = null;
window.onload = function () {
    document.getElementById("b1").onclick = timerF;
};
window.onload = function () {
    document.getElementById("pig").onclick = PigLatin;
};
window.onload = function () {
    document.getElementById("ck").onclick = bling;
};
window.onload = function () {
    document.getElementById("mak").onclick = Malkovic;
};
function timerF(){

    if(timer===null){
        timer = setInterval(Decoration,500);
    }
    else {
        clearInterval(timer);
        timer = null;
    }
}

function Decoration() {

    var a = document.getElementById("ta");
    var b = parseInt(a.style.fontSize) + 2;
    if(!b) {
        b = 14;
    }
    console.log(b);
    a.style.fontSize = b + "pt";
    document.getElementById("ta") .innerHTML = a;

 }
function bling(){
    let a = document.getElementById("ck");
    let b = document.getElementById("ta");
    if(a.checked ==true){
        b.style.fontWeight = "bold";
        b.style.color = "green";
        b.style.textDecoration = "underline";
    }
    if(a.checked == false){
        b.style.fontWeight = "none";
        b.style.color = "black";
        b.style.textDecoration = "none";
    }
}

function PigLatin() {
    var myText = document.getElementById('ta');
    var ws = myText.value.split(' ').map(function(s){
        if(isConsonantWord(s)){ return formatConsonat(s) ;}
        else{
            if(isVowelWord(s)){ return formatVowel(s); }
            else{
                return s ;
            }
        } }).reduce(function(t ,s ){ return t + ' ' + s},'');
    myText.value = ws;
}
function Malkovic() {
    var myText = document.getElementById('ta');
    var words = myText.value.split(' ').map(function(s){
        if(s.length >=5)
        {
            return 'Malkovich';
        }
        else{
            return s;
        }
    }).reduce(function(t,s){
        return t + ' ' + s;
    },'');
    myText.value = words;
}

function pixelsToPoints(pixels){
    return parseInt(pixels)*72/96;
}
function isVowel(s){
    var arr = ['a','e','i','o','u','A','E','I','O','U'];
    return arr.includes(s);
}
function isConsonantWord(word){
    return word.charCodeAt(0) >=65 && word.charCodeAt(0) <=122 && !isVowel(word.charAt(0));
}
function isVowelWord(word){
    return isVowel(word.charAt(0));
}
function formatConsonat(s){
    return s.substr(1,s.length) + s.charAt(0) + '-ay';
}
function formatVowel(s){
    return s + '-ay';
}