// load in science article dictionary
var art_dict = $.getJSON("https://raw.githubusercontent.com/loipf/loipf.github.io/master/random_science_articles/articles_dict.json");
alert(art_dict);

console.log(art_dict);

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

function get_random_elements(dict){
	//var tmp_dict = shuffle_dict(dict);
	var tmp_dict = dict;	
	var re1 = Object.keys(tmp_dict)[0];
	var re2 = Object.keys(tmp_dict)[1];
	var re3 = Object.keys(tmp_dict)[2];
	return [re1, re2, re3];
};

function shuffle_dict(dict) {
    return shuffle(Object.keys(dict));
};


//var rand_ele = get_random_elements(art_dict.keys);
// document.write('<p> js strac </p>');


function get_art_html_box(key, dict) {
	console.log('html_box');
	console.log(Object.keys(dict) );
	console.log(dict.keys);
	console.log(key);
	console.log(dict);
	var re = '<div class="row 150%"> <div class="4u 12u$(medium)"> <a href="https://github.com/loipf"> <section class="box"> <h3> ' + key + '</h3> </a> <p>' + dict[key] + '</p> </section> </div> </div>' ;
	return re;
}


function full_html_container(dict){
	document.write( get_art_html_box( Object.keys(art_dict)[0], art_dict) );
	document.write( get_art_html_box( Object.keys(art_dict)[1], art_dict) );
	document.write( get_art_html_box( Object.keys(art_dict)[2], art_dict) );
}


full_html_container(art_dict);






