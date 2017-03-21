jQuery(document).ready(function(){
	var num = jQuery('#aside-nav ul li');
	// определяем индекс нажатого элемента
	jQuery('#aside-nav ul').on('click','li',function(){
		var n = num.index(this);
	// задаем класс 'opacity' всем элементам кроме выбраного 
		jQuery('#photo div').addClass('opacity');
		jQuery('#photo div').eq(n).removeClass('opacity');

		
		switch(n) 
		{
		case 0:
			display(); 
			jQuery('#mans div').eq(0).css('display','inline');
			break;
		case 1:
			display(); 
			jQuery('#mans div').eq(1).css('display','inline');
			break;
		case 2: 
			jQuery('#mans div').eq(2).css('display','inline');
			break;
		case 3: 
			jQuery('#mans div').eq(3).css('display','inline');
			break;
		case 4: 
			jQuery('#mans div').eq(4).css('display','inline');
			break;
		case 5: 
			jQuery('#mans div').eq(5).css('display','inline');
			break;
		case 6: 
			jQuery('#mans div').eq(6).css('display','inline');
			break;
		case 7: 
			jQuery('#mans div').eq(7).css('display','inline');
			break;						
		};
		function display(){
			if(jQuery('#mans div').is('display:none')){
				jQuery('h1').css('color','red');
			}
		}



	// зброс класса 'opacity' на всех элементах
	});
	// jQuery('header-aside-nav p').on('click',function(){
	// 	jQuery('#photo div').eq(1).removeClass('opacity');
	// });	
});
			
