window.onload = bindEventHandlers;

function bindEventHandlers() {
	window.HealthSelector = $(".head__health__value");
	window.LoveSelector = $(".head__love__value");
	window.HappinessSelector = $(".head__happiness__value");
	$("#button-feed").on("click", toFeed);
	$("#button-hug").on("click", toHug);
	$("#button-play").on("click", toPlay);
	$("#revive-me").on("click", startNew);
}

function toFeed(){
	HealthSelector.text(parseInt(HealthSelector.text()) + getRandom(2,4));
	LoveSelector.text(parseInt(LoveSelector.text()) - getRandom(1,2));
	HappinessSelector.text(parseInt(HappinessSelector.text()) - getRandom(1,2));
	getResult();
}

function toHug(){
	HealthSelector.text(parseInt(HealthSelector.text()) - getRandom(0,2));
	LoveSelector.text(parseInt(LoveSelector.text()) + getRandom(2,4));
	HappinessSelector.text(parseInt(HappinessSelector.text()) - getRandom(0,2));
	getResult();
}

function toPlay(){
	HealthSelector.text(parseInt(HealthSelector.text()) - getRandom(1,2));
	LoveSelector.text(parseInt(LoveSelector.text()) - getRandom(1,2));
	HappinessSelector.text(parseInt(HappinessSelector.text()) + getRandom(2,4));
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
	var content = $(".content");
	window.body = $(".content__body");
    var bodyColor = body.css("background-color");
	var leftHand = $(".content__left-hand");
	var rightHand = $(".content__right-hand");
	var leftEye = $(".content__left");
	var eyes = $(".eyes");
	var smile = $(".content__body div:last-child");
	var leftLeg = $(".content__left-leg");
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
		content.css("display", "none");
		$(".rip-content").css("display", "block");
		$("#button-feed").off("click",toFeed);
		$("#button-hug").off("click",toHug);
		$("#button-play").off("click",toPlay);
	}


	if(health > 13 && health <= 17){
		if(body.css("width") == "165px"){
			content.css("animation", "growStep1__content 1s");
			body.css("animation", "growStep1__body 1s");
			leftHand.css("animation", "growStep1__left-hand 1s");
			rightHand.css("animation", "growStep1__right-hand 1s");
			leftEye.css("animation", "growStep1__left-eye 1s");
			eyes.css("animation", "growStep1__eyes 1s");
			smile.css("animation", "growStep1__mouth 1s");
			leftLeg.css("animation", "growStep1__legs 1s");

			content.css("-webkit-animation", "growStep1__content 1s");
			body.css("-webkit-animation", "growStep1__body 1s");
			leftHand.css("-webkit-animation", "growStep1__left-hand 1s");
			rightHand.css("-webkit-animation", "growStep1__right-hand 1s");
			leftEye.css("-webkit-animation", "growStep1__left-eye 1s");
			eyes.css("-webkit-animation", "growStep1__eyes 1s");
			smile.css("-webkit-animation", "growStep1__mouth 1s");
			leftLeg.css("-webkit-animation", "growStep1__legs 1s");
		}else if(body.css("width") == "225px"){
			content.css("animation", "decrease3__content 1s");
			body.css("animation", "decrease3__body 1s");
			leftHand.css("animation", "decrease3__left-hand 1s");
			rightHand.css("animation", "decrease3__right-hand 1s");
			leftEye.css("animation", "decrease3__left-eye 1s");
			eyes.css("animation", "decrease3__eyes 1s");
			smile.css("animation", "decrease3__mouth 1s");
			leftLeg.css("animation", "decrease3__legs 1s");

			content.css("-webkit-animation", "decrease3__content 1s");
			body.css("-webkit-animation", "decrease3__body 1s");
			leftHand.css("-webkit-animation", "decrease3__left-hand 1s");
			rightHand.css("-webkit-animation", "decrease3__right-hand 1s");
			leftEye.css("-webkit-animation", "decrease3__left-eye 1s");
			eyes.css("-webkit-animation", "decrease3__eyes 1s");
			smile.css("-webkit-animation", "decrease3__mouth 1s");
			leftLeg.css("-webkit-animation", "decrease3__legs 1s");
		}
		content.css("margin-left", "490px");
		body.css("width", "195px").css("height", "165px");
		leftHand.css("margin-top", "65px");
		rightHand.css("margin-top", "75px");
		leftEye.css("margin-left", "75px");
		eyes.css("margin-top", "60px");
		smile.css("margin-top", "30px").css("margin-left", "55px");
		leftLeg.css("margin-left", "105px");
	}else if(health > 17 && health <= 21){
		if(body.css("width") == "195px"){
			content.css("animation", "growStep2__content 1s");
			body.css("animation", "growStep2__body 1s");
			leftHand.css("animation", "growStep2__left-hand 1s");
			rightHand.css("animation", "growStep2__right-hand 1s");
			leftEye.css("animation", "growStep2__left-eye 1s");
			eyes.css("animation", "growStep2__eyes 1s");
			smile.css("animation", "growStep2__mouth 1s");
			leftLeg.css("animation", "growStep2__legs 1s");

			content.css("-webkit-animation", "growStep2__content 1s");
			body.css("-webkit-animation", "growStep2__body 1s");
			leftHand.css("-webkit-animation", "growStep2__left-hand 1s");
			rightHand.css("-webkit-animation", "growStep2__right-hand 1s");
			leftEye.css("-webkit-animation", "growStep2__left-eye 1s");
			eyes.css("-webkit-animation", "growStep2__eyes 1s");
			smile.css("-webkit-animation", "growStep2__mouth 1s");
			leftLeg.css("-webkit-animation", "growStep2__legs 1s");
		}else if(body.css("width") == "255px"){
			content.css("animation", "decrease2__content 1s");
			body.css("animation", "decrease2__body 1s");
			leftHand.css("animation", "decrease2__left-hand 1s");
			rightHand.css("animation", "decrease2__right-hand 1s");
			leftEye.css("animation", "decrease2__left-eye 1s");
			eyes.css("animation", "decrease2__eyes 1s");
			smile.css("animation", "decrease2__mouth 1s");
			leftLeg.css("animation", "decrease2__legs 1s");

			content.css("-webkit-animation", "decrease2__content 1s");
			body.css("-webkit-animation", "decrease2__body 1s");
			leftHand.css("-webkit-animation", "decrease2__left-hand 1s");
			rightHand.css("-webkit-animation", "decrease2__right-hand 1s");
			leftEye.css("-webkit-animation", "decrease2__left-eye 1s");
			eyes.css("-webkit-animation", "decrease2__eyes 1s");
			smile.css("-webkit-animation", "decrease2__mouth 1s");
			leftLeg.css("-webkit-animation", "decrease2__legs 1s");
		}
		content.css("margin-left", "480px");
		body.css("width", "225px").css("height", "195px");
		leftHand.css("margin-top", "80px");
		rightHand.css("margin-top", "90px");
		leftEye.css("margin-left", "90px");
		eyes.css("margin-top", "75px");
		smile.css("margin-top", "40px").css("margin-left", "70px");
		leftLeg.css("margin-left", "120px");
	}else if(health > 21 && health <= 25){
		if(body.css("width") == "225px"){
			content.css("animation", "growStep3__content 1s");
			body.css("animation", "growStep3__body 1s");
			leftHand.css("animation", "growStep3__left-hand 1s");
			rightHand.css("animation", "growStep3__right-hand 1s");
			leftEye.css("animation", "growStep3__left-eye 1s");
			eyes.css("animation", "growStep3__eyes 1s");
			smile.css("animation", "growStep3__mouth 1s");
			leftLeg.css("animation", "growStep3__legs 1s");

			content.css("-webkit-animation", "growStep3__content 1s");
			body.css("-webkit-animation", "growStep3__body 1s");
			leftHand.css("-webkit-animation", "growStep3__left-hand 1s");
			rightHand.css("-webkit-animation", "growStep3__right-hand 1s");
			leftEye.css("-webkit-animation", "growStep3__left-eye 1s");
			eyes.css("-webkit-animation", "growStep3__eyes 1s");
			smile.css("-webkit-animation", "growStep3__mouth 1s");
			leftLeg.css("-webkit-animation", "growStep3__legs 1s");
		}else if(body.css("width") == "285px"){
			content.css("animation", "decrease1__content 1s");
			body.css("animation", "decrease1__body 1s");
			leftHand.css("animation", "decrease1__left-hand 1s");
			rightHand.css("animation", "decrease1__right-hand 1s");
			leftEye.css("animation", "decrease1__left-eye 1s");
			eyes.css("animation", "decrease1__eyes 1s");
			smile.css("animation", "decrease1__mouth 1s");
			leftLeg.css("animation", "decrease1__legs 1s");

			content.css("-webkit-animation", "decrease1__content 1s");
			body.css("-webkit-animation", "decrease1__body 1s");
			leftHand.css("-webkit-animation", "decrease1__left-hand 1s");
			rightHand.css("-webkit-animation", "decrease1__right-hand 1s");
			leftEye.css("-webkit-animation", "decrease1__left-eye 1s");
			eyes.css("-webkit-animation", "decrease1__eyes 1s");
			smile.css("-webkit-animation", "decrease1__mouth 1s");
			leftLeg.css("-webkit-animation", "decrease1__legs 1s");
		}
		content.css("margin-left", "470px");
		body.css("width", "255px").css("height", "225px");
		leftHand.css("margin-top", "95px");
		rightHand.css("margin-top", "105px");
		leftEye.css("margin-left", "105px");
		eyes.css("margin-top", "90px");
		smile.css("margin-top", "40px").css("margin-left", "85px");
		leftLeg.css("margin-left", "135px");
	}else if(health > 25){
		if(body.css("width") == "255px"){
			content.css("animation", "growStep4__content 1s");
			body.css("animation", "growStep4__body 1s");
			leftHand.css("animation", "growStep4__left-hand 1s");
			rightHand.css("animation", "growStep4__right-hand 1s");
			leftEye.css("animation", "growStep4__left-eye 1s");
			eyes.css("animation", "growStep4__eyes 1s");
			smile.css("animation", "growStep4__mouth 1s");
			leftLeg.css("animation", "growStep4__legs 1s");

			content.css("-webkit-animation", "growStep4__content 1s");
			body.css("-webkit-animation", "growStep4__body 1s");
			leftHand.css("-webkit-animation", "growStep4__left-hand 1s");
			rightHand.css("-webkit-animation", "growStep4__right-hand 1s");
			leftEye.css("-webkit-animation", "growStep4__left-eye 1s");
			eyes.css("-webkit-animation", "growStep4__eyes 1s");
			smile.css("-webkit-animation", "growStep4__mouth 1s");
			leftLeg.css("-webkit-animation", "growStep4__legs 1s");
		}
		content.css("margin-left", "460px");
		body.css("width", "285px").css("height", "255px");
		leftHand.css("margin-top", "110px");
		rightHand.css("margin-top", "120px");
		leftEye.css("margin-left", "120px");
		eyes.css("margin-top", "105px");
		smile.css("margin-top", "40px").css("margin-left", "100px");
		leftLeg.css("margin-left", "150px");
	}else{
		if(body.css("width") == "195px"){
			content.css("animation", "decrease4__content 1s");
			body.css("animation", "decrease4__body 1s");
			leftHand.css("animation", "decrease4__left-hand 1s");
			rightHand.css("animation", "decrease4__right-hand 1s");
			leftEye.css("animation", "decrease4__left-eye 1s");
			eyes.css("animation", "decrease4__eyes 1s");
			smile.css("animation", "decrease4__mouth 1s");
			leftLeg.css("animation", "decrease4__legs 1s");

			content.css("-webkit-animation", "decrease4__content 1s");
			body.css("-webkit-animation", "decrease4__body 1s");
			leftHand.css("-webkit-animation", "decrease4__left-hand 1s");
			rightHand.css("-webkit-animation", "decrease4__right-hand 1s");
			leftEye.css("-webkit-animation", "decrease4__left-eye 1s");
			eyes.css("-webkit-animation", "decrease4__eyes 1s");
			smile.css("-webkit-animation", "decrease4__mouth 1s");
			leftLeg.css("-webkit-animation", "decrease4__legs 1s");
		}
		content.css("margin-left", "500px");
		body.css("width", "165px").css("height", "135px");
		leftHand.css("margin-top", "50px");
		rightHand.css("margin-top", "60px");
		leftEye.css("margin-left", "60px");
		eyes.css("margin-top", "45px");
		smile.css("margin-top", "20px").css("margin-left", "40px");
		leftLeg.css("margin-left", "90px");
	}

	if(love > 0 && love <= 3) {
		if(bodyColor == 'rgb(0, 255, 0)') {
			body.addClass('goToGreen3');
			setTimeout(function () {
          		body.removeClass('goToGreen3');
         	}, 1000);
			setBgColorForElement(body, 0, 64, 0);
		}
	}else if(love > 3 && love <= 6) {
		if(bodyColor == 'rgb(128, 255, 128)') {
			body.addClass('goToGreen2');
			setTimeout(function () {
          		body.removeClass('goToGreen2');
         	}, 1000);
			setBgColorForElement(body, 0, 255, 0);
		}else if(bodyColor == 'rgb(0, 64, 0)') {
			body.addClass('goFromGreen1');
			setTimeout(function () {
          		body.removeClass('goFromGreen1');
         	}, 1000);
			setBgColorForElement(body, 0, 255, 0);
		}else{
			setBgColorForElement(body, 0, 255, 0);
		}
	}else if(love > 6 && love <= 9) {
		if(bodyColor == 'rgb(255, 255, 255)') {
			body.addClass('goToGreen1');
			setTimeout(function () {
          		body.removeClass('goToGreen1');
         	}, 1000);
			setBgColorForElement(body, 128, 255, 128);
		}else if(bodyColor == 'rgb(0, 255, 0)') {
			body.addClass('goFromGreen2');
			setTimeout(function () {
          		body.removeClass('goFromGreen2');
         	}, 1000);
			setBgColorForElement(body, 128, 255, 128);
		}else{
			setBgColorForElement(body, 128, 255, 128);
		}
	}else if(love > 9 && love <= 13) {
		if(bodyColor == 'rgb(128, 255, 128)') {
			body.addClass('goFromGreen3');
			setTimeout(function () {
          		body.removeClass('goFromGreen3');
         	}, 1000);
			setBgColorForElement(body, 255, 255, 255);
		}else if(bodyColor == 'rgb(255, 128, 255)') {
			body.addClass('goFromRed4');
			setTimeout(function () {
          		body.removeClass('goFromRed4');
         	}, 1000);
			setBgColorForElement(body, 255, 255, 255);
		}else{
			setBgColorForElement(body, 255, 255, 255);
		}	
	}else if(love > 13 && love <= 17) {
		if(bodyColor == 'rgb(255, 255, 255)') {
			body.addClass('goToRed1');
			setTimeout(function () {
          		body.removeClass('goToRed1');
         	}, 1000);
			setBgColorForElement(body, 255, 128, 255);
		}else if(bodyColor == 'rgb(255, 128, 128)') {
			body.addClass('goFromRed3');
			setTimeout(function () {
          		body.removeClass('goFromRed3');
         	}, 1000);
			setBgColorForElement(body, 255, 128, 255);
		}else{
			setBgColorForElement(body, 255, 128, 255);
		}
	}else if(love > 17 && love <= 21) {
		if(bodyColor == 'rgb(255, 128, 255)') {
			body.addClass('goToRed2');
			setTimeout(function () {
          		body.removeClass('goToRed2');
         	}, 1000);
			setBgColorForElement(body, 255, 128, 128);
		}else if(bodyColor == 'rgb(255, 0, 128)') {
			body.addClass('goFromRed2');
			setTimeout(function () {
          		body.removeClass('goFromRed2');
         	}, 1000);
			setBgColorForElement(body, 255, 128, 128);
		}else{
			setBgColorForElement(body, 255, 128, 128);
		}
	}else if(love > 21 && love <= 25) {
		if(bodyColor == 'rgb(255, 128, 128)') {
			body.addClass('goToRed3');
			setTimeout(function () {
          		body.removeClass('goToRed3');
         	}, 1000);
			setBgColorForElement(body, 255, 0, 128);
		}else if(bodyColor == 'rgb(255, 0, 0)') {
			body.addClass('goFromRed1');
			setTimeout(function () {
          		body.removeClass('goFromRed1');
         	}, 1000);
			setBgColorForElement(body, 255, 0, 128);
		}else{
			setBgColorForElement(body, 255, 0, 128);
		}
	}else if(love > 25) {
		if(bodyColor == 'rgb(255, 0, 128)') {
			body.addClass('goToRed4');
			setTimeout(function () {
          		body.removeClass('goToRed4');
         	}, 1000);
			setBgColorForElement(body, 255, 0, 0);
		}
	}	

	if(happiness > 15) {
		if(health < 6 || love < 6) {
			smile.removeClass().addClass("sad");
		}else{
			smile.removeClass().addClass("happy");
		}
	}else if(happiness < 6) {
		smile.removeClass().addClass("sad");
	}else{
		if(health < 6 || love < 6) {
			smile.removeClass().addClass("sad");
		}else{
			smile.removeClass().addClass("content__mouth");
		}	
	}
}

function returnProperValueForColor(firstColor, secondColor, thirdColor) {
	return 'rgb('+firstColor+','+secondColor+','+thirdColor+')';
}

function setBgColorForElement(element, firstColor, secondColor, thirdColor) {
	element.css('background-color', returnProperValueForColor(firstColor, secondColor, thirdColor));
}