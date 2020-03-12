
const module = function() {
    var name = document.getElementById("actName").value;
    var balance = document.getElementById("bal").value;
    var AccountList= [];
    var Attc;
    create();


         function create(){
            Attc = {AccountName: name, AccountBalance: balance};
            AccountList.push(Attc);
            return display();
        }
        function  display() {
         let ft = document.getElementById("t");

         for(Attc in AccountList){
             ft.value  = "Account Name:\t" + Attc.AccountName + "\t" + "Account Balance:\t" + Attc.AccountBalance + "\n";
         }
        }
};

window.onload = function() {
    document.getElementById("add").onclick = module;
};