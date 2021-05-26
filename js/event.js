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



const mySwiper = new Swiper('.swiper-container', {
	loop: true,
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
      delay: 1500,
  },
	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});