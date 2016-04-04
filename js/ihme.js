(function(){

	var content;
	var selection = $('.country_code')[0];

	var updateContent = function () {
		var data = content[selection.value];
		$('.content_header').text(data.name);
		$('.content_main').text(data.content);
		$('.content_link').html('<a href=\"' + data.link +'\" target=\"_blank\">More information about this region</a>');
	};

	$.getJSON("..IHME-visual/data/content.json", function(data){
		content = data;
		updateContent();
	});

	$('.page_info').click(function(){
		//full page splash - contact, credits, links to portfolio, etc.
	});

	$(".country_code").on('change', function(){
		updateContent();
	});

})();
