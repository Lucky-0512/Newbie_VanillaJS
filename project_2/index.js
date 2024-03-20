
let slider = document.querySelectorAll(".master .container")
let arr_l = document.getElementById("arr_left")
let arr_r = document.getElementById("arr_right")

let slideIndex = 0

document.addEventListener("DOMContentLoaded",InitializeSlider)

function InitializeSlider(){
    slider[slideIndex].classList.add("display")

}


function ShowSlide(index){

    if (index >= slider.length){
        slideIndex = 0;

    }

    else if(index < 0){
        slideIndex = slider.length -1;
    }

    slider.forEach(e =>{
        e.classList.remove("display")

    })

    slider[slideIndex].classList.add("display")
}

arr_l.addEventListener("click",() =>{

    slideIndex--;
    ShowSlide(slideIndex)

})

arr_r.addEventListener("click",() =>{

    slideIndex++;
    ShowSlide(slideIndex)

})

