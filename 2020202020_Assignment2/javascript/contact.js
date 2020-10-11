
$(document).ready(function(){
  /*Sliding effect*/
  $("#flip").click(function(){
    $("#down").slideToggle();
  });

  /*Blinking text*/
  $("#blink_text").click(function()
       { 
         setInterval(function(){
           $("#blink").fadeOut(500);
           $("#blink").fadeIn(500);
          },10);
        });
 
});
