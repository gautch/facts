var load = function()
{

	$.ajax(
	{
		url: 'https://www.reddit.com/r/ShowerThoughts.json',
		dataType: 'json',
		success: function(data)
		{
			var post = null,
				title = $('h1');

			while(post == null || post.data.title.match(/shower ?thoughts/i))
			{
				post = data.data.children[Math.floor(Math.random() * data.data.children.length)];
			}

			title.text(post.data.title.trim().replace(/\.$/, ''));

			$(window).trigger('resize');
		}
	});
};

$(function()
{
	load();

	$('body').on('click', load);

	$(window).on('resize scroll', function()
	{
		var title = $('h1');


	});
});
