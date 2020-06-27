$(function () {
    $('.specialities-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    })

    $(window).scroll(function () {
        const scroll = $(this).scrollTop()

        $('.intro-header').css('transform', 'translateY('+ scroll / 3.5 +'px)')
    })

    $('.ham-menu').on('click', function () {
        $(this).toggleClass('active')
        $('.nav__list').toggleClass('active')
    })

    $('.flowing-scroll').on('click', function(){ 
        let el = $(this);
        let dest = el.attr('href'); // получаем направление
        if(dest !== undefined && dest !== '') { // проверяем существование
            $('html, body').animate({ 
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });

    

    const $bookUpform = $('#bookUpForm')
    const $sendMessage = $('#sendMessage')
    if ($bookUpform.length) {
        $bookUpform.validate({
            rules: {
                firstname: {
                    required: true
                }
            },
            
            message: {
                required: null
            },
        })
    }
    if ($sendMessage.length) {
        $sendMessage.validate({
            rules: {
                required: true
            }
        })
    }
});