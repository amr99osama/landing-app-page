$(document).ready(function(){
  AOS.init();
    $(".owl-carousel-1").owlCarousel(
        {
            loop:true,
            margin:10,
            autoplay:true,
            nav:false,
            autoplaySpeed: 700,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        }
    );

    $(".owl-carousel-2").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        items: 1,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        onChanged: function (elem) {
         var x = elem.item.index 
         var slidesSrc = $(elem.target).find(".owl-item").eq(x).find(".test-img").attr('src');
          var specialImages = document.querySelectorAll('.global-map img');
          for(let i = 0 ; i < specialImages.length; i++)
          {
              if(slidesSrc === specialImages[i].getAttribute('src'))
              {
                specialImages[i].classList.add('activeSlide');
              }
              else 
              {
                specialImages[i].classList.remove('activeSlide');
              }
          }
        }
    })      
    $(window).on('load' ,function(){
        $('body').css('overflow','hidden')
        $('.loader-inner').fadeOut(2000,function()
        {
        $('.preloader').delay(200).fadeOut(700);
        $('body').css('overflow','auto')
        });
        });
    /// toggle between activ class in collapse class
    $('.collapse-flow').on('click', '.btn-collapse', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if($('.btn-collapse').hasClass('btn-monthly active')){
            $('.collapse-1').addClass('show')
            $('.collapse-2').removeClass('show')
        }
        else {
            $('.collapse-2').addClass('show')
            $('.collapse-1').removeClass('show')
    
        }
      });
      //// sidebar activation
      $('.sidebar-opening').on('click',function(){
          $('#sidebar').addClass('active')
      })

      //// sidebar dis-activation
      $('#sidebar .dismiss').on('click',function(){
        $('#sidebar').removeClass('active')
    })
  
    
  
});
