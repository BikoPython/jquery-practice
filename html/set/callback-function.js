$(document).ready(function() {
  $("#btn1").click(function() {
    $("#test1").text(function(i, origText) {
      return "Old text: " + origText + " New text: Hello world!(index: " + i + ")";
    });
  });


  $("#btn2").click(function(i, origText) {
    $("#test2").html(function(i, origText) {
      return "Old html: " + origText + " New html: Hello <b>World!</b> (index: "+ i + ")";
    });
  });

});
