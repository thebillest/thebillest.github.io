// Play button, on-click callback (only allows one click)
$('#play-theater').one('click', function(e){

  // Fade out on click
  $("#play-theater").fadeOut(800, function() {

       // Remove play div
       $(this).remove();

       // Show actors
       $('#actors').fadeIn('slow', function () {
             // Call to theater.js AFTER fadeIn finishes
             startTheater();
       });
    });
});