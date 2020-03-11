const AccountList= [];
let Attc;
const module =( function() {
    let Account = function () {
        let name = document.getElementById("actName").value;
        let balance = document.getElementById("bal").value;
        Attc = {AccountName: name, AccountBalance: balance};
        AccountList.push(Account);

        return display;
    };
    let display = function () {
         let ft = document.getElementById("t");
         for(Account in AccountList){
             ft.value  = "Account Name:" + Attc.AccountName + " " + "Account Balance:" + Attc.AccountBalance;
         }

    };
    return Account;
})();
window.onload = function() {
    document.getElementById("add").onclick = module;
};