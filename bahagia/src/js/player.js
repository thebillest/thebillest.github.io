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
             }.bind2(this), 5000)
       });
    });
});

// iOS Fix
Function.prototype.bind2 = function(parent) {
      var f = this;
      var args = [];
  
      for (var a = 1; a < arguments.length; a++) {
          args[args.length] = arguments[a];
      }
  
      var temp = function() {
          return f.apply(parent, args);
      }
  
      return(temp);
  }