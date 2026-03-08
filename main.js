window.addEventListener('load', () => {
	const btn = document.getElementById('submitButton');
	const joke = document.getElementById('joke');
	const copyrightDate = document.getElementById('copyrightDate');
	const chuckImg = document.getElementById('chuckImage');

	let currentYear = new Date();
	copyrightDate.textContent = currentYear.getFullYear();

	btn.addEventListener('click', () => jokeCallback(joke));
});

const jokeCallback = async (joke) => {
	try{
		let randomItemNumber = Math.floor(Math.random() * 50);
		let randomPageNumber = Math.floor(Math.random() * 5) + 1;;
		let apiKey = '7J1JN67nA7jd2C2WEu5pd2ju2muVQhCW3O8Ikzs8gmagVbq0K0YiJ20wM8JT3REu';

		const klipyResponse = await fetch(`https://api.klipy.com/api/v1/${apiKey}/gifs/search?page=${randomPageNumber}&per_page=50&q=chuck%20norris&format_filter=gif&customer_id=1`);
		const klipyData = await klipyResponse.json();

		let klipyGifData = klipyData.data.data[randomItemNumber];
		while (!/chuck\s+norris/i.test(klipyGifData.title)) {
			randomItemNumber = Math.floor(Math.random() * klipyData.data.data.length);
			klipyGifData = klipyData.data.data[randomItemNumber];
		}
		console.log(klipyGifData.title)
		chuckImage.src = klipyGifData.file.sm.gif.url;
		chuckImage.style.display = "block";

		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await response.json();
		joke.textContent = data.value;

	}catch(error){
		console.log(error);
	}
};

