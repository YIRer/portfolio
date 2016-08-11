$(function(){

  var enter = function(){
    
    $(this).children('.img-responsive').stop().slideUp()
    $(this).children('.hide_box').stop().slideDown()
  }
  var leave = function(){

    $(this).children('.hide_box').stop().slideUp()
    $(this).children('.img-responsive').stop().slideDown()
  }

  $('.gallery').mouseenter(enter)
  $('.gallery').mouseleave(leave)



})
