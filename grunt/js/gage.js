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


    $(window).resize(function(){

      $('.all_select').click()
    })


    function view_click (x){




        $('.box .gage_box').css('display','none')
        $('.'+x).parent().css('display','inline-block')



    }



});
