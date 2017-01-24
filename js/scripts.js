//back-end logic

function movieTicket(age, time, movieTitle) {
  this.age = age;
  this.time = time;
  this.movieTitle = title;
}

movieTicket.prototype.calculatePrice = function() {
  return parseInt(age) + parseInt(time) + parseInt(movieTitle)

}






//front-end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var age = $("#age").val();
    var time = $("#time").val();
    var movieTitle = $('#movie-title').val();

  });
});
