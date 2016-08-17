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

    }

  var social_leave = function(){


        $(this).slideUp()


  }


    var social_click_small = function(){

          mouse_y = $('.flaticon-line-logo').offset().top - $(window).scrollTop();   // 버튼 A 의 ClientY 좌표
          console.log(mouse_y)

          $('.connect_box').css({

            top : mouse_y,
            left : '50%',
            marginLeft : '-120px',
            zIndex:'5'

          }).slideDown().css({  display:'table'})



      }

      var social_shut_down = function(){

            $(this).slideUp()


      }


$(window).resize(function(){
      var wwid = $(this).width()
      console.log(wwid)

      if(545 < wwid && $('#social').is('.size_big')!==true){

        $('#social').addClass('size_big')
        $('#social').removeClass('size_small')
        $('.flaticon-line-logo').click(social_click)
        $('.connect_box').mouseleave(social_leave)
        $('.connect_box').off('click')




      }else if(545 >= wwid && $('#social').is('.size_small')!==true) {

        $('#social').addClass('size_small')
        $('#social').removeClass('size_big')

        $('.flaticon-line-logo').click(social_click_small)
        $('.connect_box').off('mouseleave')
        $('.connect_box').click(social_leave)


      }

    })

    $(window).trigger('resize')
})
