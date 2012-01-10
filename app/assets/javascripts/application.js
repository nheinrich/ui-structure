// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require facebox
//= require_self
//= require_tree .

// common JS on the site can be added here, it may call patterns.
// pattern specific JS should be included in a pattern .js file.
// view specific JS should be added to views.js

// app -----------------------------------------------------------------------
// holds all application specific javascript

var app = {};


// app.views -----------------------------------------------------------------
// holds all view specific code for the application, separated by controllers
// and views (if necessary)

app.views = {};


// common modules to be run on the site
$(function(){

  // example
  // app.flash.init();
});
























// app -----------------------------------------------------------------------
// holds all application specific javascript

var app = {};


// app.views -----------------------------------------------------------------
// holds all view specific code for the application, separated by controllers
// and views (if necessary)

app.views = {};


// run on every page ---------------------------------------------------------

$(function(){

  // facebox
  $("a[rel*=facebox]").facebox();  
  $("#facebox").on("click", "a.cancel", function(e){
    $(document).trigger("close.facebox");
    e.preventDefault();
  });

})
