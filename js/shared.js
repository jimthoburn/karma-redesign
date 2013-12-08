$(document).ready(function(){
	$isotope = $('.isotope-list');
	$isotope.isotope({
		itemSelector: '.isotope-item',
		layoutMode: 'masonry',
		masonry: {
			columnWidth: 220
		}
	});

	var currentFilters = [];

	$('input[type=radio]').on('change', function() {
		var allFilters = [];
		$('input[type=radio]').filter(':checked').each(function(idx, del){
			var data = $(del).data('filter');
			console.log(data);
			allFilters.push(data);
		});
		console.log('allFilters', allFilters);
		var selectedFilters = _.without(allFilters, '*');
		if(selectedFilters.length)
		{
			console.log('selectedFilters.length');
			$isotope.isotope({ filter: selectedFilters.join('') });
		}
		else
		{
			console.log('not selectedFilters.legnth');
			$isotope.isotope({ filter: '*' });
		}
		
	});
});