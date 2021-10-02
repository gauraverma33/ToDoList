//Check off todos by clicking
$(document).ready(function () {
   $("ul").on("click", "li", function () {
      if ($(this).css("color") === "rgb(128, 128, 128)") {
         $(this).css("color", 'black');
         $(this).css("text-decoration", 'none');
      }

      else {
         $(this).css("color", 'gray');
         $(this).css("text-decoration", 'line-through');
      }

   });
});

//delete
$(document).ready(function () {
   $("ul").on("click", "span", function (event) {
      $(this).parent().fadeOut(500, function () {
         $(this).remove();
      });
      event.stopPropagation();
   });
});

//add
$(document).ready(function () {
   $("input[type='text'").keypress(function (event) {
      if (event.which === 13) {
         var todotext = ($(this).val());
         $(this).val("");
         $("ul").append("<li class='list-item'><span><i class='fas fa-trash-alt'></i></span> <strong>" + todotext + "</strong> </li>")
      }
   });
   $(".fa-calendar-plus").on("click", function () {
      $("input[type='text'").fadeToggle();
   });
});

// Search
const searchBar = document.getElementById("search-bar");
const listField = document.getElementById("list-field");
const searchBarIcon = document.getElementById("search-icon");
searchBarIcon.addEventListener("click",()=> {
   listField.classList.toggle("display-none");
   searchBar.classList.toggle("display-none");
   searchBarIcon.classList.toggle("active");
});

searchBar.addEventListener("keyup", function (e) {
   let term = e.target.value.toLowerCase();
   let listItems = document.querySelectorAll(".list-item strong");
   let listArr = Array.from(listItems);
   console.log(listArr);

   listArr.forEach(function (list) {
      listText = list.textContent;
      if (listText.toLowerCase().indexOf(term) != -1){
         list.parentElement.style.display = "block";
      }
      else{
         list.parentElement.style.display = "none";
      }
   });
});



