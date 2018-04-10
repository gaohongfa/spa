var $stage=(function(){
	function show(){
      $(app.config.appContainer).append('<div class="admin-app-stage"><p>2017<a href="#">中科佰融</a></p></div>')
	}
	
	function load(router){
		var panel=parsePanel(router);
	}
	function parsePanel(router){
		return '';
	}
	return {show:show,load:load};

	// return {show:show};
})();