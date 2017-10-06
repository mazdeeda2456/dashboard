var slider_btn_left = document.getElementsByClassName('slider-btn left');
var slider_btn_right = document.getElementsByClassName('slider-btn right');
var btn_responsive_menu = document.getElementsByClassName('header_icon');
slider_btn_left[0].addEventListener('click', function(event){
    SlidderModule.progressdown.call(this);
    SlidderModule.sliderlabeldown();
    TableModule.changecontent();
});
slider_btn_right[0].addEventListener('click', function(event){
    SlidderModule.progressup.call(this);
    SlidderModule.sliderlabelup();
    TableModule.changecontent();
});
btn_responsive_menu[0].addEventListener('click', function(event){
    document.getElementsByTagName('ul')[0].classList.toggle('header-fix');
});

SlidderModule.sliderinit();

TableModule.tableinit();