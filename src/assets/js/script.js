$(function($) {
    "use strict";

    //===== 01. Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.nav-container'),
            pushedWrap = $('.nav-pushed-item'),
            pushItem = $('.nav-push-item'),
            pushedHtml = pushItem.html(),
            pushBlank = '',
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function() {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function() {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });

        navMenu.find('li a').each(function() {
            if ($(this).next().length > 0) {
                $(this)
                    .parent('li')
                    .append(
                        '<span class="dd-trigger"><i class="icofont-thin-down"></i></span>'
                    );
            }
        });
        navMenu.find('li .dd-trigger').on('click', function(e) {
            e.preventDefault();
            $(this)
                .parent('li')
                .children('ul')
                .stop(true, true)
                .slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });

        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('breakpoint-on');

                pushedWrap.html(pushedHtml);
                pushItem.hide();
            } else {
                navContainer.removeClass('breakpoint-on');

                pushedWrap.html(pushBlank);
                pushItem.show();
            }
        }

        breakpointCheck();
        var_window.on('resize', function() {
            breakpointCheck();
        });
    };

    $(document).ready(function() {
        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();
            if (scroll < 190) {
                $(".header-navigation").removeClass("sticky");
            } else {
                $(".header-navigation").addClass("sticky");
            }
        });
    });

    $(document).ready(function() {
        mainMenu();


        //====== Magnific Popup
        if (typeof $.fn.magnificPopup !== 'undefined') {
            $('.video-popup').magnificPopup({
                type: 'iframe'
                    // other options
            });
            $('.img-popup').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }

        //===== Back to top
        if ($('.back-to-top').length) {
            $(window).on('scroll', function(event) {
                if ($(this).scrollTop() > 600) {
                    $('.back-to-top').fadeIn(200)
                } else {
                    $('.back-to-top').fadeOut(200)
                }
            });

            //Animate the scroll to top
            $('.back-to-top').on('click', function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: 0,
                }, 1500);
            });
        }

        //===== counter up

        $('.counter').counterUp({
            delay: 80,
            time: 4000
        });


        // jquery nice select js
        if (typeof $.fn.niceSelect !== 'undefined' && $('select').length) {
            $('select').niceSelect();
        }

        //=====  Slick Slider js

        // Isotope js
        if (typeof $.fn.imagesLoaded !== 'undefined' && $('#project-filter').length) {
            $('#project-filter').imagesLoaded(function() {
                if (typeof $.fn.isotope !== 'undefined') {
                    // items on button click
                    $('.filter-btn').on('click', 'li', function() {
                        var filterValue = $(this).attr('data-filter');
                        items.isotope({
                            filter: filterValue
                        });
                    });
                    // menu active class
                    $('.filter-btn li').on('click', function(e) {
                        $(this).siblings('.active').removeClass('active');
                        $(this).addClass('active');
                        e.preventDefault();
                    });
                    var items = $('.products-grid').isotope();
                }
            });
        }

        // Quantity js
        $('.quantity-down').on('click', function() {
            var numProduct = Number($(this).next().val());
            if (numProduct > 0) $(this).next().val(numProduct - 1);
        });

        $('.quantity-up').on('click', function() {
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct + 1);
        });

        // page_scroll JS
        $("a.page_scroll").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                scrollToPosition(hash);
            }
        });

        function scrollToPosition(hash) {
            //Initialize Active Class
            $('body,html').animate({
                start: function() {},
                scrollTop: $(hash).offset().top,
            }, 1000, function() {
                window.location.hash = hash;
            });
        }

        // ElegantNavTabs class with existence checks
        if ($('.nav__tabs-btn').length && $('.nav__tabs-panel').length && $('.nav__tabs-indicator').length) {
            class ElegantNavTabs {
                constructor() {
                    this.currentTab = 0;
                    this.tabs = document.querySelectorAll('.nav__tabs-btn');
                    this.panels = document.querySelectorAll('.nav__tabs-panel');
                    this.indicators = document.querySelectorAll('.nav__tabs-indicator');
                    this.autoAdvanceSpeed = 4500; // Changed to 4.5 seconds
                    this.init();
                }

                init() {
                    // Tab buttons
                    this.tabs.forEach((tab, index) => {
                        tab.addEventListener('click', () => this.switchTab(index));
                    });

                    // Indicators
                    this.indicators.forEach((indicator, index) => {
                        indicator.addEventListener('click', () => this.switchTab(index));
                    });

                    // Auto-advance (faster at 4.5 seconds)
                    this.startAutoAdvance();

                    // Pause on interaction
                    const tabsContainer = document.querySelector('.nav__tabs');
                    if (tabsContainer) {
                        tabsContainer.addEventListener('mouseenter', () => this.pauseAutoAdvance());
                        tabsContainer.addEventListener('mouseleave', () => this.startAutoAdvance());
                    }

                    // Keyboard navigation
                    this.addKeyboardNavigation();
                }

                switchTab(index) {
                    if (index === this.currentTab) return;

                    // Smooth transition out
                    this.panels[this.currentTab].style.transform = 'translateY(-10px)';
                    this.panels[this.currentTab].style.opacity = '0';

                    // Remove active states
                    setTimeout(() => {
                        this.tabs[this.currentTab].classList.remove('active');
                        this.panels[this.currentTab].classList.remove('active');
                        this.indicators[this.currentTab].classList.remove('active');

                        // Set new active tab
                        this.currentTab = index;
                        this.tabs[this.currentTab].classList.add('active');
                        this.panels[this.currentTab].classList.add('active');
                        this.indicators[this.currentTab].classList.add('active');

                        // Smooth transition in
                        setTimeout(() => {
                            this.panels[this.currentTab].style.transform = 'translateY(0)';
                            this.panels[this.currentTab].style.opacity = '1';
                        }, 50);
                    }, 200);
                }

                startAutoAdvance() {
                    // Clear any existing interval first
                    this.pauseAutoAdvance();

                    // Start new interval at 4.5 seconds
                    this.autoAdvanceInterval = setInterval(() => {
                        const nextTab = (this.currentTab + 1) % this.tabs.length;
                        this.switchTab(nextTab);
                    }, this.autoAdvanceSpeed);
                }

                pauseAutoAdvance() {
                    if (this.autoAdvanceInterval) {
                        clearInterval(this.autoAdvanceInterval);
                        this.autoAdvanceInterval = null;
                    }
                }

                addKeyboardNavigation() {
                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                            e.preventDefault();
                            const direction = e.key === 'ArrowLeft' ? -1 : 1;
                            const newIndex = (this.currentTab + direction + this.tabs.length) % this.tabs.length;
                            this.switchTab(newIndex);
                        }
                    });
                }
            }

            // Initialize when elements exist
            new ElegantNavTabs();

            // Add subtle entrance animations
            if (typeof IntersectionObserver !== 'undefined') {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                });

                // Observe elements for entrance animations
                document.querySelectorAll('.nav__tabs > *').forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
                    observer.observe(el);
                });
            }
        }
    });
});