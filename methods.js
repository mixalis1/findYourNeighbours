function randomCountry(array, array2) {
	const randomNumber = Math.floor(Math.random() * array2.length-1);
	const country = array2[randomNumber].code3;
	return array[country];
}