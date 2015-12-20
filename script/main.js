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

$('.navbar-nav a').click(function(){
    var url=$(this).attr('href');
    $('.load').load(url);
    $('.active').removeClass('active');
    $(this).parent().addClass('active');
    return false;
});
