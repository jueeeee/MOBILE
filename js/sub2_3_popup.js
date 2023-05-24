$(document).ready(function(){
   
    var memo = [
          {imgsrc:'1.jpg' ,title:'공기 윤활 시스템',
           sub1:'SAVER AIR',
           sub2:'선체 바닥에 공기를 분사하여 해수와의 마찰 저항을 줄여 선박의 연비를 향상 시키는 친환경 시스템입니다. 삼성 중공업이 자체 개발한 SAVER Air 를 170,000m3급 LNG선에 적용한 결과, 5% 이상의 연료 절감 효과가 입증되었으며, 향후 다양한 선종에 확대 적용해 수주 경쟁력을 향상시키고자 합니다.'},
          {imgsrc:'2.jpg' ,title:'연료 절감 장치', 
           sub1:'STATOR-D',
           sub2:'삼성중공업이 독자 개발한 SAVER Stator-D는 선박의 프로펠러로 유입되는 해수의 흐름을 균일하게 함으로써 프로펠러의 추진력을 증가시켜 연비를 향상시키는 연료 절감 장치입니다. 삼성중공업은 장치를 선박에 적용해 약 2%의 연비 절감 효과를 입증했으며, 이를 통해 향후 수주 경쟁력 강화에 기여할 것으로 기대합니다.'},
          {imgsrc:'3.jpg' ,title:'해수 흐름 제어장치', 
           sub1:'SAVER CAP',
           sub2:'대형 컨테이너선의 선수에 설치해 선체 주변의 해수 흐름을 제어함으로써 연비를 향상시키는SAVER CAP을 개발했습니다. SAVER CAP을 통해1.8%~3.7% 수준의 연비가 개선되며 선체 진동도 줄어 선수 의장품과 컨테이너 박스의 안전한 보관이 가능합니다.'}
    ]   
      
        var txt ='';  
        var ind = 0;
        var total = $('.esd ul li').size();

        function popchange(){
        $('.esd .popup img').attr('src','./images/sub2-3_main1-'+memo[ind].imgsrc);
        
        txt='';
        txt+= '<div class="title_box">'
        txt+= '<strong>'+memo[ind].sub1+'</strong>';
        txt+= '<span>'+memo[ind].title+'</span>';
        txt+= '</div>'
        txt+= '<div class="text_box">'
        txt+= '<p>'+memo[ind].sub2+'</p>';
        txt+= '</div>'
        $('.esd .popup .txt').html(txt);
    }

        $('.esd ul a').click(function(e){
            e.preventDefault();

        ind = $(this).index('.esd ul a');

        $('.esd .popup').fadeIn('slow');

        popchange();

    });
});
