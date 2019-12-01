$(function(){
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();
	
	//menu responsive
	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu'),
		icono = $('#btn-menu .icono')
	if(ancho < 720){
	enlaces.hide();
	icono.addClass('icon-menu');
	}
	
	btnMenu.on('click' , function(e){
	enlaces.slideToggle();
	icono.toggleClass('icon-menu');
	icono.toggleClass('icon-cross')
	});

	$(window).on('resize', function(){
	if($(this).width() > 720){
		enlaces.show();
		icono.addClass('icon-cross');
		icono.removeClass('icon-menu');
	} else
		icono.addClass('icon-menu');
		icono.removeClass('icon-cross');
		enlaces.hide();
	});

});