var timer = null;
function timerF(){

    if(timer===ull){
        timer = setInterval(Decoration,500);
    }
    else {
        clearInterval(timer);
        timer = null;
    }
}

function Decoration() {
    let a = document.getElementById("ta");

            a.style.fontSize = "24pt"
            document.getElementById("ta").innerHTML = a;


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