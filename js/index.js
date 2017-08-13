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
	scrollFireInit();
	$('.modal').modal();

	$.ajax({
		method: "GET",
		url: "https://api.gwentapi.com/v0",
		dataType: 'json',
		success: function(data){
			$( "#version" ).attr("data-badge-caption", data.version);
		},
		error: function(jq, text, error){
			console.log(text);
		}
	});
});