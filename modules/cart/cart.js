define(['text!./cart.html', 'css!./cart.css'], function(html) {
	function render() {
		$('.container').html(html);
	}

	function resize() {
		window.onresize = function() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
		}
	}
	return {
		render: render
//		resize: resize
	}
})