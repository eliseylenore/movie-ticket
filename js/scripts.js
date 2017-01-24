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
    // alert(this.textContent);
    // alert(this.parent().children(":first-child"));
    console.log($(this).parent().children(":first-child").text());
    var title = ($(this).prev("h3"));
    // console.log(title.textContent)
    // debugger;
    $(".movieListing").hide();
    $(".agePrompt").show();
    $(".agePrompt").append("");
  });

  // totalMovie.forEach(function(movie) {
  //     $(".movieListing").append("<h3>" + movie.movieTitle +"</h3>"+ "<li>" +  movie.time + "</li>");
  // });


});
