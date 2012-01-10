// dashboard -----------------------------------------------------------------

app.views.dashboard = {};

// note: this file is an example of how the structure can be used to build out
// a complex (view-level) need for JS. It is slightly verbose on purpose to
// show the flexibility of the structure

$(function(){
  if ($("body.dashboard.index")[0]) {
    app.views.dashboard.index.init()
  }
});


// index ---------------------------------------------------------------------

app.views.dashboard.index = {};

app.views.dashboard.index.init = function(element){
  this.initialize.something_1();
  this.initialize.something_2();
  this.initialize.something_3();
  this.initialize.something_4();
  this.initialize.something_5();
  // call an external module
  app.some_custom_module.init();
};

app.views.dashboard.index.initialize = {
  something_1:function(){
    // initializes something on the dashboard/index page
  },
  something_2:function(){
    // initializes something on the dashboard/index page
  },
  something_3:function(){
    // initializes something on the dashboard/index page
  },
  something_4:function(){
    // initializes something on the dashboard/index page
  },
  something_5:function(){
    // initializes something on the dashboard/index page
  }
};


// example of hanging a custom method of of the dashboard/index object
// this would likely be called from an intializer above

app.views.dashboard.index.custom_method = function(){
  // do stuff
};