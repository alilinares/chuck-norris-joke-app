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
		let randomItemNumber = Math.floor(Math.random() * 51) + 1;
		let randomPageNumber = Math.floor(Math.random() * 5) + 1;;
		let apiKey = '7J1JN67nA7jd2C2WEu5pd2ju2muVQhCW3O8Ikzs8gmagVbq0K0YiJ20wM8JT3REu';

		const klipyResponse = await fetch(`https://api.klipy.com/api/v1/${apiKey}/gifs/search?page=${randomPageNumber}&per_page=50&q=chucknorris&customer_id=1`);
		const klipyData = await klipyResponse.json();

		chuckImage.src = klipyData.data.data[randomItemNumber].file.sm.gif.url;
		chuckImage.style.display = "block";

		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const data = await response.json();
		joke.textContent = data.value;

	}catch(error){
		console.log(error);
	}
};

