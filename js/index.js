var host = "https://api.gwentapi.com";

function listResources(){
	var url = host + "/v0";

	$("#ListResourceExampleLink").attr("href", url);
	$("#ListResourceExampleLink").text(url);

	$.getJSON(url, function(data, status){
		var text = JSON.stringify(data, null, 4);
		$("#ListResourceExample").text(text);
	});
}

function retrieveCard(){
	var url = host + "/v0/cards/w2vI6R7qShKzShyZXWpGIQ";

	$("#RetrieveCardLink").attr("href", url);
	$("#RetrieveCardLink").text(url);

	$.getJSON(url, function(data, status){
		var text = JSON.stringify(data, null, 4);
		$("#RetrieveCard").text(text);
	});
}

function retrieveCards(){
	var url = host + "/v0/cards";

	$("#ListCardsLink").attr("href", url);
	$("#ListCardsLink").text(url);

	$.getJSON(url + "?limit=2&offset=0", function(data, status){
		var text = JSON.stringify(data, null, 4);
		$("#ListCards").text(text);
	});
}


function scrollFireInit() {
    var options = [
      {selector: '#staggered-getStarted', offset: -10, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } }
    ];
    Materialize.scrollFire(options);
}



$(document).ready(function() {
	$(".button-collapse").sideNav();
	listResources();
	retrieveCard();
	retrieveCards();
	scrollFireInit();
	$('.modal').modal();
});