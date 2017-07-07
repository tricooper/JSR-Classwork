// Lets create a movie app that will accept a search and return a list of results
/*

1) Accept a query from the user and get results. (All via AJAX... duhhhh)
2) I want it to display the results by outputting the movie posters as image tags
3) Upon interacting with the movie poster (click, mouseover, etc..) you should display 4 extra pieces 
  of information about that movie. I don't care which
4) Bonus: Display a total of 8 pieces of information about the movie
5) Bonus: Do a type ahead so that the form works as autocomplete. 
6) Bonus: Make it pretty


Example endpoint: http://www.omdbapi.com/?i=tt3896198&apikey=ada5c403

*/

'use strict';
var MovieApp = {

};

// This is the same as document ready btw.
$(document).ready(function() {
  $('#movie_form').submit(function(event) {
          event.preventDefault();
          var input = $('#movie_search').val();
          var request = $.ajax({
              url: 'http://www.omdbapi.com/',
              data: {s:input, apikey: 'ada5c403' },
              success: MovieApp.showMovies
          });

  });

  MovieApp.compileHTML = function (movieHTML){
    var template = $('#movies-template').html(); 
    var templateScript = Handlebars.compile(template);
    return templateScript(movieHTML); 
  }

    MovieApp.showMovies = function(data) {
      $('#movieList').append('<ul id="moviesul">');
      $('#movieList').append('</ul><button id = "exit"> Back To All </button>');

      $.each(data.Search, function(index, value){

        var imageObj = {
          movieYear: value.Year,
          movieTitle: value.Title,
          moviePoster: value.Poster,
          imdbID : value.imdbID
        };
        var movieHTML = MovieApp.compileHTML(imageObj);
        $('#moviesul').append(movieHTML);

      });
    }

    $('body').on('click', '.image', function(){
       var searchID = $(this).data('id');
       console.log(searchID);
       MovieApp.getMoreInfo(searchID);
       $(this).parent().attr('id', 'overlay');
       // don't display other movies
       $(this).parent().siblings().css('display', 'none');
       // change photo display to block
       $(this).siblings('p').css('display', 'block');
       $('#exit').css('display', 'block'); 
       // get more information
       var movieId = $(this).value

     });



         $('body').on('click', '#exit', function(event) {
        // remove overlay ID from element
          $('#movieList ul').children().removeAttr("id");
        // show the other movies again
          $('#movieList ul').children().css('display', 'block');
        // don't show the movie title
          $('.movieTitleClass').css('display', 'none');
          $('#exit').css('display', 'none');           
       });

    //more info function
    MovieApp.getMoreInfo = function (searchID) {
          var request = $.ajax({
              url: 'http://www.omdbapi.com/',
              data: {i: searchID, apikey: 'ada5c403' },
              //success: MovieApp.showMovies
          });

    }







}); 