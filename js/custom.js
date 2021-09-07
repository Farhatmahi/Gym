$(function(){
    //banner slider
    $('.banner-slider').slick({
        autoplay : true,
        arrows : false,
        dots : true
    },500)

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

})