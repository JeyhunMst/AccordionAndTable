$(document).ready(function(){
    $("button").click(function(){
      $(".tabcontent").fadeOut(1000);
      let id=$(this).text();
      console.log(id);
      $(`#${id}`).addClass("active");
      $(".active").fadeToggle(1000);
      $(`#${id}`).removeClass("active");
    });
  });