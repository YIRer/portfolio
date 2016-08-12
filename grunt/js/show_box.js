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
  var resize = function(){
    console.log('sad')
    $(window).trigger('resize')

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
  			if(990 < ww && $('.gallery').is('.big_size')!==true){

          $('.hide_box').removeClass('view_box')

          $('.gallery').addClass('big_size')
				  $('.gallery').removeClass('middle_size')
          $('.gallery').removeClass('small_size')

        	$('.gallery').mouseenter(enter);
  				$('.gallery').mouseleave(leave);
          $('.gallery').off('click')


  			}else if(337 < ww && 990 >= ww && $('.gallery').is('.middle_size')!==true) {

          $('.hide_box').removeClass('view_box')


          $('.gallery').addClass('middle_size')
				  $('.gallery').removeClass('big_size')
          $('.gallery').removeClass('small_size')

          $('.gallery').off('mouseenter');
          $('.gallery').off('mouseleave');
          $('.gallery').click(click);


        }
        else if(337 >= ww && $('.gallery').is('.small_size')!==true){

          $('.hide_box').addClass('view_box')

          $('.gallery').addClass('small_size')
          $('.gallery').removeClass('big_size')
          $('.gallery').removeClass('middle_size')

          $('.gallery').off('mouseenter');
          $('.gallery').off('mouseleave');
          $('.gallery').off('click')


        }


        if($('.hide_box').is('.view_box')!==true){

          $('.hide_box').css('display','none')

        }else{

          $('.hide_box').css('display','block')

        }

  		})
      $('body').on('click','.works_btn',resize)

      $(window).trigger('resize')
})
