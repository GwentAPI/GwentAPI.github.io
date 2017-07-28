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