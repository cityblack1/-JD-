window.onload = function() {

	getByClass = function(parent, tagName, className) {
		var aEls = parent.getElementsByTagName(tagName);
		var arr = [];
		for (var i = 0; i < aEls.length; i++) {
			var aClassName = aEls[i].className.split(' ');
			for (var j = 0; j < aClassName.length; j++) {
				if (aClassName[j] == className) {
					arr.push(aEls[i]);
					break;
				}
			}
		}
		return arr;
	}
	var aFast = document.getElementById('fastbuy');
	var aReg = document.getElementById('register');
	var aQuter = getByClass(aReg, 'div', 'quter')[0];
	var aP = aFast.getElementsByTagName('p')[0];
	var aA = aFast.getElementsByTagName('a')[0];
	var aSpan = aFast.getElementsByTagName('span')[0];


	aFast.onmouseover = function() {
		aQuter.style.display = "block";
		aFast.style.background = "#fff";
		aFast.style.border = "solid 1px #eaeaea";
		aFast.style.borderBottom = "none";
		aP.style.background = "url(./images/fastbuy/pone.png) no-repeat 0 -44px";
		aSpan.style.background = "url(./images/fastbuy/pone.png) no-repeat right 0";
	}
	aFast.onmouseout = function() {
		aQuter.style.display = "none";
		aFast.style.background = "#f1f1f1";
		aFast.style.border = "none";
		aP.style.background = "url(./images/fastbuy/pone.png) no-repeat 0 0";
		aSpan.style.background = "url(./images/fastbuy/pone.png) no-repeat right -7px";
	}
	aQuter.onmouseover = function() {
		this.style.display = "block";
		aFast.onmouseover();
	}
	aQuter.onmouseout = function() {
		this.style.display = "none";
		aFast.onmouseout();
	}
	var aMain = document.getElementById('main');
	var aMright = getByClass(aMain, 'div', 'mright')[0];
	var aMrPro = getByClass(aMright, 'div', 'pro');
	var aMrTitle = getByClass(aMright, 'ul', 'mr-title')[0];
	var oLi1 = aMrTitle.getElementsByTagName('li');

	for (var i = 0; i < oLi1.length; i++) {
		oLi1[i].index = i;
		oLi1[i].onmouseover = function() {
			for (var i = 0; i < oLi1.length; i++) {
				oLi1[i].className = "";
				this.className = "active";
				aMrPro[i].style.display = "none";
				aMrPro[this.index].style.display = "block";

			}
		}
	}



	var oProduct = getByClass(aMright, 'div', 'product');
	var oProFloat = getByClass(aMright, 'div', 'pro-float');
	var aAcProP = getByClass(aMright, 'div', 'active-pro-phone');
	for (var i = 0; i < oProduct.length; i++) {
		oProduct[i].index = i;
		oProduct[i].onmouseover = function() {
			var aDiv = getByClass(this, 'div', 'pro-float')[0];
			aDiv.style.display = "block";
		}
		oProduct[i].onmouseout = function() {
			var aDiv = getByClass(this, 'div', 'pro-float')[0];
			aDiv.style.display = "none";
		}
	}

	for (var i = 0; i < oProFloat.length; i++) {
		oProFloat[i].onmouseover = function() {
			this.style.display = "block";
			this.getElementsByTagName('div')[3].style.display = "block";
		}
		oProFloat[i].onmouseout = function() {
			this.style.display = "none";
			this.getElementsByTagName('div')[3].style.display = "none";
		}
	}

	var aMainNew = document.getElementById('mainnew');
	var oMlPro = getByClass(aMainNew, 'div', 'mleft-pro');
	for (var i = 0; i < oMlPro.length; i++) {
		oMlPro[i].index = i;
		oMlPro[i].onmouseover = function() {
			this.style.borderColor = "#c81623";
		}
		oMlPro[i].onmouseout = function() {
			this.style.borderColor = "#fff";
		}
	}

	var oLove = getByClass(aMain, 'a', 'love-href');
	for (var i = 0; i < oLove.length; i++) {
		oLove.index = i;
		oLove[i].onmouseover = function() {
			this.getElementsByTagName('span')[0].style.opacity = "1";
			this.getElementsByTagName('em')[0].style.background = "url(./images/fastbuy/love.png) no-repeat -15px 0";
			this.getElementsByTagName('p')[0].style.color = "#fb0404";
		}
		oLove[i].onmouseout = function() {
			this.getElementsByTagName('span')[0].style.opacity = "0.6";
			this.getElementsByTagName('em')[0].style.background = "url(./images/fastbuy/love.png) no-repeat 0 0";
			this.getElementsByTagName('p')[0].style.color = "#fff";
		}
	}

	var aNavFloat = document.getElementById('nav-float');
	var aBody = document.getElementsByTagName('body')[0];


	var aActive = getByClass(aMain, 'div', 'active');
	/*	var aActTi=getByClass(aMain,'div','active-title')[0];
		var oLi2=aActTi.getElementsByTagName('li');
		for (var i=0;i<oLi2.length;i++){
			oLi2[i].index=i;
			oLi2[i].onmouseover=function(){
				for(var i=0;i<oLi2.length;i++){
					oLi2[i].className="";
					aActive[i].style.display="none";
					this.className="active";
					aActive[this.index].style.display="block";
				}
			}
		}*/

	var aMainAct = document.getElementById('mainactive');
	var oPos = getByClass(aMainAct, 'div', 'pos')
	var aCon = getByClass(aMainAct, 'div', 'con');
	var aAcPro = getByClass(aMainAct, 'div', 'active-pro');
	var aAcProP = getByClass(aMainAct, 'div', 'active-pro-phone');
	for (var i = 0; i < aCon.length; i++) {
		aCon[i].index = i;
		aCon[i].onmouseover = function() {
			this.getElementsByTagName('div')[4].style.display = "block";
			this.getElementsByTagName('div')[4].style.position = "relative";
			this.getElementsByTagName('div')[4].style.top = "0";
			this.getElementsByTagName('div')[4].style.zIndex = "9";
		}
		aCon[i].onmouseout = function() {
			this.getElementsByTagName('div')[4].style.display = "none";
		}
	}


	var aTop = document.getElementById('top');
	var oLi3 = aTop.getElementsByTagName('li');
	for (var i = 0; i < oLi3.length; i++) {
		oLi3[i].onmouseover = function() {
			this.style.background = "#5d462c";
		}
		oLi3[i].onmouseout = function() {
			this.style.background = "#74532b";
		}
	}

	var aLastTime1 = getByClass(aMain, 'p', 'last-time')[0];
	var aSpan1 = aLastTime1.getElementsByTagName('span')[0];
	var timer1 = null;
	clearInterval(timer1);
	timer1 = setInterval(function() {
		var iNow = new Date();
		var stopTime = new Date("December 12,2015 24:00:00");
		var t = Math.floor((stopTime - iNow) / 1000);
		if (t >= 0) {
			aSpan1.innerHTML = '剩余' + Math.floor(t / 86400) + '天' + Math.floor(t % 86400 / 3600) + '时' + Math.floor(t % 86400 % 3600 / 60) + '分' + Math.floor(t % 60) + '秒';
		} else {
			clearInterval(timer1);
		}
	}, 1000);

	var aLastTime2 = getByClass(aMain, 'p', 'last-time')[1];
	var aSpan2 = aLastTime2.getElementsByTagName('span')[0];
	var timer2 = null;
	clearInterval(timer2);
	timer2 = setInterval(function() {
		var iNow = new Date();
		var stopTime = new Date("December 13,2015 24:00:00");
		var t = Math.floor((stopTime - iNow) / 1000);
		if (t >= 0) {
			aSpan2.innerHTML = '剩余' + Math.floor(t / 86400) + '天' + Math.floor(t % 86400 / 3600) + '时' + Math.floor(t % 86400 % 3600 / 60) + '分' + Math.floor(t % 60) + '秒';
		} else {
			clearInterval(timer2);
		}
	}, 1000);
}