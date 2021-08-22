fetch('https://ghibliapi.herokuapp.com/films')
	.then((response) => {
		console.log(response);
		return response.json();
	})
	.then((data) => {
		data.forEach((movie) => {
			console.log(movie.title);
		});
	})
	.catch((err) => {
		console.log(response.status);
	});
