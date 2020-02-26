// Play button, on-click callback (only allows one click)
$('#play-theater').one('click', function(e){

  // Fade out on click
  $("#play-theater").fadeOut(800, function() {

       // Remove play div
       $(this).remove();

       // Show title and svg
       $('#title_story').fadeIn('slow', function () {
             // Call to theater.js AFTER fadeIn finishes
             startTheater();
             
             // Fade in the actors
             setTimeout(function () {
                  $('#actors_story').fadeIn('slow');
             }, 6500)
       });
    });
});