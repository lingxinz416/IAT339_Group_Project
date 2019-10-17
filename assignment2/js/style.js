function clickMenu(){
	// var menu = document.getElementById('burger')
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('.top-menu-nav');
	var navMenus = document.querySelectorAll('.top-menu-nav li');
	// if (menu.style.display === "none") {
	// 	menu.style.display = "inline"
	// }else{
	// 	menu.style.display = "none"
	// }
	if(burger){
		burger.addEventListener('click', ()=>{
			nav.classList.toggle('nav-active');
		});
	}
	navMenus.forEach((link,index) => {
		if(link.style.animation){
			link.style.animation = '';
		}else{
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}`;
		}
		//Burger Animation
		burger.classList.toggle('toggle');
	})
}




// const navSlide =()=> {
// 	const burger = document.querySelector('.burger');
// 	const nav = document.querySelector('.top-menu-nav');
// 	const navMenus = document.querySelectorAll('.top-menu-nav li');
// 	//Toggle Nav
// 	burger.addEventListener('click', ()=>{
// 		nav.classList.toggle('nav-active');
// 	});
// 	//Animate Links
// 	navMenus.forEach((link,index) =>{
// 		if(link.style.animation){
// 			link.style.animation = '';
// 		}else{
// 			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}`;
// 		}
// 		//Burger Animation
// 		burger.classList.toggle('toggle');
// 	});
// }

// navSlide();