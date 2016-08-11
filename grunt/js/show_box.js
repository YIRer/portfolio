$(function(){

  var enter = function(){

    $(this).children('.hide_box').stop().slideDown()
  }
  var leave = function(){

    $(this).children('.hide_box').stop().slideUp()

  }

  var click = function(){

    $(this).children('.hide_box').stop().slideToggle()

  }

  // $('.gallery').mouseenter(enter)
  // $('.gallery').mouseleave(leave)
  //
  // $('.gallery').click(click)

  $(window).resize(function(){
  			var ww = $(this).width()
        var gh = $('.gallery').height()
        $('.hide_box').css({height:gh})
        console.log(gh)
  			if(990 < ww){

          $('.hide_box').removeClass('view_box')
          $('.hide_box').css('display','none')
        	$('.gallery').mouseenter(enter);
  				$('.gallery').mouseleave(leave);
          $('.gallery').off('click')


  			}else if(990 >= ww && 337 < ww){

          $('.hide_box').removeClass('view_box')
          $('.hide_box').css('display','none')
          $('.gallery').off('mouseenter');
          $('.gallery').off('mouseleave');
          $('.gallery').click(click);

        }else if(337 >= ww){

          $('.hide_box').css({display:'block'})
          $('.gallery').off('mouseenter');
          $('.gallery').off('mouseleave');
          $('.gallery').off('click')


        }

  		})
      $(window).trigger('resize')
})
