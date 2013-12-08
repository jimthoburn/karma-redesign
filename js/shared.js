$(window).load(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto();
	$isotope = $('.isotope-list');
	$isotope.isotope({
		itemSelector: '.dog-entry',
		layoutMode: 'masonry'
	});

	var currentFilters = [];

	$('.adopt-search').on('change', 'input[type=checkbox]', function() {
		var allFilters = [];

		if(!$('input[type=checkbox]').filter(':checked').length){
			console.log('no filters selected at all!');
			$isotope.isotope({ filter: '*' });
		}

		$('input[type=checkbox]').filter(':checked').each(function(idx, del){
			var data = $(del).data('filter');
			console.log(data);
			allFilters.push(data);
		});

		console.log('allFilters', allFilters);
		var selectedFilters = _.without(allFilters, '*');

		if(selectedFilters.length)
		{
			console.log('selectedFilters.length');
			$isotope.isotope({ filter: selectedFilters.join(',') });
		}
		else
		{
			console.log('not selectedFilters.length');
			$isotope.isotope({ filter: '*' });
		}
	});
});