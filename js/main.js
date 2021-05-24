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

//оранжевый блок
{
    document.body.addEventListener("click", () =>{
        const heightP1 = $('.first-page').height();
        console.log("height click")
        document.querySelector(".color").style.height = heightP1+80+'px';
    })
}

function orange(){
    const heightP1 = $('.first-page').height();
    console.log("height function")
    document.querySelector(".color").style.height = heightP1+80+'px';
}

orange()


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

