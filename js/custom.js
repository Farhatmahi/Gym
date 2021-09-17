$(function(){
    //banner slider
    $('.banner-slider').slick({
        autoplay : true,
        arrows : false,
        dots : true
    },500)

    //gallery parallax
    $('.gallery-bg').parallax({imageSrc: 'images/gallery-bg.jpg'});
    
     //testimonial parallax
     $('.testimonial-bg').parallax({imageSrc: 'images/gallery-bg.jpg'});

     //pricing parallax
     $('.membership-plan').parallax({imageSrc: 'images/gallery-bg.jpg'});
 


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
    
   
    //counter in funfact
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //partner slider
    $('.partner-slider').slick({
        autoplay : true,
        arrows : true,
        slidesToShow : 5,
        prevArrow : '<i class="slick-prev fas fa-chevron-left left-arrow"></i>',
        nextArrow : '<i class="slick-next fas fa-chevron-right right-arrow"></i>',
        centerMode : true,
        centerPadding : '0px'
    },500)

})