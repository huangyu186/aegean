$(function(){

  $('.carousel').carousel();

  $('.navigation a').click(function(e){
    $(this.hash).ScrollTo();
    return false;
  });

  $('a.brand').click(function(e){
    $(this.hash).ScrollTo();
    return false;
  });

  showColorbox();

  var script = document.createElement("script");
  script.src = "http://api.map.baidu.com/api?v=1.4&callback=showMap";
  document.body.appendChild(script);

  $("#rsvp-form").validate();
  $("#rsvp-form").submit(form_submit)
});
