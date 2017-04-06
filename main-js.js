jQuery(document).ready(function(){
	var num = jQuery('#aside-nav ul li');
	// определяем индекс нажатого элемента
	jQuery('#aside-nav ul').on('click','li',function(){
		var n = num.index(this);
	// задаем класс 'opacity' всем элементам кроме выбраного 
		jQuery('#photo div').addClass('opacity');
		jQuery('#photo div').eq(n).removeClass('opacity');
	
	// создаем конст. для добавления биографии
	// переменная dis получает индекс эл. с атр. style
		var dis = jQuery('#mans div[style]').index();
	//  конструкция добавляет новую и удаляет старую биогр.
		switch(n) 
		{
		case 0:
			jQuery('#mans div').eq(0).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 1:
			jQuery('#mans div').eq(1).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 2: 
			jQuery('#mans div').eq(2).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 3: 
			jQuery('#mans div').eq(3).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 4: 
			jQuery('#mans div').eq(4).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 5: 
			jQuery('#mans div').eq(5).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 6: 
			jQuery('#mans div').eq(6).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;
		case 7: 
			jQuery('#mans div').eq(7).css('display','inline');
			jQuery('#mans div').eq(dis).removeAttr('style');
			break;						
		};
	});
});
//=== конец скрипта для фото ================================
// Функция добавляет перекат градиента
// jQuery(document).ready(function(){
// 	var deg = 0;
// 	var timer = setInterval(function(){
// 		deg++;
// 		jQuery('#text-content').css('background-image','linear-gradient('+ deg +'deg,green,rgb(4, 67, 8)')
// 	},60000/360);
// });
//=== конец скрипат переката градиента ======================
// Скрипт для dropdown		
jQuery(document).ready(function(){
	var navMenu = jQuery("nav");
	// Устанавливаем икнонку там где есть выпадащий список
	navMenu.find("li").each(function(){
		if(jQuery(this).find("ul").length > 0) {
			jQuery("<span>").text("^").appendTo(jQuery(this).children(":first"));
	//Показываем выпадающий список
		jQuery(this).mouseenter(function(){
			jQuery(this).find("ul").stop(true,true).slideDown();
		});
	//Убираем выпадающий список
		jQuery(this).mouseleave(function(){
			jQuery(this).find("ul").stop(true,true).slideUp();
		});
		}
	});
});
//=== конец скрипта для dropdown ============================
//Скрипт для появления скрытого текстового поля 
jQuery(document).ready(function () {
	jQuery('nav img').click(showSearch);
	jQuery('nav ').mouseleave(hideSearch);
	function showSearch(){
		jQuery('nav input').animate({width:'17%'},2000);
	}
	function hideSearch(){
		jQuery('nav input').animate({width:'0px'},500);
	}
});
//=== конец скрипта для появлени текс. поля			
//Скрипт для кнопки вверх
jQuery(document).ready(function () {
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop()>100){
			jQuery('.scroll-up').fadeIn();
		} else {
			jQuery('.scroll-up').fadeOut();
		}
	});
jQuery('.scroll-up').click(function () {
	jQuery('html,body').animate({scrollTop:0},
		2600);
});	
}); 