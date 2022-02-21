$.get('getJSON.php')
	.done(data => {
		console.log(data);
		const parseData = JSON.parse(data);
		console.log(parseData.name);
	});
