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



//front-end logic
$(document).ready(function() {
  var chosenMovie = [];

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
    chosenMovie.push(this.textContent);
    // this.parent().children(":first-child");
    //movie-title
    chosenMovie.push($(this).parent().children(":first-child").text());

    $(".movieListing").hide();
    $(".agePrompt").show();
    $(".agePrompt").append("");
  });

  $("form").submit(function(event) {
    event.preventDefault();
    chosenMovie.push($("#ageSelect").val());

  });




});
