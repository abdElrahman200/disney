const vedioCard = [...document.querySelectorAll('.vedio-card')];


vedioCard.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let vedio = item.children[1];
        vedio.play()
    })

    item.addEventListener('mouseleave',()=>{
        let vedio = item.children[1];
        vedio.pause()
    })

})

//cards

let cardCont = [...document.querySelectorAll('.card-cont')];
let prebtn = [...document.querySelectorAll('.pre-btn')];
let nxtbtn = [...document.querySelectorAll('.nxt-btn')];


cardCont.forEach(function(item , i){
    let contDim = item.getBoundingClientRect();
    let conWidth = contDim.width;


    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft += conWidth -200;
    })

    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft -= conWidth +200;
    })

})