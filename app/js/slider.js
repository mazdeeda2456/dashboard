var SlidderModule = (function () {

    var slider_label = document.getElementsByClassName('slider-label');
    var title_default = document.getElementsByClassName('title-default');
    var progress = document.getElementsByClassName('progress');
    var done_element = progress[0].getElementsByClassName('done');
    var slider_label = document.getElementsByClassName('slider-label');
    
    var _sliderinit = function(){   
        title_default[0].innerHTML = 'YOUR ' +  week_array.length + ' WEEK PROGRESS';
        for(var i = 1 ; i <= week_array.length; i++){
            if(i == 6){
                progress[0].insertAdjacentHTML( 'beforeend', '<li class="done last"><span class="step"></span><span class="name">' + i + '</span></li>');
            } else if( i == 7){
                progress[0].insertAdjacentHTML( 'beforeend', '<li class="active"><span class="step"></span><span class="name">' + i + '</span></li>');
            }else if(i < 6){
                progress[0].insertAdjacentHTML( 'beforeend', '<li class="done"><span class="step"></span><span class="name">' + i + '</span></li>');
            }else{
                progress[0].insertAdjacentHTML( 'beforeend', '<li><span class="step"></span><span class="name">' +i+'</span></li>');
                
            }            
        }
        slider_label[0].innerHTML = 'Week ' + week_array[6];
    }

    var _progressup = function(){ 
        var active_element = progress[0].getElementsByClassName('active')[0];
        slider_btn_left[0].style.visibility = 'visible';
        if(done_element.length <= week_array.length - 2 && done_element.length > 0)
        {
            progress[0].getElementsByClassName('last')[0].className = 'done';
            active_element.className = 'done last';
            active_element.nextElementSibling.classList.add('active');
        }
        if(done_element.length == 0) {
            active_element.className = 'done last';
            active_element.nextElementSibling.classList.add('active');
        }
        if(done_element.length > week_array.length - 2){this.style.visibility = 'hidden'};
    }

    var _progressdown = function(){
        slider_btn_right[0].style.visibility = 'visible';
        if(done_element.length > 1){
            progress[0].getElementsByClassName('active')[0].className = '';
            done_element[done_element.length -2].className = 'done last';
            done_element[done_element.length -1].className = 'active';
        }else if (done_element.length == 1){
            progress[0].getElementsByClassName('active')[0].className = '';
            done_element[done_element.length -1].className = 'active';
            this.style.visibility = 'hidden';
        }
    }
    var _sliderlabelup = function(){
        week_initvalue = week_initvalue + 1;
        slider_label[0].innerHTML = 'Week ' + week_initvalue;
    } 

    var _sliderlabeldown = function(){
        week_initvalue = week_initvalue - 1;
        slider_label[0].innerHTML = 'Week ' + week_initvalue;
    }

    return{
        sliderinit: _sliderinit,
        progressdown: _progressdown,
        progressup: _progressup,
        sliderlabelup: _sliderlabelup,
        sliderlabeldown: _sliderlabeldown
    }
})();