$(function(){
    //banner slider
    $('.banner-slider').slick({
        autoplay : true,
        arrows : false,
        dots : true
    },500)

    //gallery parallax
    $('.gallery-bg').parallax({imageSrc: '../images/gallery-bg.jpg'});


    //about video popup
    $('.venobox').venobox({
        closeColor : '#ffffff',
        autoplay : true,
        closeBackground : '#e23e38'
    })

    //team slider
    $('.team-slider').slick({
        slidesToShow : 4,
        slidesToScroll : 1,
        arrows : false
    })

    //testimonial slider
    $('.testimonial-slider').slick({
        slidesToShow : 2,
        slidesToScroll : 1, 
        arrows : false,
        dots : true,
        autoplay: true
    },800)
    
    //testimonial parallax
    $('.testimonial-bg').parallax({imageSrc: '../images/gallery-bg.jpg'});

    //pricing parallax
    $('.membership-plan').parallax({imageSrc: '../images/gallery-bg.jpg'});

})