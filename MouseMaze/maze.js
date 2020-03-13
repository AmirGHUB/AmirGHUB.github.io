$(document).ready(function () {
   let start = 0;
   let end  = 0;

   $("#start").click( function () {
    start = 1;
    end = 0;
    if($(".boundary").backgroundColor === "red"){
        $(".boundary").css("background-color", "white");
    }
    if(start ===1){


    }

   });
   $("#end").mouseover( function () {
     start = 0;
     end = 1;

     if($(".boundary").backgroundColor !== "red"){
         $("#status").val("You Won");
     }
   });



});