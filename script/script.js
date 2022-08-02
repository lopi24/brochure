
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    //Javascript for image slider manual navigation
    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');

            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
        });

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            manualNav(i);
            currentSlide = i;
        });
    });

    //Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = () => {
            setTimeout(function(){
                [...active].forEach((activeSlides) => {
                    activeSlides.classList.remove('active');
                });


                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if(slides.length == i){
                    i=0;
                }
                if(i >= slides.length){
                    return;
                }
                repeater();
            }, 5000);
        }
        repeater();
    }
    repeat();






// slide 2







var slides2 = document.querySelectorAll('.slide2');
var btns2 = document.querySelectorAll('.btn2');
let currentSlide2 = 1;

//Javascript for image slider manual navigation
var manualNav2 = function(manual2) {
    slides2.forEach((slide2) => {
        slide2.classList.remove('active2');

        btns2.forEach((btn2) => {
            btn2.classList.remove('active2');
        });
    });

    slides2[manual2].classList.add('active2');
    btns2[manual2].classList.add('active2');
}

btns2.forEach((btn2, i) => {
    btn2.addEventListener('click', () => {
        manualNav2(i);
        currentSlide2 = i;
    });
});

//Javascript for image slider autoplay navigation
var repeat2 = function(activeClass2){
    let active2 = document.getElementsByClassName('active2');
    let i = 1;

    var repeater2 = () => {
        setTimeout(function(){
            [...active2].forEach((activeSlides2) => {
                activeSlides2.classList.remove('active2');
            });


            slides2[i].classList.add('active2');
            btns2[i].classList.add('active2');
            i++;

            if(slides2.length == i){
                i=0;
            }
            if(i >= slides2.length){
                return;
            }
            repeater2();
        }, 5000);
    }
    repeater2();
}
repeat2();