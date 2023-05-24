// 찾아오시는 길 탭메뉴 //
$(document).ready(function(){

  var cnt=$('.main .map').size(); 
  $('.main .map:eq(0)').show(); 
  $('.tab_menu .tab1').css('borderColor','#0c4da2').css('color','#0c4da2');    

  $('.tab_menu .tab').click(function(e){
    e.preventDefault();  
          
    var ind = $(this).parent().index();
    $('.content_area').css('overflow','visible').css('height','auto'); 
    $(".main .map").hide();
    $(".main .map:eq("+ind+")").show();
    $('.tab').css('color','#666').css('background','#fff'); 
    $(this).css('color','#0c4da2').css('background','#f8f8f8');

  });  
});
