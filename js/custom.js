$(function(){

    //back to top button
    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();

      if(scrolling > 1000){
          $('.back-to-top').fadeIn()
      }else{
          $('.back-to-top').fadeOut()
      }

      if(scrolling > 400){
          $('.navbar ul li.active').removeClass('active')
      }else{
          $('.navbar ul li:first-child').addClass('active')
      }
  })
    $('.back-to-top').click(function(){
      $('body, html').animate({
        scrollTop : 0, 
      },900)
    })

    //offcampus
    $('.offcanvas ul .default').click(function(){
      $('body').addClass('green')
    })
    $('.offcanvas ul .green').click(function(){
      $('body').addClass('green')
    })

    $('.offcanvas ul .red').click(function(){
      $('body').addClass('red')
    })
    $('.offcanvas ul .blue').click(function(){
      $('body').addClass('blue')
    })




    
    // banner slider
    $('.banner-slider').slick({
        autoplay : true,
        arrows : false,
        dots : true
    },500)

    //gallery parallax
    $('.gallery-bg').parallax({imageSrc: 'images/gallery-bg.jpg'});
    
     //testimonial parallax
     $('.testimonial-bg').parallax({imageSrc: 'images/gallery-bg.jpg'});


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
        arrows : false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })

    //testimonial slider
    $('.testimonial-slider').slick({
        slidesToShow : 2,
        slidesToScroll : 1, 
        arrows : false,
        dots : true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
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
        prevArrow : '<button class="slick-prev"><i class="fas fa-chevron-left left-arrow"></i></button>',
        nextArrow : '<button class="slick-next"><i class="fas fa-chevron-right right-arrow"></i></button>',
        centerMode : true,
        centerPadding : '0px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows : false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    },500)

    

    //preloader
    var loader = document.getElementById("preloader")
    $(window).load(function(){
      setTimeout(function(){
        loader.style.display = 'none'
      },3000)
    })

    

    
})