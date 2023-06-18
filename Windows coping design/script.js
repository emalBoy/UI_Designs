'use strict';

window.addEventListener('load' , ()=> {

    const precentElem = document.getElementById('precent');
    const title = document.getElementById('title');
    const bar = document.getElementById('bar');
    const main = document.getElementById('main');

    function writePrecent(val) {
        precentElem.innerHTML = val;
        title.innerHTML = `${val}% complete`;
        bar.style.width = `${val}%`;
    };

    var precent = 0 , speed = 100 , completed = false;

    var int = setInterval(function(){
        if(precent !== 100){
            precent++;
            writePrecent(precent);
        }else{
            completed = true;
            document.getElementById('precentMain').innerHTML = "Completed!";
            setTimeout(() => {
                clearInterval(int);
                main.style.opacity = '0%';
                main.style.marginLeft = '-150%';
            }, 1500);
        };
    },speed);

});