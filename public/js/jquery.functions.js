$(document).ready(function(){
// -------------------------- //

// ==================== Dropdown toggle =================== //

$('.dropdown-submenu').hover(function(){
	$(this).find('.dropdown-menu').first().slideToggle();
});

// ==================== Active Popover ==================== //

$('.popover-active').popover({
	html: true
}).click(function(evt){
	evt.stopPropagation();
	$(this).popover('show')
});

$('html').click(function(){
	$('.popover-active').popover('hide');
});


// ==================== Active Tooltip ==================== //

$('.tooltip-active').tooltip();


// ==================== Activate Carousel ==================== //

$('.carousel').carousel('pause');
$('#portfolio-single').carousel();


// ==================== Activate Filterable Portfolio ==================== //

$('#portfolio-list').filterable();

// ==================== Activate Tabs ==================== //

$('#myTab a, #myTab2 a').click(function (e) {
	e.preventDefault();
	$(this).tab('show');
});


// ==================== Thumbnails ==================== //

$('.thumbnail').find('img').wrap('<div class="overflow">');
$('.thumbnail').find('.overflow').prepend('<div class="color">');
$('.thumbnail-link').find('.overflow').prepend('<span class="icon">È</span>');
$('.thumbnail-img').find('.overflow').prepend('<span class="icon">N</span>');


// ==================== Headings ==================== //

$('.heading').wrapInner('<span>')


// ==================== Accordion chevron ==================== //

$('.accordion-chevron').find('.accordion-toggle').prepend('<span class="icon">=</span>')

$('.accordion-chevron').find('.accordion-group').on('show', function (e) {
	$(e.target).prev('.accordion-heading').find('.icon').remove();
	$(e.target).prev('.accordion-heading').find('.accordion-toggle').prepend('<span class="icon icon-rotate">=</span>')
});

$('.accordion-chevron').find('.accordion-group').on('hide', function (e) {
	$(this).find('.icon').not($(e.target)).remove();
	$(e.target).prev('.accordion-heading').find('.accordion-toggle').prepend('<span class="icon">=</span>')
});


// ==================== Slider carouFredSel ==================== //

$('#carouFredSel').carouFredSel({
	auto: true,
	prev: '#prev2',
	next: '#next2',
	mousewheel: true,
	responsive: true,
	items: {
		height: 'variable'
	},
	swipe: {
		onMouse: true,
		onTouch: true
	}
});


// ==================== Nivo Slider ==================== //

$('#NivoSlider').nivoSlider({
    effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
    slices: 15, // For slice animations
    boxCols: 8, // For box animations
    boxRows: 4, // For box animations
    animSpeed: 500, // Slide transition speed
    pauseTime: 3000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: true, // Next & Prev navigation
    controlNav: true, // 1,2,3... navigation
    controlNavThumbs: true, // Use thumbnails for Control Nav
    pauseOnHover: true, // Stop animation while hovering
    manualAdvance: false, // Force manual transitions
    prevText: 'Cofnij', // Prev directionNav text
    nextText: 'Dalej', // Next directionNav text
    randomStart: false, // Start on a random slide
    beforeChange: function(){}, // Triggers before a slide transition
    afterChange: function(){}, // Triggers after a slide transition
    slideshowEnd: function(){}, // Triggers after all slides have been shown
    lastSlide: function(){}, // Triggers when last slide is shown
    afterLoad: function(){} // Triggers when slider has loaded
});


$('.categories').find('li').prepend('<span class="icon">=</span>');



$('.meta').find('a').hover(
	function() {
		$(this).find('i').addClass('icon-white');
	},
	function() {
		$(this).find('i').removeClass('icon-white');
	}
);



$('.lightbox').attr('data-gallery', 'gallery').wrap('<div data-toggle="modal-gallery" data-target="#modal-gallery">');

$('.image-gallery')
	.attr('data-toggle', 'modal-gallery')
	.attr('data-target', '#modal-gallery')
	.find('a')
	.attr('data-gallery', 'gallery');



$(window).scroll(function(){
	if($(this).scrollTop() > 150) {
		$('#ToTop').fadeIn();
	} else {
		$('#ToTop').fadeOut();
	}
});

$('#ToTop').click(function(){
	$('body,html').animate({scrollTop:0}, 1000);
});


// -------------------------- //
});