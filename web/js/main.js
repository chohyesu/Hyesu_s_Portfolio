$(function() {
  //홈 화면 스크롤 이벤트
  // $('.home').on("mousewheel DOMMouseScroll", function (event) {
  //   //event.preventDefault();
  //   let delta = 0;
  //   if (!event) event = window.event;
  //   if (event.wheelDelta) {
  //     delta = event.wheelDelta / 120;
  //     if (window.opera) delta = -delta;
  //   }
  //   else if (event.detail)
  //     delta = -event.detail / 3;
  //   let moveTop = $(window).scrollTop();
  //   //let elmSelecter = $(elm).eq(index);
  //   // 마우스휠을 위에서 아래로
  //   if (delta < 0) {
  //     if ($(this).next() != undefined) {
  //       try {
  //         moveTop = $(this).next().offset().top;
  //       } catch (e) { }
  //     }
  //     // 마우스휠을 아래에서 위로
  //   } else {
  //     if ($(this).prev() != undefined) {
  //       try {
  //         moveTop = $(this).prev().offset().top;
  //       } catch (e) { }
  //     }
  //   }

  //   // 화면 이동 0.8초(800)
  //   $("html,body").stop().animate({
  //     scrollTop: moveTop + 'px'
  //   }, {
  //     duration: 500, complete: function () {
  //     }
  //   });
  // });

  //Logo 클릭했을때 홈화면으로 이동하도록...ㅠ
  $('h1').click(function() {
    let h = $(this).index()
    $('html, body').animate({
      scrollTop : 0
    })
  })

  //GNB 마우스오버 스타일 (gnb에 마우스오버됐을때 채점동그라미 모양 생기도록???)
  $('header #gnb li').hover(function() {
    
    
  });

  //GNB
  $('#gnb li').click(function() {
    let n = $(this).index()+1
    $('html, body').animate({
      scrollTop : $('section').eq(n).offset().top
    })

    $('.bike img').animate({'left' : (n * 20) + '%'})
  })

  //GNB 스타일 변경
  if($(window).scrollTop() >= $('#about').offset().top) {
    $('header').addClass('bg_on')
  }
  if($(window).scrollTop() < $('#about').offset().top) {
    $('header').removeClass('bg_on')
  }
  $(window).scroll(function() {
    if($(window).scrollTop() >= $('#about').offset().top) {
      $('header').addClass('bg_on')
    }
    if($(window).scrollTop() < $('#about').offset().top) {
      $('header').removeClass('bg_on')
    }
  })

  //Graphic Tabs 스타일
  $('#graphic .tabs li').hover(function() {
    $(this).addClass('on');
    $('#graphic .tabs li').not(this).removeClass('on');

    let gname = $(this).attr('class'); //클릭한 애들중 클래스명을 가져오기
    //window.alert(gname)
  });
  $('.graphic_thumb').masonry(); // 메이슨리 제이쿼리주기

  //스와이퍼

  $('.web_swiper').swiper();
})//ready()