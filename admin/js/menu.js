var $menu=(function(){
	function show(){
      $(app.config.appContainer).append('<div class="admin-app-menu"><p>2017<a href="#">中科佰融</a></p></div>')
	}
	return {show:show};
})();