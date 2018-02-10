$(document).ready(function(){ 

  $("#button").click(function(){
  	    var username=$("#usr").val();
  	    var password=$("#psw").val();
    if(username.trim().length<2 || password.trim().length<2 ){
    $("#error").show();
    
    }

    else
    {
$("#error").hide();






    }
    });
  $("#button").click(function(){
    var userNameValue=$("#usr").val();
    var passwordValue=$("#psw").val();
  $.ajax({
    
    url:"http://akademiasovy.ddns.net:8081/api/auth/login",
    type: 'POST',
    contentType:'application/json',
    data: JSON.stringify({"userName":userNameValue,"password":passwordValue}),
    success: function(data){
        data.token
        window.location.href='editInterview.html';
    },
    error: function(){
        
$("#error").show();
    

    }







  });
});



      


});