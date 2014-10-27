$( document ).ready(function() {
	$('.nav-element:first-child').click(function(event) {
		invert();
	});

	$(window).resize(function(event) {
		var width = $(window).width();
		var visible = $('.nav-link').is(':visible');

		if(width >= 480 &&
			!visible)
		{
			invert();
			return;
		}

		if(width < 480 &&
			visible)
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