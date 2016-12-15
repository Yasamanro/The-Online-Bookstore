/**
 * Created by nima on 1/11/2015.
 */
$(document).ready(function(){

  // Add smooth scrolling to all links in navbar + footer link
  
  // var search_toggle = 0;
  // $(".navbar-form .fa-search").click(function(){
  // 		if(search_toggle){
  // 			$(".navbar-form .text").addClass("hide");
  // 		}else{
  // 			$(".navbar-form .text").removeClass("hide");
  //           $(".navbar-form .text").focus();
  // 		}
  // 		search_toggle = !search_toggle;
  // });
  
  
  var vw = $(window).width()/100;
  var eng = $("body").hasClass("body-en");

  function setWrapperWidth(cls){
    itemcls = "." + cls;
    var item_num = $(itemcls).length;
    var width = $(itemcls).outerWidth() + parseFloat($(itemcls).css("margin-left"),10) + parseFloat($(itemcls).css("margin-right"),10);
    $("#" + cls + "-wrapper").css("width",(item_num * width + item_num*4));
  }

  function animateLeft(cls){
    itemcls = "." + cls + ":not(.highlight)";
    var item_num = $(itemcls).length;
    var width = $(itemcls).outerWidth() + parseInt($(itemcls).css("margin-left"),10) + parseInt($(itemcls).css("margin-right") + 2,10);
    var target = $("#" + cls + "-wrapper");
    var current = eng ? parseInt( target.css("left"),10) : parseInt( target.css("right"),10);
    var min = -(item_num-3)*width;
    var animate_to = current + (eng ? -3*width : 3*width);
    if (animate_to < min) animate_to = min;
    if (animate_to > 0) animate_to = 0;
    if(eng)
      target.animate({"left" : animate_to.toString() + "px"} , 1500);
    else
      target.animate({"right" : animate_to.toString() + "px"} , 1500);
  }

  function animateRight(cls){
    itemcls = "." + cls + ":not(.highlight)";
    var item_num = $(itemcls).length;
    var width = $(itemcls).outerWidth() + parseInt($(itemcls).css("margin-left"),10) + parseInt($(itemcls).css("margin-right"),10);
    var target = $("#" + cls + "-wrapper");
    var current = eng ? parseInt( target.css("left"),10) : parseInt( target.css("right"),10);
    var min = -(item_num-3)*width;
    var animate_to = current +(eng ? 3*width : -3*width);
    if (animate_to < min) animate_to = min;
    if (animate_to > 0) animate_to = 0;
    if(eng)
      target.animate({"left" : animate_to.toString() + "px"} , 1500);
    else
      target.animate({"right" : animate_to.toString() + "px"} , 1500);
  }

  setWrapperWidth("new-arival");
  $("#new-arivals-next").click(function(){
    animateRight("new-arival");
  });
  $("#new-arivals-prev").click(function(){
    animateLeft("new-arival");
  });

  setWrapperWidth("trending");
  $("#trendings-next").click(function(){
    animateRight("trending");
  });
  $("#trendings-prev").click(function(){
    animateLeft("trending");
  });


    setWrapperWidth("special");
  $("#special-next").click(function(){
    animateRight("special");
  });
  $("#special-prev").click(function(){
    animateLeft("special");
  });

    setWrapperWidth("arrived");
  $("#arrived-next").click(function(){
    animateRight("arrived");
  });
  $("#arrived-prev").click(function(){
    animateLeft("arrived");
  });

  setWrapperWidth("under");
  $("#under-next").click(function(){
    animateRight("under");
  });
  $("#under-prev").click(function(){
    animateLeft("under");
  });



$("#year-filter").hide();
  var menutoggle = 1;
  $(".navbar-brand").click(function(){
      if(menutoggle){
        $("ul.navbar-hide").hide(300);
        $("#year-filter").show(800);
      }else{
        $("#year-filter").hide(300);
        $("ul.navbar-hide").show(800);
      }
      menutoggle =! menutoggle;
  });  
  


 
});

