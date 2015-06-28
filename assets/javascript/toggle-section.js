(function($) {
  $(document).ready(function(){
    $('.section-toggle').click(function(e) {
      var $el = $(e.target)

      $el.toggleClass('active')

      if ($el.hasClass('active')) {
        $el.html('Hide Past Projects')
      }
      else {
        $el.html('See Past Projects')
      }
    })
  })
})(jQuery)
