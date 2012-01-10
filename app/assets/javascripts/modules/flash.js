// flash ---------------------------------------------------------------------
// ajax flash messages

app.flash = {
  init: function(){
    var $flash = $("#flash.ajax")
    $flash.find("a.close").live("click", function(e){
      $(this).closest('div').fadeOut()
      e.preventDefault()
    })
  },
  show:function(message){
    if ($("#flash.ajax")[0]){
      $("#flash.ajax").append(message)
    } else {
      var html = $("<div id='flash' class='ajax'>"+message+"</div>")
      $("body").append(html)
    }
  }
}
