$(function () {
  var mouse_x;
  var mouse_y;

  var social_click = function(){

        mouse_x = event.clientX - 15;
        mouse_y = event.clientY - 15;

        $('.connect_box').css({

          top : mouse_y,
          left : mouse_x,
          zIndex:'5'

        }).slideDown().css({  display:'table'})

        $('.connect_box').mouseleave(function(){

            $(this).slideUp()

        })

    }



$(window).resize(function(){
      var wwid = $(this).width()

      if(320 < wwid && $('#social').is('.size_big')!==true){

        $('#social').addClass('size_big')
        $('#social').removeClass('size_small')

        $('.flaticon-line-logo').click(social_click)


      }else if(320 >= wwid && $('#social').is('.size_small')!==true) {

        $('#social').addClass('size_small')
        $('#social').removeClass('size_big')


      }

    })

    $(window).trigger('resize')
})
