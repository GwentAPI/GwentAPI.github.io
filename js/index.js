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
});