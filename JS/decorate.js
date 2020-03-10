
var timer = null;
window.onload = function () {
    document.getElementById("pig").onclick = PigLatin;
    document.getElementById("ck").onchange = bling;
    document.getElementById("mak").onclick = Malkovic;
    document.getElementById("b1").onclick = timerF;
};

function timerF(){
    console.log("timer")

    if(timer===null){
        timer = setInterval(Decoration,500);
    }
    else {
        clearInterval(timer);
        timer = null;
    }
}

function Decoration() {
    console.log("decoration")
   let a = document.getElementById("ta");
    let fontSize = parseInt(a.style.fontSize);
    if(!fontSize)
        fontSize = 12;

   let b = parseInt(fontSize) +2;

   a.style.fontSize = b + "pt";

   // document.getElementById("ta").innerHTML = a;

 }
function bling(){

    console.log("bling");
    let a = document.getElementById("ck");
    let b = document.getElementById("ta");
    let c = document.getElementById("body");
    if(a.checked ==true){
        b.style.fontWeight = "bold";
        b.style.color = "green";
        b.style.textDecoration = "underline";
        c.style.backgroundImage = "url(img/hundred-dollar-bill.jpg)";

    }
    if(a.checked ==false){
        b.style.fontWeight = "none";
        b.style.color = "black";
        b.style.textDecoration = "none";
        c.style.backgroundImage = null;
    }
}

function PigLatin() {

    let vowels = [a,e,i,o,u];
    let b = document.getElementById("ta").innerHTML.split(" ");
    for(a in b){
        if(b[a].startsWith("a","e","i","o","u")){
            b[a] += "ay";
        }
        else {
            b[a].shift();
            b[a]+= "ay";
        }
    }

}
function Malkovic() {
    const myText = document.getElementById('ta');
    myText.value = myText.value.split(' ').map(function (s) {
        if (s.length >= 5) {
            return 'Malkovich';
        } else {
            return s;
        }
    }).reduce(function (t, s) {
        return t + ' ' + s;
    }, '');
}
