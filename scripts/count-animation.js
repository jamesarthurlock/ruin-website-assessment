
jQuery(document).ready(function($) {

	$triggered_times = 0;

	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 200; 


		if(y_scroll_pos > scroll_pos_test && $triggered_times == 0 ) {

			var c_one = 0;
			$(".counter_one")[0].innerHTML = 0;
			window.setInterval(function() {
			  	if(Number($(".counter_one")[0].innerHTML) < 275) {
				    $(".counter_one")[0].innerHTML = c_one;
				    c_one++;
				}
			}, 6);

			var c_two = 0;
			$(".counter_two")[0].innerHTML = 0;
			window.setInterval(function() {
			  	if(Number($(".counter_two")[0].innerHTML) < 81) {
				    $(".counter_two")[0].innerHTML = c_two;
				    c_two++;
				}
			}, 20);

			var c_three = 0;
			$(".counter_three")[0].innerHTML = 0;
			window.setInterval(function() {
			  	if(Number($(".counter_three")[0].innerHTML) < 48) {
				    $(".counter_three")[0].innerHTML = c_three;
				    c_three++;
				}
			}, 35);

			var c_four = 0;
			$(".counter_four")[0].innerHTML = 0;
			window.setInterval(function() {
			  	if(Number($(".counter_four")[0].innerHTML) < 391) {
				    $(".counter_four")[0].innerHTML = c_four;
				    c_four++;
				}
			}, 3);

			$triggered_times = 1;
		}
	});

})