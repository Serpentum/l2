$(document).ready(function(){
//DOM Vars
	var HEADER 		 = $('#header'),
		caruselBtn1	 = $('#select1'),
		caruselBtn2	 = $('#select2'),
		caruselBtn3	 = $('#select3'),
		reviewBox1	 = $('#review1'),
		reviewBox2	 = $('#review2'),
		reviewBox3 	 = $('#review3'),
		brgList		 = $('.navBoorgerList'),
		brgBtn		 = $('.boorger'),
		header 		 = $('.headerMain'),
		answer 		 = $('.answer'),
		questBtn 	 = $('.questBtn'),
		shareBtn 	 = $('.share'),
		navLink		 = $('navLink'),
		shareClose	 = $('.shareClose');

//Функции для DRY
//Обработчик кнопок с одноименным классом
function btnHendler(btnClass, selectorClass){
	btnClass.removeClass(selectorClass);
	$('#' + btnClass.attr('id')).addClass(selectorClass);
	console.log(btnClass.attr('id'))
}
//Двойной обработчик
$.fn.clickToggle = function(func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function() {
        var data = $(this).data();
        tc = data.toggleclicked;
        $.proxy(funcs[tc], this)();
        data.toggleclicked = (tc + 1) % 2;
    });
    return this;
};

//Скрытие бургера при клике на якорь
$(".navLink").click(function() {
	header.animate({
		height: '15vh'
	});
	brgList.removeAttr('style');
	brgBtn.css('transform', 'rotate(0deg)');
	//Сброс функции clickToggle
	brgBtn.data('toggleclicked', 0);
	//Анимация навигационного скрола	
	var scroll_el = $(this, 'a').attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
//---
});
//Управление формоми share
shareBtn.clickToggle(function(event) {
	for (var i = 0; i <= 3; i++) {
		console.log('#pS' + i)
		$('#pS' + i).fadeOut(300, function() {
			$(this).css('display', 'none')
				   .removeAttr('style');
		});
	};
	if (($(this).attr('id')) == 'share1') {
		$('#pS1').fadeIn(200, function() {
			$(this).css('display', 'block')
				   .animate({
				opacity: '1',
				bottom: '0'
			}, 200)
		});
		//Сброс функции clickToggle
		shareBtn.data('toggleclicked', 0);
	};
	if (($(this).attr('id')) == 'share2') {
		$('#pS2').fadeIn(300, function() {
			$(this).css('display', 'block')
				   .animate({
				opacity: '1',
				bottom: '0'
			}, 200)
		});
		//Сброс функции clickToggle
		shareBtn.data('toggleclicked', 0);
	};
	if (($(this).attr('id')) == 'share3') {
		$('#pS3').fadeIn(300, function() {
			$(this).css('display', 'block')
				   .animate({
				opacity: '1',
				bottom: '0'
			}, 200)
		});
		//Сброс функции clickToggle
		shareBtn.data('toggleclicked', 0);
	};
shareClose.click(function(event) {
	for (var i = 0; i <= 3; i++) {
		console.log('#pS' + i)
		$('#pS' + i).fadeOut(300, function() {
			$(this).css('display', 'none')
				   .removeAttr('style');
		});
	};
	//Сброс функции clickToggle
	shareBtn.data('toggleclicked', 0);
});
}, function(){
	for (var i = 0; i <= 3; i++) {
		console.log('#pS' + i)
		$('#pS' + i).removeClass('publicationSelect')
	}
});
//Управление формой помоши
questBtn.click(function(event) {
	questBtn.removeClass('questBtnSelected')
	$(this).addClass('questBtnSelected')
//Смены форм помощи
	if ($(this).attr('id') == "question1") {
		answer.removeAttr('style')
		$('#answer1').fadeIn(300, function() {
			$(this).css('display', 'block');
		});
	};
	if ($(this).attr('id') == "question2") {
		answer.removeAttr('style');
		$('#answer2').fadeIn(300, function() {
			$(this).css('display', 'block');
		});
	};
	if ($(this).attr('id') == "question3") {
		answer.removeAttr('style');
		$('#answer3').fadeIn(300, function() {
			$(this).css('display', 'block');
		});
	};
	if ($(this).attr('id') == "question4") {
		answer.removeAttr('style');
		$('#answer4').fadeIn(300, function() {
			$(this).css('display', 'block');
		});
	};
	if ($(this).attr('id') == "question5") {
		answer.removeAttr('style');
		$('#answer5').fadeIn(300, function() {
			$(this).css('display', 'block');
		});
	};
	if ($(this).attr('id') == "question6") {
		answer.removeAttr('style');
		$('#answer6').fadeIn(300, function() {
			$(this).css('display', 'block');
		});
	};
//---
});

//Применяем обработчик на кнопку
brgBtn.clickToggle(function() {
	header.css({
		position: 'fixed',
		background: '#fff',
		zIndex: '999',
		width: '100%'
	});
//При изменении размера view port'а сворачиваем мобильную навигацию
	window.onresize = function (){
    	header.css({
				height: '15vh'
		});
		brgList.removeAttr('style');
		brgBtn.css('transform', 'rotate(0deg)');
		//Сброс функции clickToggle
		brgBtn.data('toggleclicked', 0);
	}
//---
  	header.animate({
		height: '100vh'
	}, 200);
	brgList.css('display', 'block');
	brgList.animate({
		opacity: '1'
	}, 300)
	$(this).css('transform', 'rotate(180deg)');
}, function() {
	brgList.animate({
		opacity: '0'
	},
		300, function() {
			brgList.removeAttr('style');
			header.animate({
				height: '15vh'
			});
			brgBtn.removeAttr('style');
	});
});

caruselBtn1.click(function(event) {
	caruselBtn1.addClass('selectBtn')
	caruselBtn2.removeClass('selectBtn');
	caruselBtn3.removeClass('selectBtn');
	reviewBox3.removeClass('active');
	reviewBox2.removeClass('active');
	reviewBox1.addClass('active');
});
caruselBtn2.click(function(event) {
	caruselBtn2.addClass('selectBtn')
	caruselBtn1.removeClass('selectBtn');
	caruselBtn3.removeClass('selectBtn');
	reviewBox1.removeClass('active');
	reviewBox3.removeClass('active');
	reviewBox2.addClass('active');
});
caruselBtn3.click(function(event) {
	caruselBtn3.addClass('selectBtn')
	caruselBtn1.removeClass('selectBtn');
	caruselBtn2.removeClass('selectBtn');
	reviewBox2.removeClass('active');
	reviewBox1.removeClass('active');
	reviewBox3.addClass('active');
});

$(window).scroll(function(event) {
	var scrollTo = $(this).scrollTop() / 10;
	if (scrollTo < 1){
		HEADER.css({
			background: 'rgba(85,85,85,0)',
			position: 'relative',
			'dislay': 'block'
		});
	}
	if(scrollTo > 1 || scrollTo == 1){
		HEADER.fadeIn(1000, function() {
			HEADER.css({
				width: '100%',
				zIndex: '999',
				background: '#fff',
				borderBottom: '2px solid $color-gold',
				position: 'fixed'
			});
		});
	};
	});
});
