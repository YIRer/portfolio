$(function(){
    
    //마우스 오버시 메뉴색 변경
    $('header div ul li').children('a').mouseenter(function(){
        
        $(this).css('backgroundColor','#F00');
        
    }).mouseleave(function(){
        
        $(this).css('backgroundColor','inherit');
        
    })
    
    //클릭시 해당 위치로 스크롤
    
    var idx;
    $('header div ul li').children('a').click(function(){
        
        idx = $(this).parent().index();
        var scroll = $('.content section').eq(idx).offset().top
        
        console.log(idx)
        console.log(scroll)
        
       
         $('body,html').animate({
             scrollTop : scroll
             
         })
        return false
    })
    
    //자동슬라이드
    
    
    var lisize = $('.slidebanner li').length;
    var butnclick = Math.floor(Math.random()*lisize)
    var imgwidth = $('.slidebanner').width()
    
    ranVeiw()
    
    console.log(imgwidth)
    $('.content .d-type .next').click(function(){
        
        // $('.slidebanner li').removeClass().eq(butnclick).addClass('on').children('img').css({
        //     display:'block',
        //     left:'0'
            
        // }).stop().animate({
            
        //     left : -imgwidth
        // },1000)
        
        move(butnclick,'0',-imgwidth)
        butnclick++
        move(butnclick,imgwidth,'0')
        
        //  $('.slidebanner li').removeClass().eq(butnclick).addClass('on').children('img').css({
        //     display:'block',
        //     left:imgwidth
            
        // }).stop().animate({
            
        //     left : 0
        // },1000)
        
        // if(butnclick==$('.slidebanner li').length){
        //  butnclick=0
        // $('.slidebanner li').removeClass().eq(butnclick).addClass('on').children('img').css({
        //     display:'block',
        //     left: imgwidth
            
        // }).stop().animate({
            
        //     left : 0
        // },1000)
            
        // }
        
    })
    
    $('.content .d-type .prev').click(function(){
       
        
        move(butnclick,'0',imgwidth);
        butnclick--;
        move(butnclick,-imgwidth,'0');
        

    })
    
    var onClass;
    
    $('.content .d-type li').children('a').click(function(){
        onClass = $('.content .d-type li.on').index();
        butnclick = $(this).parent().index();
        if(onClass<butnclick){
           
            move(onClass,'0',-imgwidth)
            move(butnclick,imgwidth,'0')
            
        }else if(onClass>butnclick){
           
            move(onClass,'0',imgwidth)
            move(butnclick,-imgwidth,'0')
        }
        
    })
    autopaly()
  
   
    //페이드 이동
    var fadebanner = 0;
    
    $('.e-type .fadebanner li').children('a').click(function(){
        fadebanner = $('.e-type .fadebanner .on').index()
        console.log(fadebanner)
        var fadeaClick = $(this).parent().index();
        console.log(fadeaClick)
        $('.fadebanner li').eq(fadebanner).children('img').fadeOut(function(){
            $(this).parent().removeClass()
        })
        
        
        $('.fadebanner li').eq(fadeaClick).children('img').fadeIn(function(){
            $(this).parent().addClass('on')
            
            
        })
        
        fadebanner = fadeaClick
        console.log(fadebanner)
        
        
        
  
    })
    
    
    console.log(fadebanner)
    fade(fadebanner)
    
    // SNS
    
    $('.movie-view li').children('a').click(function(){
        
        var clickIdx = $(this).parent().index()
        
        $('.movie-view li').removeClass().eq(clickIdx).addClass('on')
        // $(this).css('opacity','0.5')
        
        var url1 = $(this).attr('href');
        var url2 = 'https://www.youtube.com/embed/'+url1+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen';
        $('.movie-view .view').children('iframe').attr('src',url2);
        
        return false 
         
        
    })
    
    //스크롤 따라가기
    
    $(window).scroll(function(){
        
        var srt = $(this).scrollTop()
        console.log(srt)
        $('.wing').stop().animate({
            top : srt
        })
        
    })
    
    //팝업
    var bodyH = $('html').height()*$('body section').length;
    
    console.log(bodyH)
    $('.btngroup button.eventBt01').click(function(){
        
        blind()
        popMaker()
        $('.popup').show()
        
        
    })
    
    
    
    
    
    
    // 함수화
   
    
    
    // 랜덤 슬라이드 조작
    function ranVeiw(){
        $('.slidebanner li').removeClass().eq(butnclick).addClass('on').children('img').css({
            display:'block'})
    }
    
    function move(click,x,y){
         $('.slidebanner li').removeClass().eq(click).addClass('on').children('img').css({
            display:'block',
            left: x
            
        }).stop().animate({
            
            left : y
        },1000)
        
        if(click==$('.slidebanner li').length){
        
        butnclick=0
        move(butnclick,imgwidth,'0')
        }else if(click<0){
        
        butnclick=$('.slidebanner li').length-1
        move(butnclick,-imgwidth,'0')
        }
        
    }
    
    function autopaly(){
        
    var x = setInterval(function(){
        
        $('.content .d-type .next').click()
        
    },4500)
    
    $('.slidebanner').mouseleave(function(){
        
        x = setInterval(function(){
        
        $('.content .d-type .next').click()
        
    },4500)
        
    }).mouseenter(function(){
        
        clearInterval(x)
        
    })
    
        
    }
    
    
    
    
    $('.slidebanner').mouseleave(function(){
        
        x = setInterval(function(){
        
        $('.content .d-type .next').click()
        
    },4500)
        
    }).mouseenter(function(){
        
        clearInterval(x)
        
    })
        
        
    //페이드 반복
    
 
    function fade(click){
    
    var y = setInterval(function(){
        
        var click = $('.e-type .fadebanner .on').index();
        
        fadeOut(click)
       
        click++
        
        fadeIn(click)
        
        if(click==$('.fadebanner li').length){
          
        click=0
        
        fadeIn(click)
    
        }
        
        console.log(click)
        
    },4800)
    
    $('.fadebanner').mouseleave(function(){
        console.log(fadebanner)
        y = setInterval(function(){
        
        var click = $('.e-type .fadebanner .on').index();
       
        fadeOut(click)
        
        click++
        
        fadeIn(click)
        
        
        
        if(click==$('.fadebanner li').length){
          
        click=0
        
        fadeIn(click)
    
        }
        
    
        
    },4800)
        
    }).mouseenter(function(){
        
        clearInterval(y)
    
        
    })
    
        
    }
    
    
    function fadeOut(x){
        
         $('.fadebanner li').eq(x).children('img').fadeOut(function(){
            $(this).parent().removeClass()
        })      
        
    }
    
    function fadeIn(x){
        
        $('.fadebanner li').eq(x).children('img').fadeIn(function(){
            $(this).parent().addClass('on')
        })
        
    }

        
        
        
        
    function blind(){
        var vail="";
        
        vail +='<div class="blind">"SSS"'
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
            zIndex:'2'
        }).fadeTo(1000,0.5)
        
        
        
    }
    
    function popMaker(){
        
        var popup ="";
        
        popup +='<div class="popup event1">'
        popup +='<button class="close">close'
        popup += '</button>'
        popup +='</div>'
        
        $('body').append(popup)
        center()
        
    }
    
    function center(){
        
        
        
        $('.popup').css({
            left : '50%',
            marginLeft : function(){
                var popupwidth = $('.event1').width()
                
                return -parseInt((popupwidth)/2)+"px"
                
            },marginbottom : function(){
                var popupheight = $('.event1').height()
                
                return -parseInt((popupheight)/2)+"px"
                
                
            },bottom : $(window).height()
           
        }).animate({
            
            bottom : '50%'
        }) 
            
        
        
    }
        
        
        
        
        
        
        
        
        
        
        
        
    })
    
    
    
    
