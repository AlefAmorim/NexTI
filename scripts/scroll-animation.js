let cards = document.querySelectorAll(".cards")
cards.forEach(card =>{
            // card.style.opacity = 0
})

window.onscroll = (e) => {
    cards.forEach(card =>{
    if(window.scrollY === 550){
            card.classList.add("animate")
            // setTimeout(()=> {
            //     card.classList.remove("animate")
            //     // card.style.opacity = 100
            // },2000)
        }else{
            card.classList.remove("animate")
        }
    })
    console.log(document.querySelector("#section-services").getBoundingClientRect())
}