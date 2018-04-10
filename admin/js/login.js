var $login=(function(){
  var html= `
  <div id="admin-app">
	   <div class="login">
	   	 <h1  >集团后台登录</h1>
	   	 <form  class="form">
	   	     <label>用户名</label>
		   	 <input type="text"/>
		   	 <br/>
		   	 <label>　密码</label>
		   	 <input type="password"/> 
		   	 <br/>
		   	 <label>验证码</label>
		   	 <input type="text"/> 
		   	 <br/>
		   	 <input type="submit" value="登　录" />
	   	 </form>
	   </div>
   </div>`;



  function show(config){
     $(config.container).html(html);
  }

  return {show:show};   //以对象的形式返回($DOM对象、构造函数、对象)
})();