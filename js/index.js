// index 메인 자동 처리

var timeonoff; //타이머 처리
var imageCount = $(".gallery ul li").size(); //이미지 총개수
var cnt = 1; //이미지 순서 1 2 3 1 2 3
var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

$(".cnt1").css("color", "#0c4da2"); //첫번째 on

$(".gallery .link1 img").fadeIn("slow"); //첫번째 이미지 on
$(".gallery .link1 .slogan").animate({
    top: "32%",
    opacity: 1,},"slow");

function moveg() {
  if (cnt == imageCount + 1) cnt = 1;
  if (cnt == imageCount) cnt = 0; //카운트 초기화

  cnt++; //카운트 1씩 증가 3되면 초기화, 0  1 2 3 1 2 3

  $(".gallery li").hide(); //이미지 모두 off
  $(".gallery .link" + cnt).fadeIn("slow"); // 자신만 on

  $(".mcount").css("color", "#fff"); //모두 out
  $(".cnt" + cnt).css("color", "#0c4da2"); //자신만 on

  $(".gallery li .slogan").css("top", "32%").css("opacity", 0);
  $(".gallery .link" + cnt)
    .find(".slogan")
    .delay(1000)
    .animate({
        top: "32%",
        opacity: 1,
      },
      "slow"
    );

  if (cnt == imageCount) cnt = 0; //카운트의 초기화 0
}

timeonoff = setInterval(moveg, 4000);
// 타이머를 동작 1~3이미지를 순서대로 자동 처리



// technology // count *숫자 자동입력
// 인도완료 선박
var countNumber1;
var countNumber2;

function count() {
  var memberCountConTxt = 4732;

  $({
    val: 0,
  }).animate({
    val: memberCountConTxt,
  }, {
    duration: 2000,
    step: function () {
      var number = numberWithCommas(Math.floor(this.val));
      $(".tech .value .count1").text(number);
    },
    complete: function () {
      var number = numberWithCommas(Math.floor(this.val));
      $(".tech .value .count1").text(number);
    },
  });
}

// 에너지 재생률

function count2() {
  memberCountConTxt = 100;

  $({
    val: 0,
  }).animate({
    val: memberCountConTxt,
  }, {
    duration: 2000,
    step: function () {
      var number = numberWithCommas(Math.floor(this.val));
      $(".tech .value .count2").text(number);
    },
    complete: function () {
      var number = numberWithCommas(Math.floor(this.val));
      $(".tech .value .count2").text(number);
    },
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
}

// window.addEventListener('scroll',)

$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  var h1 = $(".tech .value").offset().top - 500;

  if (scroll >= h1 && scroll < h1 + 1000) {
    countNumber1 = setTimeout(count, 100);
    countNumber2 = setTimeout(count2, 100);
     clearTimeout()
     count();
     count2();
  }
});



//faq//

$(document).ready(function () {
	var article = $('.faq .article');  
	article.find('.a').slideUp(100); 
    article.find('span').html('<i class="fas fa-chevron-down"></i>');

	
	$('.faq .article .trigger').click(function(e){ 
	    e.preventDefault(); 
        var myArticle = $(this).parents('.article'); 
	
        if(myArticle.hasClass('hide')){   
            article.find('.a').slideUp(100); 
            article.removeClass('show').addClass('hide'); 
            article.find('span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');   
            myArticle.find('.a').slideDown(100);  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');

        } else {  
            myArticle.removeClass('show').addClass('hide');  
            myArticle.find('.a').slideUp(100);   
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
    });

}); 




