$(document).ready(function() {
$('#button').click(function() {
       var username=$("#usr").val();
       var password=$("#psw").val();

       if(username.length<=1 || password.length<=1){
       	$("#error").show();


       	}
       	else { 
       		$("#error").hide();
       	}
       	 

       
});//click
});// ready

  

