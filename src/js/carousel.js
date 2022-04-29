$(document).ready(function(){

    let width = 1600;
    let count = 1;

    let list = carousel.querySelector('.carousel__gallery ul');
    let listElems = carousel.querySelectorAll('.carousel__gallery li');

    let position = 0;

    carousel.querySelector('.carousel__prev').onclick = function() {
        position += width;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
        console.log(position)
    };

    carousel.querySelector('.carousel__next').onclick = function() {
        position -= width;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
        console.log(position)
    };
});