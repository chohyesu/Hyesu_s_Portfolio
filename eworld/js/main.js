$(function() {
  //GNB - PC
  $('.g1>li').hover(function() {
    $('nav .g2').show();
    $(this).find('.g2 a').css({color: '#f0683f'})
    $('nav').append('<div class="gnb_bg"></div>')
  }, function() {
    $('nav .g2').hide();
    $('.gnb_bg').remove()
    $('.g2 a').css({color: 'inherit'})
  })

  //어트랙션 - mob

})