function loadMeteo() {
	console.log("loadMeteo");
	let api_key = '6a3af1a2ffbb9904b1ffaf4b0848d2a1';
	let url = 'http://api.openweathermap.org/data/2.5/weather?q=Montreal,  ca&mode=json&units=metric&appid=' + api_key;
	fetch(url).then(reponse => reponse.json())
		.then(data => afficheJSON(data));
}

function afficheJSON(objJSON) {
	console.log(objJSON);
	let contenu = "<h3>Météo</h3>";
	contenu += "<div>Ville: " + objJSON.name + "<br/>";
	contenu += objJSON.main.temp + " &#8451;<br/>";
	contenu += "<img src='http://openweathermap.org/img/w/" + objJSON.weather[0].icon + ".png'></div>";
	console.log(JSON);
	document.getElementById("meteo").innerHTML = contenu;
}

function menu(){
    document.getElementsByTagName("nav")[0].classList.toggle("show");
}

function loadArticle(url) {
	fetch(url)
		.then(reponse => reponse.text())
		.then(function (html) {
			document.getElementById("article").innerHTML = html;
		});
}


loadMeteo();
loadArticle('accueil');