//обёртка в скобки чтобы не было конфликтов с именами
{
    const scrollLink = document.querySelectorAll('a.scroll-link');
    for (let i=0;i<scrollLink.length;i++){
        scrollLink[i].addEventListener('click',function(event){
        // console.log(event) //просмотр всех свойств event
        event.preventDefault(); // отмена события (обновления страницы)
        const id = scrollLink[i].getAttribute('href'); //вытаскиваем id для дальнейшего обращения
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block : 'start',
        })
    });
}
}


//оранжевый фон
{
    document.querySelector(".first-page").addEventListener("click", () =>{
        const heightP1 = $('.first-page').height();
        document.querySelector(".color").style.height = heightP1+80+'px';
    })
}

//скрыть блок
const del = document.querySelector(".show-block")
function eventDel() {
    document.querySelector(".show-close").addEventListener('click',()=>{
        del.classList.add("none")  
        })
    }
eventDel()

const inputVal = document.querySelectorAll(".card-input")
for(let i=0; i<inputVal.length; i++){
    inputVal[i].value =1
    console.log(inputVal[i].value)
    } 


//блок отображающий полную информацию 
{
    const cards = document.querySelectorAll(".card")
    for (let i=0; i< cards.length; i++){
        cards[i].children[0].addEventListener('click',()=>{
            del.classList.remove("none")
            const card = document.querySelector(".show-block");
        const img = i+1
        const name = cards[i].children[1].innerHTML
        const description = cards[i].children[2].innerHTML
        const price = cards[i].children[3].innerHTML

	card.innerHTML =`
    <div class="show-wrapper-image">
        <img src="img/card${img}.png" alt="" class="show-image">
    </div>
    <div class="show-info">
        <div class="show-name">${name}</div>
        <div class="show-description">${description}</div>
        <div class="show-price">${price}</div>
        <button class="button show-but">В корзину</button>
    </div>
    <div class="show-close" >
        <img src="img/x-mark.svg" alt="" class="img-close">
    </div> 
	`;
    eventDel();
        })
    }
}


// //анимация
// $(function(){
//     $(".second-page").click(function(){
//         $(".paragr1").animate({
//         marginLeft: '250px'
//     });
//   });
// })

// $(function(){
//     $(".fourth-page").click(function(){
//         $(".cat-item").animate({
//         opacity:  '0'
//     });
//   });
// })

