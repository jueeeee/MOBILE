$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
    var ud = false; //위:false  , 아래:true
      
    $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
        
        var documentHeight =  $(document).height();  //전체 페이지의 높이(목록리스트가 안움직임)
        $("#gnb").css('height',documentHeight);   //네비의 높이를 전체 페이지의 높이와 같
 
       if(op==false){  //메뉴가 닫혀있는 상태에서 클릭햇나
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         if(ud==true){
          $('#headerArea .menu_ham span').css('background','none');
         }
         
         op=true;
       }else{   //메뉴가 열려있는 상태에서 클릭했나
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         if(ud==true){
          $('#headerArea .menu_ham span').css('background','#333');
         }
         op=false;
       }
 
    });
    
    
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false,false,false]; //가정법 false(서브닫힌상태), true(서브열린상태)
     var arrcount=onoff.length;  //배열의 개수 : 6
     
     //console.log(arrcount);
     
     $('#gnb .depth1 h3 a').click(function(e){   //1depth 메뉴를 클릭하면 
       e.preventDefault();
 
         var ind=$(this).parents('.depth1').index();   // 0~5
         //var ind=$(this)..index('#gnb .depth1 h3 a');
 
         //console.log(ind);
         
        if(onoff[ind]==false){   //onoff의0번방에 있는게 false인가 . 각각의 1depth메뉴의 서브가 닫혀잇나 ? 닫힌상태에서 클릭햇나?
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow');  //자신의 서브를 열어라
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');   //자신을 제외한 모든 서브를 닫아라
          for(var i=0; i<arrcount; i++) onoff[i]=false;   //모든 배열값을 false
          onoff[ind]=true;  //자신에 대한 배열만 true로 변경
            
          $('.depth1 span').html('<i class="fa-solid fa-chevron-down" style="color: #000000;"></i>');   //전부 +
          $(this).find('span').html('<i class="fa-solid fa-chevron-up" style="color: #000000;"></i>');   //자신의 span만 -
             
        }else{    //각각의 1depth메뉴의 서브가 열려잇나 ? 열려있는 상태에서 클릭햇나 ?
          $(this).parents('.depth1').find('ul').slideUp('fast');  //자신의 서비를 닫아라
          onoff[ind]=false; //자신에 대한 배열만 flase로 변경
            
          $(this).find('span').html('<i class="fa-solid fa-chevron-down" style="color: #000000;"></i>');     
        }
     });    
   
   
    // 헤더스크롤 //
    var smh=$('.visual').height()-$('#headerArea').height();  

  
    $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();  
  
      if(scroll>smh){
          $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
          $('#headerArea').addClass('on'); 
          $('#headerArea .menu_ham span').css('background','#333');
          ud=true;
      }else{
          $('#headerArea').css('background','none').css('border-bottom','none');
          $('#headerArea').removeClass('on');
          $('#headerArea .menu_ham span').css('background','#fff');
          ud=false;
      }; 
    });
  });

// 패밀리사이트 //

$(document).ready(function() {
   
	$('.family .arrow').toggle(function(){
		$('.family .aList').fadeIn('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>')	
	},
  function(){
        $('.family .aList').fadeOut('fast');
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>')	
	});

	//tab키 처리
	  $('.family .arrow').on('focus', function () {        
              $('.family .aList').fadeIn('fast');	
       });
       $('.family .aList li:last a').on('blur', function () {        
              $('.family .aList').fadeOut('fast');
       });
 
});


// 상단이동 //
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var winh = $(window).height()/4;  // 윈도우 높이
 // console.log(winh);
 
 

  if(scroll>200){ //500이상의 거리가 발생되면
      $('.topMove').fadeIn('slow');  //top보여라~~~~
  }else{
      $('.topMove').fadeOut('fast');//top안보여라~~~~
  }
});

$('.topMove').click(function(e){
 e.preventDefault();   //a태그 니까 꼭 사용
  //상단으로 스르륵 이동합니다.
 $("html,body").stop().animate({"scrollTop":0},1000);
 //$("html,body").stop().animate({"scrollTop":100},1000); //해당 높이로 이동
});