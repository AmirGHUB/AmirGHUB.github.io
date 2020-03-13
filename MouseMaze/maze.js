$(document).ready(function () {
   let start = 0;
   let end  = 0;

   $("#start").click( function () {
    start = 1;
    end = 0;
    $(".boundary").css("background-color","white");

    if(start ===1){
       $(".boundary").mouseover( function () {
            $(".boundary").css("background-color","red");
            $("#status").replaceWith("<h1>you lost plaese try again by pressing S</h1>");
       });
        if($(".boundary").css("background-color")!= "red"){
            $("#end").click( function () {
                $("#status").replaceWith("<h1>you won play again by pressing S</h1>");
                $(".boundary").css("background-color","white");
            })
        }
        // $("#body").mouseover( function () {
        //         //     $(".boundary").css("background-color","red");
        //         //     $("#status").replaceWith("<h1>you lost plaese try again by pressing S / don't go outside the maz</h1>");
        //         // });
    }
   });
});