let navbar = $('navbar');

$(window).scroll(function(){
let oTop=$(".section-2")offset().top-window.innerHeight;
if($(window)scrollTop()>oTop){
  navbar.addClass("sticky");
} else{
  navbar.removeClass("sticky");
}
});


let nCount= fucntion(selector){
  $(selector).each(fucntion(){
    $(this).animate({
      Counter:$(this).text()
    },)
    duration: 4000,
    easing: "swing",
    step: fucntion(value){
      $(this).text(Math.cell(value));
    }
  });
}


let a=0;
$(window)scroll(function(){
let oTop=$(".numbers")offset().top-window.innerHeight;
if(a==0&& $(window).scrollTop()>=oTop){
  a++;
  nCount(".rect > h1");
}
})
