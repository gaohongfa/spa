 var showPsw=function(config){	
 	
 	var $psw=$('<input type="password" id="psw"/>');
 	var $eye=$('<div class="img"></div>')
	 
	var $div=$('<div class="main"><span class="title">密码</span></div>')
	
	$(config.container).append($div,$psw,$eye); 
	
	$("#psw").attr("autofocus","autofocus");
		  
	$(".img").mouseover(function(){
	     
	    $("#psw").attr("type","text");//是密码可见将类型改为text即可；
	    }
	);
	    
	$(".img").mouseout(function(){
	   
	    $("#psw").attr("type","password");
	   }
	);	 
};	 
 