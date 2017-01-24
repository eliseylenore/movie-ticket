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






//front-end logic
$(document).ready(function() {
  for (i = 0; i < moviesArray.length; i++) {
    $(".movieListing").append("<h3>" + moviesArray[i].movieTitle +"</h3>");
    for (show = 0; show < moviesArray[i].time.length; show++) {
      $(".movieListing").append("<li>" +  moviesArray[i].time[show] + "</li>");
    }
  }

  $("li").click(function() {
    $(this).addClass("red");
  });

  // totalMovie.forEach(function(movie) {
  //     $(".movieListing").append("<h3>" + movie.movieTitle +"</h3>"+ "<li>" +  movie.time + "</li>");
  // });


});
