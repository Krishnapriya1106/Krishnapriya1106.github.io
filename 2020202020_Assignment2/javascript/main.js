/*text-effect*/
   var i=0;
   var txt='Hi!!! I am Krishnapriya Panicker, first year M.Tech student in Computer Science and Information Security at International Institute of Information Technology, Hyderabad (IIITH) . '+
           'My interest lies in the field of Machine Learning, Deep Learning and Natural Language Processing.  ' + 'Other than these technical areas I am also very fond of Classical Dance especially Bharatnatyam.';
   var speed=50;  


   function textvisual() 
   {
      if(i < txt.length)
      {	
         
         document.getElementById("myself").innerHTML += txt.charAt(i);
         i++;
         setTimeout(textvisual, speed);
      }
    }

/*carousel-effect*/
$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });	
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function(){
    $("#myCarousel").carousel("next");
  });
});	