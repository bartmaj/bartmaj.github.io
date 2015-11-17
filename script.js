$(function () {
	var lastScroll = 0;
	$(window).scroll( function() {
		var st = $(this).scrollTop();
		if (st > lastScroll)
			{$( "#myNavbar").fadeOut("slow");}
		else
			{$( "#myNavbar").fadeIn("slow");}
		lastScroll = st;
	});
});




