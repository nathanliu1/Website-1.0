$(function() {
    var controller = new ScrollMagic.Controller();
	 var aboutTween = TweenMax.staggerFromTo('#aboutme', 0.5,
        {
            y: 50,
            x: -50,
            opacity: 0
        },
        {
            y: 0,
            x: 0,
            opacity: 1
        },
        0.2
    );
	var containerScene = new ScrollMagic.Scene({
		triggerElement: '#part2',
		offset: 100
	})
	.setTween(aboutTween)
	.addIndicators()
	.addTo(controller);
	$(document).ready(function() {
		   $('#Navigation').localScroll({duration:800});
	});
});

