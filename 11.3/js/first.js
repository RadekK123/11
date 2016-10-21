
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var table =$('#table tr');

$('#search').click(searchCountries);

function searchCountries () {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
		

	$.ajax ({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList (resp) {
	countriesList.empty();

	resp.forEach(function (elem) {

		$('<li>').text(elem.name).appendTo(countriesList);
		$('<li>').text('Capital').appendTo(countriesList);
		$('<li>').text(elem.capital).appendTo(countriesList);
		$('<li>').text('Population').appendTo(countriesList);
		$('<li>').text(elem.population).appendTo(countriesList);
		$('<li>').text('Area').appendTo(countriesList);
		$('<li>').text(elem.area).appendTo(countriesList);
		$('<li>').text('Region').appendTo(countriesList);
		$('<li>').text(elem.region).appendTo(countriesList);
		$('<li>').text('Subregion').appendTo(countriesList);
		$('<li>').text(elem.subregion).appendTo(countriesList);
		$('<li>').text('AltSpellings').appendTo(countriesList);
		$('<li>').text(elem.altSpellings[2]).appendTo(countriesList);
		$('<li>').text('Nativename').appendTo(countriesList);
		$('<li>').text(elem.nativeName).appendTo(countriesList);
		$('<li>').text('TopLevelDomain').appendTo(countriesList);
		$('<li>').text(elem.topLevelDomain).appendTo(countriesList);
		$('<li>').text('CallingCodes').appendTo(countriesList);
		$('<li>').text(elem.callingCodes[0]).appendTo(countriesList);
	});
}
