$('.burger').click(function () {
    $(this).toggleClass('open');
    $('.sidemenu').toggleClass('open')
});



// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}






/* type effect */
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 1px solid #333;}";
    document.body.appendChild(css);
};




$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        slideSpeed: 200,
        navigation: false,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
        // Responsive 
        responsive: true,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });

});
$(document).ready(function () {

    $("#event").owlCarousel({
        slideSpeed: 200,
        navigation: false,
        pagination: false,
        autoPlay: false,
        stopOnHover: true,
        // Responsive 
        responsive: true,
        items: 2,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });

});
$(document).ready(function () {

    $("#proshow").owlCarousel({
        slideSpeed: 200,
        navigation: false,
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
        // Responsive 
        responsive: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });

});

(function () {

    [].slice.call(document.querySelectorAll('.tabs')).forEach(function (el) {
        new CBPFWTabs(el);
    });

})();

$(document).ready(function () {
    $('.particles').particleground({
        dotColor: '#fff',
        lineColor: 'transparent'
    });
});

$(document).ready(function () {
    $('.particles2').particleground({
        dotColor: '#642c80',
        lineColor: 'transparent'
    });
});


$(document).ready(function () {
    $.doTimeout(2500, function () {
        $('.repeat.go').removeClass('go');

        return true;
    });
    $.doTimeout(2520, function () {
        $('.repeat').addClass('go');
        return true;
    });

});

