//Check off todos by clicking
$(document).ready(function() { 
   $("ul").on("click", "li", function() {
   	if($(this).css("color") ==="rgb(128, 128, 128)"){
   		$(this).css("color",'black'); 
        $(this).css("text-decoration",'none');
   	}

   	else{
   		$(this).css("color",'gray'); 
        $(this).css("text-decoration",'line-through');
   	}
        
  });
});

//delete
$(document).ready(function() { 
   $("ul").on("click", "span", function(event) {
          $(this).parent().fadeOut(500,function(){
          	$(this).remove();


          });
          event.stopPropagation();
   });
});

//add
$(document).ready(function() { 
   $("input[type='text'").keypress(function(event) {
          if (event.which === 13){
          	var todotext = ($(this).val());
          	$(this).val("");
          	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>")
          }


          });
   $(".fa-calendar-plus").on("click", function(){
   		$("input[type='text'").fadeToggle();

   });
   

 });



