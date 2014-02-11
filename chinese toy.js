window.onload = bindEventHandlers;
var HEALTH = $(".head__health__value").text();

function bindEventHandlers() {
	window.HEALTH = $(".head__health__value").text();
	window.cachedElements = {};
	window.cachedElements.HEAD = $(".head__health__value");
	$("#button-feed").on("click", toFeed);
	$("#button-hug").on("click", toHug);
	$("#button-play").on("click", toPlay);
	$("#revive-me").on("click", startNew);
}

function toFeed(){
	$(".head__health__value").text(parseInt($(".head__health__value").text()) + getRandom(2,4));
	$(".head__love__value").text(parseInt($(".head__love__value").text()) - getRandom(1,2));
	$(".head__happiness__value").text(parseInt($(".head__happiness__value").text()) - getRandom(1,2));
	getResult();
}

function toHug(){
	var headSelector = $(".head__health__value");
	headSelector.text(parseInt(headSelector.text()) - getRandom(0,2));
	$(".head__love__value").text(parseInt($(".head__love__value").text()) + getRandom(2,4));
	$(".head__happiness__value").text(parseInt($(".head__happiness__value").text()) - getRandom(0,2));
	getResult();
}

function toPlay(){
	$(".head__health__value").text(parseInt($(".head__health__value").text()) - getRandom(1,2));
	$(".head__love__value").text(parseInt($(".head__love__value").text()) - getRandom(1,2));
	$(".head__happiness__value").text(parseInt($(".head__happiness__value").text()) + getRandom(2,4));
	getResult();
}

function startNew(){
	location.reload();
}

function getRandom(min,max){
	return Math.floor(Math.random()*(max+1-min)+min);
}

function getResult(){
	var health = parseInt($(".head__health__value").text());
	var love = parseInt($(".head__love__value").text());
	var happiness = parseInt($(".head__happiness__value").text());
	if(health <= 0 || love <= 0 || happiness <= 0){
		if(health <= 0 && love <= 0){
			$(".HL-LV").css("display", "block");
		}else if(health <= 0 && happiness <= 0){
			$(".HL-HP").css("display", "block");
		}else if(love <= 0 && happiness <= 0){
			$(".LV-HP").css("display", "block");
		}else if(health <= 0){
			$(".HL").css("display", "block");
		}else if(love <= 0){
			$(".LV").css("display", "block");
		}else if(happiness <= 0){
			$(".HP").css("display", "block");
		}
		$(".content").css("display", "none");
		$(".rip-content").css("display", "block");
		$("#button-feed").off("click",toFeed);
		$("#button-hug").off("click",toHug);
		$("#button-play").off("click",toPlay);
	}

	if(health > 13 && health <= 17){
		if($(".content__body").css("width") == "165px"){
			$(".content").css("animation", "growStep1__content 1s");
			$(".content__body").css("animation", "growStep1__body 1s");
			$(".content__left-hand").css("animation", "growStep1__left-hand 1s");
			$(".content__right-hand").css("animation", "growStep1__right-hand 1s");
			$(".content__left").css("animation", "growStep1__left-eye 1s");
			$(".eyes").css("animation", "growStep1__eyes 1s");
			$(".content__body div:last-child").css("animation", "growStep1__mouth 1s");
			$(".content__left-leg").css("animation", "growStep1__legs 1s");

			$(".content").css("-webkit-animation", "growStep1__content 1s");
			$(".content__body").css("-webkit-animation", "growStep1__body 1s");
			$(".content__left-hand").css("-webkit-animation", "growStep1__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "growStep1__right-hand 1s");
			$(".content__left").css("-webkit-animation", "growStep1__left-eye 1s");
			$(".eyes").css("-webkit-animation", "growStep1__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "growStep1__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "growStep1__legs 1s");	
		}else if($(".content__body").css("width") == "225px"){
			$(".content").css("animation", "decrease3__content 1s");
			$(".content__body").css("animation", "decrease3__body 1s");
			$(".content__left-hand").css("animation", "decrease3__left-hand 1s");
			$(".content__right-hand").css("animation", "decrease3__right-hand 1s");
			$(".content__left").css("animation", "decrease3__left-eye 1s");
			$(".eyes").css("animation", "decrease3__eyes 1s");
			$(".content__body div:last-child").css("animation", "decrease3__mouth 1s");
			$(".content__left-leg").css("animation", "decrease3__legs 1s");

			$(".content").css("-webkit-animation", "decrease3__content 1s");
			$(".content__body").css("-webkit-animation", "decrease3__body 1s");
			$(".content__left-hand").css("-webkit-animation", "decrease3__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "decrease3__right-hand 1s");
			$(".content__left").css("-webkit-animation", "decrease3__left-eye 1s");
			$(".eyes").css("-webkit-animation", "decrease3__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "decrease3__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "decrease3__legs 1s");
		}
		$(".content").css("margin-left", "490px");
		$(".content__body").css("width", "195px").css("height", "165px");
		$(".content__left-hand").css("margin-top", "65px");
		$(".content__right-hand").css("margin-top", "75px");
		$(".content__left").css("margin-left", "75px");
		$(".eyes").css("margin-top", "60px");
		$(".content__body div:last-child").css("margin-top", "30px").css("margin-left", "55px");
		$(".content__left-leg").css("margin-left", "105px");
	}else if(health > 17 && health <= 21){
		if($(".content__body").css("width") == "195px"){
			$(".content").css("animation", "growStep2__content 1s");
			$(".content__body").css("animation", "growStep2__body 1s");
			$(".content__left-hand").css("animation", "growStep2__left-hand 1s");
			$(".content__right-hand").css("animation", "growStep2__right-hand 1s");
			$(".content__left").css("animation", "growStep2__left-eye 1s");
			$(".eyes").css("animation", "growStep2__eyes 1s");
			$(".content__body div:last-child").css("animation", "growStep2__mouth 1s");
			$(".content__left-leg").css("animation", "growStep2__legs 1s");

			$(".content").css("-webkit-animation", "growStep2__content 1s");
			$(".content__body").css("-webkit-animation", "growStep2__body 1s");
			$(".content__left-hand").css("-webkit-animation", "growStep2__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "growStep2__right-hand 1s");
			$(".content__left").css("-webkit-animation", "growStep2__left-eye 1s");
			$(".eyes").css("-webkit-animation", "growStep2__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "growStep2__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "growStep2__legs 1s");
		}else if($(".content__body").css("width") == "255px"){
			$(".content").css("animation", "decrease2__content 1s");
			$(".content__body").css("animation", "decrease2__body 1s");
			$(".content__left-hand").css("animation", "decrease2__left-hand 1s");
			$(".content__right-hand").css("animation", "decrease2__right-hand 1s");
			$(".content__left").css("animation", "decrease2__left-eye 1s");
			$(".eyes").css("animation", "decrease2__eyes 1s");
			$(".content__body div:last-child").css("animation", "decrease2__mouth 1s");
			$(".content__left-leg").css("animation", "decrease2__legs 1s");

			$(".content").css("-webkit-animation", "decrease2__content 1s");
			$(".content__body").css("-webkit-animation", "decrease2__body 1s");
			$(".content__left-hand").css("-webkit-animation", "decrease2__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "decrease2__right-hand 1s");
			$(".content__left").css("-webkit-animation", "decrease2__left-eye 1s");
			$(".eyes").css("-webkit-animation", "decrease2__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "decrease2__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "decrease2__legs 1s");
		}
		$(".content").css("margin-left", "480px");
		$(".content__body").css("width", "225px").css("height", "195px");
		$(".content__left-hand").css("margin-top", "80px");
		$(".content__right-hand").css("margin-top", "90px");
		$(".content__left").css("margin-left", "90px");
		$(".eyes").css("margin-top", "75px");
		$(".content__body div:last-child").css("margin-top", "40px").css("margin-left", "70px");
		$(".content__left-leg").css("margin-left", "120px");
	}else if(health > 21 && health <= 25){
		if($(".content__body").css("width") == "225px"){
			$(".content").css("animation", "growStep3__content 1s");
			$(".content__body").css("animation", "growStep3__body 1s");
			$(".content__left-hand").css("animation", "growStep3__left-hand 1s");
			$(".content__right-hand").css("animation", "growStep3__right-hand 1s");
			$(".content__left").css("animation", "growStep3__left-eye 1s");
			$(".eyes").css("animation", "growStep3__eyes 1s");
			$(".content__body div:last-child").css("animation", "growStep3__mouth 1s");
			$(".content__left-leg").css("animation", "growStep3__legs 1s");

			$(".content").css("-webkit-animation", "growStep3__content 1s");
			$(".content__body").css("-webkit-animation", "growStep3__body 1s");
			$(".content__left-hand").css("-webkit-animation", "growStep3__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "growStep3__right-hand 1s");
			$(".content__left").css("-webkit-animation", "growStep3__left-eye 1s");
			$(".eyes").css("-webkit-animation", "growStep3__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "growStep3__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "growStep3__legs 1s");
		}else if($(".content__body").css("width") == "285px"){
			$(".content").css("animation", "decrease1__content 1s");
			$(".content__body").css("animation", "decrease1__body 1s");
			$(".content__left-hand").css("animation", "decrease1__left-hand 1s");
			$(".content__right-hand").css("animation", "decrease1__right-hand 1s");
			$(".content__left").css("animation", "decrease1__left-eye 1s");
			$(".eyes").css("animation", "decrease1__eyes 1s");
			$(".content__body div:last-child").css("animation", "decrease1__mouth 1s");
			$(".content__left-leg").css("animation", "decrease1__legs 1s");

			$(".content").css("-webkit-animation", "decrease1__content 1s");
			$(".content__body").css("-webkit-animation", "decrease1__body 1s");
			$(".content__left-hand").css("-webkit-animation", "decrease1__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "decrease1__right-hand 1s");
			$(".content__left").css("-webkit-animation", "decrease1__left-eye 1s");
			$(".eyes").css("-webkit-animation", "decrease1__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "decrease1__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "decrease1__legs 1s");
		}
		$(".content").css("margin-left", "470px");
		$(".content__body").css("width", "255px").css("height", "225px");
		$(".content__left-hand").css("margin-top", "95px");
		$(".content__right-hand").css("margin-top", "105px");
		$(".content__left").css("margin-left", "105px");
		$(".eyes").css("margin-top", "90px");
		$(".content__body div:last-child").css("margin-top", "40px").css("margin-left", "85px");
		$(".content__left-leg").css("margin-left", "135px");
	}else if(health > 25){
		if($(".content__body").css("width") == "255px"){
			$(".content").css("animation", "growStep4__content 1s");
			$(".content__body").css("animation", "growStep4__body 1s");
			$(".content__left-hand").css("animation", "growStep4__left-hand 1s");
			$(".content__right-hand").css("animation", "growStep4__right-hand 1s");
			$(".content__left").css("animation", "growStep4__left-eye 1s");
			$(".eyes").css("animation", "growStep4__eyes 1s");
			$(".content__body div:last-child").css("animation", "growStep4__mouth 1s");
			$(".content__left-leg").css("animation", "growStep4__legs 1s");

			$(".content").css("-webkit-animation", "growStep4__content 1s");
			$(".content__body").css("-webkit-animation", "growStep4__body 1s");
			$(".content__left-hand").css("-webkit-animation", "growStep4__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "growStep4__right-hand 1s");
			$(".content__left").css("-webkit-animation", "growStep4__left-eye 1s");
			$(".eyes").css("-webkit-animation", "growStep4__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "growStep4__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "growStep4__legs 1s");
		}
		$(".content").css("margin-left", "460px");
		$(".content__body").css("width", "285px").css("height", "255px");
		$(".content__left-hand").css("margin-top", "110px");
		$(".content__right-hand").css("margin-top", "120px");
		$(".content__left").css("margin-left", "120px");
		$(".eyes").css("margin-top", "105px");
		$(".content__body div:last-child").css("margin-top", "40px").css("margin-left", "100px");
		$(".content__left-leg").css("margin-left", "150px");
	}else{
		if($(".content__body").css("width") == "195px"){
			$(".content").css("animation", "decrease4__content 1s");
			$(".content__body").css("animation", "decrease4__body 1s");
			$(".content__left-hand").css("animation", "decrease4__left-hand 1s");
			$(".content__right-hand").css("animation", "decrease4__right-hand 1s");
			$(".content__left").css("animation", "decrease4__left-eye 1s");
			$(".eyes").css("animation", "decrease4__eyes 1s");
			$(".content__body div:last-child").css("animation", "decrease4__mouth 1s");
			$(".content__left-leg").css("animation", "decrease4__legs 1s");

			$(".content").css("-webkit-animation", "decrease4__content 1s");
			$(".content__body").css("-webkit-animation", "decrease4__body 1s");
			$(".content__left-hand").css("-webkit-animation", "decrease4__left-hand 1s");
			$(".content__right-hand").css("-webkit-animation", "decrease4__right-hand 1s");
			$(".content__left").css("-webkit-animation", "decrease4__left-eye 1s");
			$(".eyes").css("-webkit-animation", "decrease4__eyes 1s");
			$(".content__body div:last-child").css("-webkit-animation", "decrease4__mouth 1s");
			$(".content__left-leg").css("-webkit-animation", "decrease4__legs 1s");
		}
		$(".content").css("margin-left", "500px");
		$(".content__body").css("width", "165px").css("height", "135px");
		$(".content__left-hand").css("margin-top", "50px");
		$(".content__right-hand").css("margin-top", "60px");
		$(".content__left").css("margin-left", "60px");
		$(".eyes").css("margin-top", "45px");
		$(".content__body div:last-child").css("margin-top", "20px").css("margin-left", "40px");
		$(".content__left-leg").css("margin-left", "90px");
	}

	if(love > 0 && love <= 3){
		if($(".content__body").css("background-color") == "rgb(0, 255, 0)"){
			$(".content__body").css("animation", "goToGreen3 1s");
			$(".content__body").css("-webkit-animation", "goToGreen3 1s");
			$(".content__body").css("background-color", "rgb(0, 64, 0)");
		}
	}else if(love > 3 && love <= 6){
		if($(".content__body").css("background-color") == "rgb(128, 255, 128)"){
			$(".content__body").css("animation", "goToGreen2 1s");
			$(".content__body").css("-webkit-animation", "goToGreen2 1s");
			$(".content__body").css("background-color", "rgb(0, 255, 0)");
		}else if($(".content__body").css("background-color") == "rgb(0, 64, 0)"){
			$(".content__body").css("animation", "goFromGreen1 1s");
			$(".content__body").css("-webkit-animation", "goFromGreen1 1s");
			$(".content__body").css("background-color", "rgb(0, 255, 0)");
		}else{
			$(".content__body").css("background-color", "rgb(0, 255, 0)");
		}
	}else if(love > 6 && love <= 9){
		if($(".content__body").css("background-color") == "rgb(255, 255, 255)"){
			$(".content__body").css("animation", "goToGreen1 1s");
			$(".content__body").css("-webkit-animation", "goToGreen1 1s");
			$(".content__body").css("background-color", "rgb(128, 255, 128)");
		}else if($(".content__body").css("background-color") == "rgb(0, 255, 0)"){
			$(".content__body").css("animation", "goFromGreen2 1s");
			$(".content__body").css("-webkit-animation", "goFromGreen2 1s");
			$(".content__body").css("background-color", "rgb(128, 255, 128)");
		}else{
			$(".content__body").css("background-color", "rgb(128, 255, 128)");
		}
	}else if(love > 9 && love <= 13){
		if($(".content__body").css("background-color") == "rgb(128, 255, 128)"){
			$(".content__body").css("animation", "goFromGreen3 1s");
			$(".content__body").css("-webkit-animation", "goFromGreen3 1s");
			$(".content__body").css("background-color", "rgb(255, 255, 255)");
		}else if($(".content__body").css("background-color") == "rgb(255, 128, 255)"){
			$(".content__body").css("animation", "goFromRed4 1s");
			$(".content__body").css("-webkit-animation", "goFromRed4 1s");
			$(".content__body").css("background-color", "rgb(255, 255, 255)");
		}else{
			$(".content__body").css("background-color", "rgb(255, 255, 255)");
		}	
	}else if(love > 13 && love <= 17){
		if($(".content__body").css("background-color") == "rgb(255, 255, 255)"){
			$(".content__body").css("animation", "goToRed1 1s");
			$(".content__body").css("-webkit-animation", "goToRed1 1s");
			$(".content__body").css("background-color", "rgb(255, 128, 255)");
		}else if($(".content__body").css("background-color") == "rgb(255, 128, 128)"){
			$(".content__body").css("animation", "goFromRed3 1s");
			$(".content__body").css("-webkit-animation", "goFromRed3 1s");
			$(".content__body").css("background-color", "rgb(255, 128, 255)");
		}else{
			$(".content__body").css("background-color", "rgb(255, 128, 255)");
		}
	}else if(love > 17 && love <= 21){
		if($(".content__body").css("background-color") == "rgb(255, 128, 255)"){
			$(".content__body").css("animation", "goToRed2 1s");
			$(".content__body").css("-webkit-animation", "goToRed2 1s");
			$(".content__body").css("background-color", "rgb(255, 128, 128)");
		}else if($(".content__body").css("background-color") == "rgb(255, 0, 128)"){
			$(".content__body").css("animation", "goFromRed2 1s");
			$(".content__body").css("-webkit-animation", "goFromRed2 1s");
			$(".content__body").css("background-color", "rgb(255, 128, 128)");
		}else{
			$(".content__body").css("background-color", "rgb(255, 128, 128)");	
		}
	}else if(love > 21 && love <= 25){
		if($(".content__body").css("background-color") == "rgb(255,"+ ggg(),+" 128)"){
			$(".content__body").css("animation", "goToRed3 1s");
			$(".content__body").css("-webkit-animation", "goToRed3 1s");
			$(".content__body").css("background-color", "rgb(255, 0, 128)");
		}else if($(".content__body").css("background-color") == "rgb(255, 0, 0)"){
			$(".content__body").css("animation", "goFromRed1 1s");
			$(".content__body").css("-webkit-animation", "goFromRed1 1s");

			setBgColorForElement($(".content__body"), 255, 0, 128)
			$(".content__body").css("background-color", "rgb(255, 0, 128)");
		}else{
			$(".content__body").css(setBgColor(255, 0, 128));
		}
	}else if(love > 25){
		if($(".content__body").css("background-color") == "rgb(255, 0, 128)"){
			$(".content__body").css("animation", "goToRed4 1s");
			$(".content__body").css("-webkit-animation", "goToRed4 1s");
			$(".content__body").css("background-color", returnProperValueForColor(255,  0, 0));
		}
	}	

	if(happiness > 15){
		if(health < 6 || love < 6){
			$(".content__body div:last-child").removeClass().addClass("sad");
		}else{
			$(".content__body div:last-child").removeClass().addClass("happy");
		}
	}else if(happiness < 6){
		$(".content__body div:last-child").removeClass().addClass("sad");
	}else{
		if(health < 6 || love < 6){
			$(".content__body div:last-child").removeClass().addClass("sad");
		}else{
			$(".content__body div:last-child").removeClass().addClass("content__mouth");
		}	
	}
}

function returnProperValueForColor(firstColor, secondColor, thirdColor) {
	return 'rgb('+firstColor+','+secondColor+','+thirdColor+')';
}

function setBgColor(firstColor, secondColor, thirdColor) {
	return "background-color" +","+ returnProperValueForColor(firstColor,  secondColor, thirdColor);
}

function setBgColorForElement(element, firstColor, secondColor, thirdColor) {
	element.css(setBgColor(firstColor, secondColor, thirdColor));
}
