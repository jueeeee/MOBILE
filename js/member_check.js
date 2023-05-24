$(document).ready(function(){
          
    $('.check_agree').on('click',check_agree);
    
    function check_agree(e){
        e.preventDefault();

        var checkboxLength=$('input[type="checkbox"]').length; 			            
        var checkedLength=$('input[type="checkbox"]:checked').length;   
        
        if(checkboxLength != checkedLength){
            alert("수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.");
            
        }else{ 
            location.href="./join.html";  
        }
    }

    $('.allcheck').toggle(function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);
    },function(e){
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false);
    });    

    
   });

function join_cancel(){
   history.go(-1);
}
