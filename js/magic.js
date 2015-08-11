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
	.addTo(controller);
	 var projectTween = TweenMax.staggerFromTo('#Interview', 1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1
        },
        0.2
    );
	var projectScene = new ScrollMagic.Scene({
		triggerElement: '#part4',
		offset: 100
	})
	
	
	
	.setTween(projectTween)
	.addIndicators()
	.addTo(controller);
	
	
	
});

