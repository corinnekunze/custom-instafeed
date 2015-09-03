 // Instagram feed

 (function($) {

  $.fn.instaFeed = function( options ) {
    var element = this;

    var settings = $.extend( {}, $.fn.instaFeed.defaults, options );

    return element.each( function() {
      if (settings.apiUrl) {
        grabFeed(element, settings);
      } else {
        console.log('API must be passed in.');
      }
    });
  };

  $.fn.instaFeed.defaults = {
    apiUrl : false,
  };

  grabFeed = function( element, settings ) {
    $.getJSON( settings.apiUrl, function(feed, status) {
      // success is implied here
      var feedArray = [];
      feed.data.forEach(function(entry) {
        $(element).append(
          "<div class='instagram-photo'><img src='" + entry.images.standard_resolution.url + "'/></div>"
          );
      });
    })
    .fail(function() {
      console.log('Failed to retrieve data!');
    });
  };

}(jQuery));



