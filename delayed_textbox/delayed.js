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
