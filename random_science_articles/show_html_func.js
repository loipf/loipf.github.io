alert('sS');
console.log('start');
var url = "random_science_articles/articles_dict.json";
var dic = $.getJSON(url, function (data) {
success: readData(data)
});
console.log(dic);
console.log('start2')
var art_dict = $.getJSON("random_science_articles/articles_dict.json", function(json) {
    console.log(json);
});

alert(art_dict);