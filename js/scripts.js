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

var totalMovie = [lalaLand, lionKing, princessBride];





//front-end logic
$(document).ready(function() {
  $(".movieTimes").append(lalaLand);
  $("form").submit(function(event) {
    event.preventDefault();

  });
  totalMovie.forEach(function(movie) {
      $(".movieListing").append("<h3>" + movie.movieTitle +"</h3>"+ "<li>" +  movie.time + "</li>");
  });
});
