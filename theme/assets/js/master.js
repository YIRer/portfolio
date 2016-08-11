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
        zIndex : '6'


      })




      $('.photo0').css({
        marginLeft : function(){
            var photo = $(this).width()

            return -parseInt((photo)/2)+"px"

        },zIndex : 5

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
      console.log(indx)
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

        },zIndex : 5

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

        	$('.gallery').mouseenter(enter);
  				$('.gallery').mouseleave(leave);
          $('.gallery').off('click')


  			}else if(990 >= ww && 320 < ww){
          $('.gallery').off('mouseenter');
          $('.gallery').off('mouseleave');
          $('.gallery').on('click',click);

        }else{

          $('.hide_box').css({display:'block'})
          $('.gallery').off('mouseenter');
          $('.gallery').off('mouseleave');
          $('.gallery').off('click')


        }

  		})
      $(window).trigger('resize')
})
