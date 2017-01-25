//back-end logic
var moviesArray = [];

function Movie(movieTitle, time) {
  this.time = time,
  this.movieTitle = movieTitle,
  moviesArray.push(this)
}

var lalaLand = new Movie("La La Land", ["10am", "12pm", "3pm", "6pm", "10pm"]);
var lionKing = new Movie("Lion King", ["10am", "12pm", "3pm", "6pm", "10pm"]);
var princessBride = new Movie("Princess Bride", ["10am", "12pm", "3pm", "6pm", "10pm"]);

var newMovies = ["La La Land"];
var child = "Under 10";
var teen = "Under 18";
var adult = "18-65"
var matinee = ["10am", "12pm", "3pm"]

function calculatePrice(time, age, title)  {
  var price = 4;


  if (age === child) {
    price -= 1;
  }
   else if (age === teen) {
    price += 1;
  }
   else if (age === adult) {
    price += 2;
  }
  else {
    price -= 2;
  }

  if (time !== matinee) {
    price += 2;
  }

  if (title === newMovies) {
    price += 2;
  }

  return price;
}



//front-end logic
$(document).ready(function() {
  var chosenMovie = new Movie("", []);
  for (i = 0; i < moviesArray.length; i++) {
    var thisMovie = "";
    thisMovie += "<ul>";
    thisMovie += ("<h3>" + moviesArray[i].movieTitle +"</h3>");
    for (show = 0; show < moviesArray[i].time.length; show++) {
      thisMovie += ("<li>" +  moviesArray[i].time[show] + "</li>");
    }
    thisMovie += "</ul>";
    $(".movieListing").append(thisMovie);
  }

  $("li").click(function() {
    //time
    chosenMovie.time = (this.textContent);
    chosenMovie.movieTitle = ($(this).parent().children(":first-child").text());
    //movie-title
    // chosenMovie.push($(this).parent().children(":first-child").text());

    $(".movieListing").hide();
    $(".agePrompt").show();
    $(".agePrompt").append("");

  });

  $("form").submit(function(event) {
    event.preventDefault();
    chosenMovie.age = ($("#ageSelect").val());

    var finalPrice = calculatePrice(chosenMovie.time, chosenMovie.age, chosenMovie.movieTitle);

    $(".result").append("<h3>You chose " + chosenMovie.movieTitle + " at " + chosenMovie.time + ". Your final price is $" + finalPrice + ".</h3>");
  });
console.log(chosenMovie);

});
