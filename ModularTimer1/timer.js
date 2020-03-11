let timer = null;
const clicker =  function () {
    console.log("clicker");
    if (timer === null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }

    function rudy() {
        console.log("rudy");
        document.getElementById("demo").innerHTML += "Rudy!";
    }
};
window.onload = function () {
    document.getElementById("bn").onclick = clicker;
};


