

(function ($) {
"use strict";

// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();


// Initiate the wowjs
new WOW().init();


document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
    });

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});


// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});


// Header carousel
$(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Ingeniero", "Informático"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Ingeniero", "Informático"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

    // owl carousel script
$('.owl-carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    nav: true,
    dotsEach:true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});


// Pagination and filtering for portfolio
var self = this;
this.portf_currentPage = ko.observable(1);
this.elementsPerPage = 3;
this.portf_selectedCategory = ko.observable('all');
this.portf_totalPages = ko.computed(function () {
console.log("portf_selectedCategory " + self.portf_selectedCategory())
var elements;
if (self.portf_selectedCategory() == 'all') {
    elements = self.portfolios().length;
} else {
    elements = self.portfolios().filter(item => item.type == self.portf_selectedCategory()).length;
}
return Math.ceil(elements / self.elementsPerPage);
});
this.portf_pages = ko.computed(function () {
return Array.from({
    length: self.portf_totalPages()
}, (_, index) => index + 1);
});
this.port_pageController = function (targetPage) {
self.portf_currentPage(targetPage);
}

this.portf_nextPage = function () {
console.log("Next page clicked");
if (self.portf_currentPage() < self.portf_totalPages()) {
    self.portf_currentPage(self.portf_currentPage() + 1);
}
};

this.portf_prevPage = function () {
console.log("Previous page clicked");
if (self.portf_currentPage() > 1) {
    self.portf_currentPage(self.portf_currentPage() - 1);
}
};


this.portf_hasNext = ko.computed(function () {
return self.portf_currentPage() < self.portf_totalPages();
});
this.portf_hasPrev = ko.computed(function () {
return self.portf_currentPage() > 1;
});
this.portf_paginated = ko.computed(function () {
var items = [];
if (self.portf_selectedCategory() == 'all') {
    items = self.portfolios();
} else {
    items = self.portfolios().filter(item => item.type == self.portf_selectedCategory());
}
var first = (self.portf_currentPage() - 1) * self.elementsPerPage;
return items.slice(first, first + self.elementsPerPage);
});
this.portf_selectCategory = function (category) {
console.log("portf_selectCategory " + category)
self.portf_selectedCategory(category);
self.portf_currentPage(1);
self.portf_totalPages();
};

function calculateDuration(start, end) {
const diffTime = Math.abs(start - end);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
const years = Math.floor(diffDays / 365);
const months = Math.ceil((diffDays - (years * 365)) / 30);

var strDuration = "";
if (years == 0) {
    strDuration += "";
} else if (years == 1) {
    strDuration += years + " año";
} else if (years > 0) {
    strDuration += years + " años";
}

if (months > 0) {
    if (years > 0) {
        strDuration += " y ";
    }
    strDuration += months + " meses"
}

return strDuration;
}

/* ==================================================
		# Menu
		===============================================*/
		
		
		$('.menu-tab').click(function(){
			$('.menu-hide').toggleClass('show');
			$('.menu-tab').toggleClass('active');
		});
		$('.menu-hide-link').click(function(){
			$('.menu-hide').removeClass('show');
			$('.menu-tab').removeClass('active');
		});


        ! function (e) {
            "use strict";
            e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
                console.log("entra min")
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var a = e(this.hash);
                    if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
                        scrollTop: a.offset().top - 54
                    }, 1e3, "easeInOutExpo"), !1
                }
            }), e(".js-scroll-trigger").click(function () {
                e(".navbar-collapse").collapse("hide")
            }), e("body").scrollspy({
                target: "#mainNav",
                offset: 56
            });
        
            function a() {
                100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
            }
            a(), e(window).scroll(a)
        }(jQuery);

/* ==================================================
    Contact Form Validations
================================================== */

$(function() {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-message');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

});		




})(jQuery);

