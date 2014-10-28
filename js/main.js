$( document ).ready(function() {
	$('.nav-element:first-child').click(function(event) {
		var turnpoint = 480 * window.devicePixelRatio;
		var width = $(window).width();
		var widthPR = width * window.devicePixelRatio;

		if(widthPR <= turnpoint)
		{
			invert();
		}
		
	});

	$(window).resize(function(event) {
		
		var turnpoint = 480 * window.devicePixelRatio;
		var width = $(window).width();
		var widthPR = width * window.devicePixelRatio;

		var visible = $('.nav-link').is(':visible');

		if(widthPR >= turnpoint 
			&& !visible)
		{
			invert();
			return;
		}

		if(widthPR < turnpoint 
			&& visible)
		{
			invert();
			return;
		}
	});
	
	function invert()
	{
		var logo = $('.nav-element:first-child');
		var navlinks = $('.nav-link');
		if(navlinks.is(':visible'))
		{
			navlinks.css('display', 'none');
			logo.attr('data-content', 'Show menu ↓');
		}else
		{
			navlinks.css('display', 'inherit');
			logo.attr('data-content', 'Hide menu ↑');
		}
	}
});