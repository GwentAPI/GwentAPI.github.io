var host = "http://localhost:8080";

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
	var url = host + "/v0/cards/triss-mistress-of-magic";

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



$(document).ready(function() {
	listResources();
	retrieveCard();
	retrieveCards();

});