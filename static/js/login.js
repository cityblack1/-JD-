window.onload = function() {
	var aAdvice2 = getByClass(aMain, 'div', 'advice2')[0];
	var aAdvice3 = getByClass(aMain, 'div', 'advice3')[0];
	var aAdvice4 = getByClass(aMain, 'div', 'advice4')[0];
	var aForm = document.getElementById('myform');
	var aTex = aText.getElementsByTagName('input')[0];
	var aPass = aKey.getElementsByTagName('input')[0];

	var aMain = document.getElementById('main');
	var aCheck1 = getByClass(aMain, 'input', 'check1')[0];
	var aAdvice1 = getByClass(aMain, 'div', 'advice1')[0];

	var a = 1;
	aCheck1.onclick = function() {
		if (a % 2 == 1) {
			aAdvice1.style.display = "none";
			aCheck1.checked = "";
		} else {
			aAdvice1.style.display = "block";
			aCheck1.checked = "checked";
		}
		a++;
	}

	var aText = getByClass(aMain, 'div', 'text')[0];
	var aEm1 = aText.getElementsByTagName('em')[0];

	aText.onclick = function() {
		aText.style.borderColor = "#3aa2e4";
		aEm1.style.background = "url(./images/logo-in/pwd-icons-new.png) no-repeat 0 -48px";
		aEm1.style.borderRightColor = "#3aa2e4";
		aKey.style.borderColor = "#bdbdbd";
		aEm2.style.background = "url(./images/logo-in/pwd-icons-new.png) no-repeat -48px 0";
		aEm2.style.borderRightColor = "#bdbdbd";
		aAdvice4.style.display = "block";

	}


	var aKey = getByClass(aMain, 'div', 'keywords')[0];
	var aEm2 = aKey.getElementsByTagName('em')[0];

	aKey.onclick = function() {
		aKey.style.borderColor = "#3aa2e4";
		aEm2.style.background = "url(./images/logo-in/pwd-icons-new.png) no-repeat -48px -48px";
		aEm2.style.borderRightColor = "#3aa2e4";
		aText.style.borderColor = "#bdbdbd";
		aEm1.style.background = "url(./images/logo-in/pwd-icons-new.png) no-repeat 0 0";
		aEm1.style.borderRightColor = "#bdbdbd";
		aAdvice4.style.display = "none";
	}



	var EventUtil = {
		addHandler: function(element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {
				element.attachEvent("on" + type, handler);
			} else {
				element["on" + type] = null;
			}
		},
		getEvent: function(event) {
			return event ? event : window.event;
		},
		getTarget: function(event) {
			return event.target || event.srcElement;
		},
		preventDefault: function(event) {
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		},
		removeHandler: function(element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false);
			} else if (element.detachEvent) {
				element.detachEvent("on" + type, handler);
			} else {
				element["on" + type] = null;
			}
		},
		stopPropagation: function(event) {
			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelBubble = true;
			}
		}

	};
	EventUtil.addHandler(aForm, "submit", function(event) {
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
	});



}

// function login_form_submit(){
//         var autoLogin = false;
//         if ($('.check1')[0].is(':checked')){
//             autoLogin = true;
//         }
//
//         $.ajax({
//             cache: false,
//             type: 'post',
//             dataType:'json',
//             data: {
//                 autoLogin: autoLogin,
//             },
//             url:"{% url 'user:login' %}",
//             async: true,
//             beforeSend:function(xhr, settings){
//             xhr.setRequestHeader("X-CSRFToken", "{{ csrf_token }}");
//         },
//             success: function(data) {
//
//                 if(data.status == "success"){
//                     $('#jsLoginForm')[0].reset();
//                     window.location.href = data.url;
//                 }else if(data.status == "failure"){
//                     //注册账户处于未激活状态
//                     if(data.msg=='no_active'){
//                         zyemail = $accountl.val();
//                         zyUname = zyemail;
//                         $('#jsEmailToActive').html(zyemail);
//                         var url = zyemail.split('@')[1],
//                             $jsGoToEmail = $('#jsGoToEmail');
//                         $jsGoToEmail.attr("href",hash[url]);
//                         if(undefined==hash[url] || hash[url]==null){
//                             $jsGoToEmail.parent().hide();
//                         }
//                          Dml.fun.showDialog('#jsUnactiveForm');
//                     }
//                     else{
//                         $jsLoginTips.html("账号或者密码错误，请重新输入").show();
//                     }
//                 }
//
//             },
//             complete: function(XMLHttpRequest){
//                 $('.sub').val('登录');
//                 $('.sub').removeAttr("disabled");
//             }
//         });
//
//     }

