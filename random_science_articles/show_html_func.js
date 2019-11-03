// load in science article dictionary
function json_to_dict(url){
$.ajaxSetup({
    async: false
});

	var art_dict = [];
	$.getJSON(url, function(response) {
		art_dict = response;
	});
	return art_dict;
}

function shuffle_array(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
};



function get_art_html_box(key, value) {
	var re = '<div class="4u 12u$(medium)"> <a href="' + value + '"> <section class="box"> <h3> ' + key + '</h3> <p>' + value + '</p> </a> </section> </div>' ;
	return re;
}


function full_html_container(dict){
	rand_keys = shuffle_array(Object.keys(dict));

	for (var i = 0; i < 3; i++) {
		var key = rand_keys[i];
		document.write( get_art_html_box( key, dict[key] ) );
	}
}


var json_url = "https://raw.githubusercontent.com/loipf/loipf.github.io/master/random_science_articles/articles_dict.json";
var art_dict = json_to_dict(json_url);
console.log(art_dict);


function reroll_boxes() {
	full_html_container(art_dict);
}


reroll_boxes();









