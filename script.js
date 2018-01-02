function length(obj){
    return Object.keys(obj).length
};


let counter = length(movies);
console.log(movies);
// foreach(movies as movie){

// }
// for (var i = 0, len = movies.length; i < len; i++) {
//   countSeen(movies[i]);
// }


document.getElementById("moviesCounterAll").innerHTML = counter;



// selects the div with an id of placeholder
// var div = document.getElementById('placeholder');

// say that fruits contains all your data
// var fruits = ['Apples','Bananas','Pineapples','Peaches','Grapes'],
    // ul = document.createElement('ul'); // create an arbitrary ul element


function updateSeenMovies (elmnt) {
		// img = document.getElementById("id_" + i);
     // elmnt.alt = alt;
     // elmnt.src = "eye_no.svg";
  //    		elmnt.setAttribute('height', '100');
		// elmnt.setAttribute('width', '100');
		
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

	// // for(var i in movies) {
	// 		if(movies[i].seen === 'T'){ //true change to false
	// 			movies[i].seen = "F";
	// 			this
	// 		} 
	// 		else {   //false change to true

	// 		}
	// 	};

	// }
}
	function updateImg(elmnt) {
		let itt = elmnt.getAttribute('it');

		if (movies[itt].seen == 'T') {
			elmnt.style.backgroundColor = "green";

		}
		else {
			elmnt.style.backgroundColor = "red";
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





ul = document.getElementById("moviesList");
// loop through the fruits array
for(var i in movies) {
        // create an arbitrary li element
	var li = document.createElement('li');

		title = document.createTextNode("Title: " + movies[i].title);
		year = document.createTextNode("Year: " + movies[i].year); 
		genre = document.createTextNode("Genre: " + movies[i].genre); 
		summary = document.createTextNode(movies[i].summary); 
		// console.log("i: " + i);

		ul1 = document.createElement('ul');

		li1 = document.createElement('li');
		li2 = document.createElement('li');
		li3 = document.createElement('li');
		li4 = document.createElement('li');
		li5 = document.createElement('li');

		var oImg = document.createElement("img");
		oImg.setAttribute('src', 'eye.svg');
		oImg.setAttribute('id', 'img_' + i);
		oImg.setAttribute('alt', 'na');
		// oImg.setAttribute('height', '100');
		// oImg.setAttribute('width', '100');
		oImg.setAttribute('it', i);
		// oImg.onclick = function() { changeImage() };
		// oImg.setAttribute("onclick", "updateSeenMovies();");
		// oImg.addEventListener("onclick", function() {
  //   updateSeenMovies(i);
  		// var itt = i;
		 oImg.setAttribute("onclick", "updateSeenMovies(this);");
		 updateImg(oImg);
// });
		// document.body.appendChild(oImg);

  		li1.appendChild(title); 
  		li2.appendChild(year);
  		li3.appendChild(genre);
  		li4.appendChild(summary);
  		li5.appendChild(oImg);

  		ul1.appendChild(li1);
		ul1.appendChild(li2);
		ul1.appendChild(li3);
		ul1.appendChild(li4);
		ul1.appendChild(li5);

		li.appendChild(ul1);


  // li.appendChild(content); // append the created textnode above to the li element
  ul.appendChild(li); // append the created li element above to the ul element
}
updateViewed();

    // function updateSeenMovies() {
    // 	getElementById("moviesList");
        
    // }




// div.appendChild(ul); // finally the ul element to the div with an id of placeholder