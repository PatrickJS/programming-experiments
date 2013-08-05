/*
 * We have a textbox where we get the info with the following code:
 *
 *   var tb = $(".textbox");
 *
 * We want to get the text of that box, but only 600 ms after the person stops
 * typing in that box. How would you implement it?
 */

$(function() {
  var api = {};
  var $textbox = $('#textbox');
  var $content = $('#textboxContents');


  $textbox.on('keyup', function(e) {

    setTimeout(function() {
      var query = $textbox.val()
      $content.text(query)
    }, 600);

    return false;
  });


});
