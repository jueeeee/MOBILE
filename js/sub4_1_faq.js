$(document).ready(function () {
	var article = $('.faq .article');
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
  
 
  $('.all').toggle(function(e){
        e.preventDefault(); 
        article.find('.a').slideDown(100);
        article.removeClass('hide').addClass('show');
        article.find('span').html('<i class="fas fa-chevron-up"></i>');
        $(this).text('모든 리스트 닫기');
  },function(e){
        e.preventDefault(); 
        article.find('.a').slideUp(100);
        article.removeClass('show').addClass('hide');
        article.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).text('모든 리스트 열기');
  });

}); 