function length(obj){
    return Object.keys(obj).length
};

function countMovies() {
	let counter = length(movies);
	// console.log(movies);

document.getElementById("moviesCounterAll").innerHTML = counter;
}

function updateSeenMovies (elmnt) {

		
    console.log("it: " + elmnt.getAttribute('it'));
     let itt = elmnt.getAttribute('it');
    console.log("it: " + movies[itt].seen);
     if (movies[itt].seen == 'T') {
     	movies[itt].seen = "F";
     	console.log("seen_set to false");
     	// elmnt.style.backgroundColor = "red";
     }
     else{
     	movies[itt].seen = "T";
     	console.log("seen_set to true");
     	// elmnt.style.backgroundColor = "green";
     };
     updateImg(elmnt);
     updateViewed();


}

function updateImg(elmnt) {
	let itt = elmnt.getAttribute('it');

	if (movies[itt].seen == 'T') {
		elmnt.style.backgroundColor = "#99ff66";

	}
	else {
		elmnt.style.backgroundColor = '#ff3333';
	}
}

function updateViewed(){
	let counterViewed = 0;
	for(var iter in movies) {
		
		if (movies[iter].seen == 'T')
			counterViewed++;
	}
	document.getElementById("moviesCounterSeen").innerHTML = counterViewed;
}

function createMovieList() {

	ul = document.getElementById("moviesList");

	for(var i in movies) {
		var li = document.createElement('li');

		title = document.createTextNode(movies[i].title + " (" + movies[i].year + ")");
		genre = document.createTextNode("Genre: " + movies[i].genre); 

		summaryText = document.createTextNode(movies[i].summary); 

		ul1 = document.createElement('ul');
		li1 = document.createElement('li');
		li2 = document.createElement('li');
		li3 = document.createElement('li');

		// li5 = document.createElement('li');
		div = document.createElement('div');
		summary = document.createElement('p');
		summary.setAttribute('class', 'summary');
		summary.appendChild(summaryText); 

		var oImg = document.createElement("img");
		oImg.setAttribute('src', 'eye.svg');
		oImg.setAttribute('class', 'seenImg');

		oImg.setAttribute('id', 'img_' + i);
		oImg.setAttribute('alt', 'Seen');
		oImg.setAttribute('it', i);
		oImg.setAttribute("onclick", "updateSeenMovies(this);");
		updateImg(oImg);

  		div.appendChild(summary); 
  		div.appendChild(oImg); 

  		li1.appendChild(title);
  		li1.setAttribute('class', 'title');
  		li2.appendChild(genre);
  		li3.appendChild(div);

  		ul1.setAttribute('class', 'movie');

  		ul1.appendChild(li1);
		ul1.appendChild(li2);
		ul1.appendChild(li3);

		li.appendChild(ul1);

  		ul.appendChild(li); 
	}
}
createMovieList();
countMovies();
updateViewed();

