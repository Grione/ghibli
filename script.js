const app = document.getElementById('root');
const logo = document.createElement('IMG');

logo.src = 'logo.png';

const container = document.createElement('DIV');
container.setAttribute('class', 'container');

app.prepend(logo);
app.append(container);

fetch('https://ghibliapi.herokuapp.com/films')
	.then((response) => {
		console.log(response);
		return response.json();
	})
	.then((data) => {
		data.forEach((movie) => {
			const card = document.createElement('DIV');
			card.setAttribute('class', 'card');

			const h1 = document.createElement('H1');
			h1.textContent = movie.title;

			const p = document.createElement('P');
			movie.description = movie.description.substring(0, 300);
			p.textContent = `${movie.description}...`;

			container.append(card);
			card.append(h1);
			card.append(p);
		});
	})
	.catch((err) => {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Oops, it's not working! See in console.`;
		app.append(errorMessage);
		console.log(err);
	});
