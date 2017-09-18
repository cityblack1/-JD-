window.onload = function() {


	function show() {
		var oSlideOut = document.getElementById("slide-banner-a");
		var inow = 0;
		var a = 0
		var timer = setInterval(auto, 1);

		function auto() {
			if (inow < 220) {

				inow = inow + 2;
				oSlideOut.style.height = inow + "px";
			}
		}
		oSlideOut.style.height = "220px";
	};
	show();
	var oHead = document.getElementById("head-out");
	var oSlide = document.getElementById("slide-banner");
	var oOut = oSlide.getElementsByTagName("div")[0];
	var oNum = document.getElementById("slider-trigger-num").getElementsByTagName("a");
	oOut.onclick = function() {
		oHead.style.display = "none";
	};


	var oHImage = document.getElementById("first-screen-image");
	var oHImageChange = oHImage.getElementsByTagName("li");
	var oScreen = document.getElementById("first-screen");
	var oChange = document.getElementById("slider-page-change");
	var oPrev = document.getElementById("ui-prev");
	var oNext = document.getElementById("ui-next");
	var oSNum = document.getElementById("slider-trigger-num").getElementsByTagName('a');

	oScreen.onmouseover = function() {
		oChange.style.display = "block";
	};
	oScreen.onmouseout = function() {
		oChange.style.display = "none";
	};
	oPrev.onmouseover = function() {
		oPrev.style.background = "rgba(54,44,57,0.5)";
	}
	oNext.onmouseover = function() {
		oNext.style.background = "rgba(54,44,57,0.5)";
	}
	oPrev.onmouseout = function() {
		oPrev.style.background = "rgba(54,44,57,0.3)";
	}
	oNext.onmouseout = function() {
		oNext.style.background = "rgba(54,44,57,0.3)";
	}


	var num = 0;
	oHImageChange[num].style.zIndex = "2";

	oSNum[num].style.backgroundColor = "#b80e5e";

	oNext.onclick = function() {

		if (0 <= num && num < oHImageChange.length - 1) {

			oHImageChange[num + 1].style.zIndex = "2";
			oHImageChange[num].style.zIndex = "0";
			oSNum[num + 1].style.backgroundColor = "#b80e5e";
			oSNum[num].style.backgroundColor = "#3d3d3d";
			num++;


		} else if (num == oHImageChange.length - 1) {
			oHImageChange[0].style.zIndex = "2";
			oHImageChange[num].style.zIndex = "0";
			oSNum[0].style.backgroundColor = "#b80e5e";
			oSNum[num].style.backgroundColor = "#3d3d3d";
			num = 0;
		}

	};

	oPrev.onclick = function() {
		if (0 < num && num <= oHImageChange.length - 1) {
			oHImageChange[num - 1].style.zIndex = "2";
			oHImageChange[num].style.zIndex = "0";
			oSNum[num - 1].style.backgroundColor = "#b80e5e";
			oSNum[num].style.backgroundColor = "#3d3d3d";
			num--;
		}
		if (num == 0) {
			oSNum[oHImageChange.length - 1].style.backgroundColor = "#b80e5e";
			oSNum[0].style.backgroundColor = "#3d3d3d";
			oHImageChange[oHImageChange.length - 1].style.zIndex = "2";
			oHImageChange[0].style.zIndex = "0";
			num = oHImageChange.length - 1;
		}
	};
	oSNum[0].onmouseover = function() {
		num = 0;
		oHImageChange[0].style.zIndex = "2";
		oSNum[0].style.backgroundColor = "#b80e5e";
		for (var i = 0; i < oHImageChange.length; i++)
			if (i != 0) {
				oHImageChange[i].style.zIndex = "0";
				oSNum[i].style.backgroundColor = "#3d3d3d";
			}
	};
	oSNum[1].onmouseover = function() {
		num = 1;
		oHImageChange[1].style.zIndex = "2";
		oSNum[1].style.backgroundColor = "#b80e5e";
		for (var i = 0; i < oHImageChange.length; i++)
			if (i != 1) {
				oHImageChange[i].style.zIndex = "0";
				oSNum[i].style.backgroundColor = "#3d3d3d";
			}
	};
	oSNum[2].onmouseover = function() {
		num = 2;
		oHImageChange[2].style.zIndex = "2";
		oSNum[2].style.backgroundColor = "#b80e5e";
		for (var i = 0; i < oHImageChange.length; i++)
			if (i != 2) {
				oHImageChange[i].style.zIndex = "0";
				oSNum[i].style.backgroundColor = "#3d3d3d";
			}
	};
	oSNum[3].onmouseover = function() {
		num = 3;
		oHImageChange[3].style.zIndex = "2";
		oSNum[3].style.backgroundColor = "#b80e5e";
		for (var i = 0; i < oHImageChange.length; i++)
			if (i != 3) {
				oHImageChange[i].style.zIndex = "0";
				oSNum[i].style.backgroundColor = "#3d3d3d";
			}
	};
	oSNum[4].onmouseover = function() {
		num = 4;
		oHImageChange[4].style.zIndex = "2";
		oSNum[4].style.backgroundColor = "#b80e5e";
		for (var i = 0; i < oHImageChange.length; i++)
			if (i != 4) {
				oHImageChange[i].style.zIndex = "0";
				oSNum[i].style.backgroundColor = "#3d3d3d";
			}
	};
	oSNum[5].onmouseover = function() {
		num = 5;
		oSNum[5].style.backgroundColor = "#b80e5e";
		oHImageChange[5].style.zIndex = "2";
		for (var i = 0; i < oHImageChange.length; i++)
			if (i != 5) {
				oHImageChange[i].style.zIndex = "0";
				oSNum[i].style.backgroundColor = "#3d3d3d";
			}
	};
	var oCat = document.getElementById("categorys");

	var oContent = document.getElementById("categorys-main");

	var cW = oCat.getElementsByTagName("div")[0];
	var cWa = cW.getElementsByTagName("a")[0];

	cW.onmouseover = function() {
		oContent.style.display = "block";
		//cWa.style.background = "url(../images/top/right-ico1.png) no-repeat 55px 8px";
	};
	oContent.onmouseover = function() {
		oContent.style.display = "block";
		//cWa.style.background = "url(../images/top/right-ico1.png) no-repeat 55px 8px";
	};
	cW.onmouseout = function() {
		oContent.style.display = "none";
		//cWa.style.background = " url(../images/top/right-ico2.png) no-repeat 55px 6px";
	};
	oContent.onmouseout = function() {
		oContent.style.display = "none";
		//cWa.style.background = " url(../images/top/right-ico2.png) no-repeat 55px 6px";
	};

	var oSettleup = document.getElementById("settleup");
	var cWincon = oSettleup.getElementsByTagName("div")[0];
	var oDrop = oSettleup.getElementsByTagName("div")[1];
	cWincon.onmouseover = function() {
		oDrop.style.display = "block";
	};
	oDrop.onmouseover = function() {
		oDrop.style.display = "block";
	};
	cWincon.onmouseout = function() {
		oDrop.style.display = "none";
	};
	oDrop.onmouseout = function() {
		oDrop.style.display = "none";
	};

	var oKey = document.getElementById("key");
	oKey.onclick = function() {
		oKey.value = "";
	};
	oKey.onblur = function() {
		oKey.value = "兰蔻";
		oKey.style.color = "rgb(153, 153, 153)";
	};


	var oIborder = document.getElementsByName("images-border");


	for (var i = 0; i < oIborder.length; i++) {
		(
			function(a) {
				oIborder[a].onmouseover = function() {
					oIborder[a].style.borderColor = "#000";
				};
				oIborder[a].onmouseout = function() {
					oIborder[a].style.borderColor = "#ddd";
				}
			}
		)(i);
	}

	var oIcon = document.getElementById("icon-top1");
	var oText = document.getElementById("text-top1");
	var oTop = document.getElementById("go-top");

	oTop.onmouseover = function() {
		oIcon.style.display = "none";
		oText.style.display = "block";
	};
	oTop.onmouseout = function() {
		oIcon.style.display = "block";
		oText.style.display = "none";
	};



	function showTime() {
		var oTime = document.getElementsByName("time-limit-now");
		var iNow = new Date();
		var iNew = new Date(' December 27,2015,22:3:0');

		var t = Math.floor((iNew - iNow) / 1000);
		for (var i = 0; i < oTime.length; i++) {
			oTime[i].innerHTML = '仅剩' + Math.floor(t % 86400 / 3600) + '时' +
				Math.floor(t % 86400 % 3600 / 60) + '分' + t % 60 + '秒';
		}
	};


	setInterval(showTime, 1000);

	var oPro = document.getElementById("promotion");
	var oBody = document.getElementsByTagName('body');
	var oElevator = document.getElementById("elevator");
	var oElevatorLi = oElevator.getElementsByTagName("li");

	var oGotop = document.getElementById("go-top");
	oBody[0].onscroll = function() {

		var oHeight = document.documentElement.scrollTop || document.body.scrollTop;
		if (oHeight > 220) {
			oPro.style.display = "block";

			oGotop.style.display = "block";
		}

		if (oHeight > 800 && oHeight < 3600) {
			oElevator.style.display = "block";
			oElevatorLi[0].getElementsByTagName('a')[0].style.color = "red";
			for (var i = 0; i < oElevatorLi.length - 1; i++) {
				if (i != 0) {
					oElevatorLi[i].getElementsByTagName('a')[0].style.color = "#666";
				}
			}
		}
		if (oHeight > 3600 && oHeight < 7000) {
			oElevator.style.display = "block";
			oElevatorLi[1].getElementsByTagName('a')[0].style.color = "red";
			for (var i = 0; i < oElevatorLi.length; i++) {
				if (i != 1) {
					oElevatorLi[i].getElementsByTagName('a')[0].style.color = "#666";
				}
			}
		}
		if (oHeight > 7000 && oHeight < 7500) {
			oElevator.style.display = "block";
			oElevatorLi[2].getElementsByTagName('a')[0].style.color = "red";
			for (var i = 0; i < oElevatorLi.length; i++) {
				if (i != 2) {
					oElevatorLi[i].getElementsByTagName('a')[0].style.color = "#666";
				}
			}
		}
		if (oHeight > 8200) {
			oElevator.style.display = "block";
			oElevatorLi[3].getElementsByTagName('a')[0].style.color = "red";
			for (var i = 0; i < oElevatorLi.length; i++) {
				if (i != 3) {
					oElevatorLi[i].getElementsByTagName('a')[0].style.color = "#666";
				}
			}
		}

		if (oHeight < 800) {
			oElevator.style.display = "none";
		}
		if (oHeight <= 220) {
			oPro.style.display = "none";

			oGotop.style.display = "none";
		}
	};
	oElevatorLi[0].getElementsByTagName("a")[0].onmouseover = function() {
		oElevatorLi[0].getElementsByTagName("a")[0].style.color = "#fff";
	}
	oElevatorLi[0].getElementsByTagName("a")[0].onmouseout = function() {
		oElevatorLi[0].getElementsByTagName("a")[0].style.color = "#666";
	}

	oElevatorLi[1].getElementsByTagName("a")[0].onmouseover = function() {
		oElevatorLi[1].getElementsByTagName("a")[0].style.color = "#fff";
	}
	oElevatorLi[1].getElementsByTagName("a")[0].onmouseout = function() {
		oElevatorLi[1].getElementsByTagName("a")[0].style.color = "#666";
	}

	oElevatorLi[2].getElementsByTagName("a")[0].onmouseover = function() {
		oElevatorLi[2].getElementsByTagName("a")[0].style.color = "#fff";
	}
	oElevatorLi[2].getElementsByTagName("a")[0].onmouseout = function() {
		oElevatorLi[2].getElementsByTagName("a")[0].style.color = "#666";
	}

	oElevatorLi[3].getElementsByTagName("a")[0].onmouseover = function() {
		oElevatorLi[3].getElementsByTagName("a")[0].style.color = "#fff";
	}
	oElevatorLi[3].getElementsByTagName("a")[0].onmouseout = function() {
		oElevatorLi[3].getElementsByTagName("a")[0].style.color = "#666";
	}
};