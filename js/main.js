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

//кнопки + и -
{
    const plus = document.querySelectorAll(".plus")
    for (let i=0; i<plus.length; i++){
        plus[i].addEventListener('click', ()=>{
            parent = plus[i].closest(".count")
            let numb = parseInt(parent.children[1].value)
            parent.children[1].value=numb+1
        })
    }
    const minus = document.querySelectorAll(".minus")
    for (let i=0; i<minus.length; i++){
        minus[i].addEventListener('click', ()=>{
            parent = minus[i].closest(".count")
            let numb = parseInt(parent.children[1].value)
            if (numb!=0){
                parent.children[1].value=numb-1

            }
        })
    }
}

//добавить в корзину
{
    const addCart = document.querySelectorAll(".show-but")
    for (let i=0; i<addCart.length; i++){
        addCart[i].addEventListener('click', ()=>{
            parent = addCart[i].closest(".card-but")
            let numb = parseInt(parent.children[0].children[1].value)
            let countCart = parseInt(document.getElementById("added").innerHTML)
            document.getElementById("added").innerHTML=countCart+numb
        })
    } 
}

{
    const addLike = document.querySelectorAll(".but-like")
    for (let i=0; i<addLike.length; i++){
        addLike[i].addEventListener('click', ()=>{
            parent = addLike[i].closest(".card-but")
            const countCart = parseInt(document.getElementById("liked").innerHTML)
            addLike[i].classList.toggle("but-liked")
            if (addLike[i].classList.contains("but-liked")){
                document.getElementById("liked").innerHTML=countCart+1
            }else{
                document.getElementById("liked").innerHTML=countCart-1
            }
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

