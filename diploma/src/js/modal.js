$(document).ready(function(){
	var button = $('#button');
	var buttonf = $('#buttonf');
	var link = $('#link');
	var modal = $('#modal');
	var modalf = $('#modalf');
	var close = $('#close');

	button.on('click', function(){
		modal.addClass('modal_active');
	});
	close.on('click', function(){
		modal.removeClass('modal_active');
	});
	link.on('click', function(){
		modal.addClass('modal_active');
	});
	close.on('click', function(){
		modal.removeClass('modal_active');
	});

	buttonf.on('click', function(){
		modalf.addClass('modal_active');
	});
	close.on('click', function(){
		modalf.removeClass('modal_active');
	});
	link.on('click', function(){
		modalf.addClass('modal_active');
	});
	close.on('click', function(){
		modalf.removeClass('modal_active');
	});
});