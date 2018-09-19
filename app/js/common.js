$(function() {

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('#header-menu').slideToggle('slow').toggleClass('active-nav');
	});

});
