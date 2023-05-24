//서브 네비 리스트
$(document).ready(function() {
  $('.subNav .arrow').toggle(function(){
	$('.subNav .aList').fadeIn('fast');	
	$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>')},

  function(){
    $('.subNav .aList').fadeOut('fast');
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>')	});

	$('.subNav .arrow').on('focus', function () {        
    $('.family .aList').fadeIn('fast');});

    $('.subNav .aList li:last a').on('blur', function () {        
    $('.family .aList').fadeOut('fast');});
});