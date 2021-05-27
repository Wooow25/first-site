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



// alert('Внимание! \nСтраница не является официальнной. Ссылки на оригинальный источник указаны в футере страницы, в разделе "Подпишитесь на нас"')
