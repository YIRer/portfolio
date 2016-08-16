$(function () {
  var sch = $(window).scrollTop();

  $(window).scroll(function(){


      if(sch = 310){



              $('.per50').animate({

                width : '50%'

              },1500)
              $('.per10').animate({

                width : '10%'

                },1500)
              $('.per70').animate({

                width : '65%'

                },1500)
              $('.per100').animate({

                width : '100%'

              },1500).children('span').css('color','#fff')


      }


    })



    $('.all_select').click(function(){

      $('.box .gage_box').css({display:'inline-block'})

    })

    $('.experience').click(function(){

      view_click('gray10')



    })

    $('.basic').click(function(){

      view_click('gray50')



    })

    $('.better').click(function(){

      view_click('gray70')



    })

    $('.perfect').click(function(){

      view_click('gray100')



    })





    function view_click (show){


        $('.box .gage_box').css('display','none').find('.'+show).parent().css('display','inlin-block')



    }



});

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

function blind(){
    var vail="";

    vail +='<div class="blind">'
    vail +='</div>'

    $('body').prepend(vail)

    $('.blind').css({
        position : 'fixed',
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        backgroundColor : "#000",
        display : 'none',
        zIndex:'4'
    }).fadeTo(1000,0.7)



}




$(function(){

    $(window).resize(function(){

      var pop_height = $('.photo0').height()
      var popup_fixed =  pop_height-10

      $('.close01').css({
      
        top : popup_fixed,
        zIndex : '10'


      })




      $('.photo0').css({
        marginLeft : function(){
            var photo = $(this).width()

            return -parseInt((photo)/2)+"px"

        },zIndex : '5'

      })

    })

    var indx;
    var viewer = ImageViewer();
    $('.gallery-items').click(function () {
        var imgSrc = this.src,
            highResolutionImage = $(this).data('high-res-img');

        viewer.show(imgSrc, highResolutionImage);
    });

    $('.cap .btn_box .image_pop').click(function(){

      indx = $(this).attr('id')

      $('body').addClass('stop-scrolling')
       blind()

      // $('.'+indx).css('display','none')
      $('.close01').css({
        marginLeft : function(){
            var close_btn = $('.close01').width()

            return parseInt(close_btn)+"px"

        }})
      $('.photo0').css({
        marginLeft : function(){
            var photo = $(this).width()

            return -parseInt((photo)/2)+"px"

        },zIndex : '5'

      }).show()

      $('.'+indx).css('display','block')




    })

    $('.close01').click(function(){
      $('body').removeClass('stop-scrolling')
      $('.blind').fadeOut(100,function(){
          $(this).remove()

      })
      $('.'+indx).css('display','none')
      $('.photo0').hide()


  })

  $(window).resize()
})

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
