/* .customer-list : lop bao ngoai */
$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1 /* scroll 1 cai */,
  dots: true,
  prevArrow:`<button type='button' class='slick-prev pull-left'><img src="./images/arrow-left.svg" /></button>`, 
  nextArrow:`<button type='button' class='slick-next pull-right'><img src="./images/arrow-right.svg" /></button>`,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
});
