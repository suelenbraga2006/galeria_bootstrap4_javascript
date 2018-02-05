$(function(){
	$('div a').on('click', function(){
		var img = $(this).find('img').attr('src');
		$('.modal-body img').attr('src', img);
	});
});