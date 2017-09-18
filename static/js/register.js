$(function() {
	/*顶部下拉菜单显示隐藏*/
	(function() {
		$('#biz-service').hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
		$('#site-nav').hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
	})();

	/*用户名验证*/
	(function() {
		$('#regName').focus(function() {
			$(this).removeClass('highlight2').addClass('highlight1');
			$('#regName_succeed').removeClass('succeed');
			$('#regName_error').removeClass('error').addClass('focus').html('4-20位字符,支持汉字、字母、数字及"-"、"_"组合');
		}).blur(function() {
			if ($(this).val().length >= 4 && $(this).val().length <= 20) {
				$.ajax({
					url: '',
					type: 'GET',
					data: 'username=' + $('#regName').val(),
					success: function(data) {
						if (data.status == 'success') {
							$('#regName').removeClass('highlight1');
							$('#regName_succeed').addClass('succeed');
							// $('#regName_error').removeClass('focus').html('');
							$('#regName_error').removeClass('focus').addClass('focus').html('该用户名可以使用');
							$('#registsubmit').attr('disabled', false);
						} else {
							$('#regName').removeClass('highlight1').addClass('highlight2');
							$('#regName_succeed').removeClass('succeed');
							$('#regName_error').removeClass('focus').addClass('error').html('该用户名已被使用，请重新输入。');
							$('#registsubmit').attr('disabled', true);
						}
					}
				});
			} else if ($(this).val() == '') {
				$(this).removeClass('highlight1');
				$('#regName_error').removeClass('focus').html('');
				$('#registsubmit').attr('disabled', true);
			} else {
				$(this).removeClass('highlight1').addClass('highlight2');
				$('#regName_succeed').removeClass('succeed');
				$('#regName_error').removeClass('focus').addClass('error').html('用户名长度只能在4-20位字符之间');
				$('#registsubmit').attr('disabled', true);
			}
		});
	})();

	$('#pwd').focus(function() {
		$(this).removeClass('highlight2').addClass('highlight1');
		$('#pwd_succeed').removeClass('succeed');
		$('#pwd_error').removeClass('error').addClass('focus').html('<span>6-20位字符,建议由字母,数字和符号两种以上组合组合</span>');
	}).blur(function() {
		if ($(this).val().length >= 6 && $(this).val().length <= 20) {
			$('#pwd').removeClass('highlight1');
			$('#pwd_succeed').addClass('succeed');
			$('#pwd_error').removeClass('focus').html('');
			$('#registsubmit').attr('disabled', false);
		} else if ($(this).val() == '') {
			$(this).removeClass('highlight1');
			$('#pwd_error').removeClass('focus').html('');
			$('#registsubmit').attr('disabled', true);
		} else {
			$(this).removeClass('highlight1').addClass('highlight2');
			$('#pwd_succeed').removeClass('succeed');
			$('#pwd_error').removeClass('focus').addClass('error').html('密码长度只能在6-20位字符之间');
			$('#registsubmit').attr('disabled', true);
		}
	});
	$('#pwdRepeat').focus(function() {
		$(this).removeClass('highlight2').addClass('highlight1');
		$('#pwdRepeat_succeed').removeClass('succeed');
		$('#pwdRepeat_error').removeClass('error').addClass('focus').html('请再次输入密码');
	}).blur(function() {
		if ($(this).val().length >= 6 && $(this).val().length <= 20) {
			if ($(this).val() == $('#pwd').val()) {
				$('#pwdRepeat').removeClass('highlight1');
				$('#pwdRepeat_succeed').addClass('succeed');
				$('#pwdRepeat_error').removeClass('focus').html('');
				$('#registsubmit').attr('disabled', false);
			} else {
				$(this).removeClass('highlight1').addClass('highlight2');
				$('#pwdRepeat_succeed').removeClass('succeed');
				$('#pwdRepeat_error').removeClass('focus').addClass('error').html('两次输入密码不一致');
				$('#registsubmit').attr('disabled', true);
			}
		} else if ($(this).val() == '') {
			$(this).removeClass('highlight1');
			$('#pwdRepeat_error').removeClass('focus').html('');
			$('#registsubmit').attr('disabled', true);
		} else {
			$(this).removeClass('highlight1').addClass('highlight2');
			$('#pwdRepeat_succeed').removeClass('succeed');
			$('#pwdRepeat_error').removeClass('focus').addClass('error').html('密码长度只能在6-20位字符之间');
			$('#registsubmit').attr('disabled', true);
		}

	});
	$('#phone').focus(function() {
		$(this).removeClass('highlight2').addClass('highlight1');
		// $('#phone_error').addClass('focus').html('完成验证后，你可以用该手机号登录和找回密码');
	}).blur(function() {
		$(this).removeClass('highlight1');
		// $('#phone_error').removeClass('focus').html('');
	});
	$('#mobileCode').focus(function() {
		$('#phone_error').addClass('focus').html('<span style="color:blue">*你可以用这个邮箱登录和找回密码</span>');
		$(this).addClass('highlight1');
	}).blur(function() {
		$(this).removeClass('highlight1');
		$('#phone_error').removeClass('focus').html('');
	});
});

// 验证码刷新与动态验证
$(function(){
$('.captcha').css({
	'cursor': 'pointer'
})
// # ajax 刷新
$('.captcha').click(function(){
	console.log('click');
	 $.getJSON("/captcha/refresh/",
			  function(result){
		 $('.captcha').attr('src', result['image_url']);
		 $('#id_captcha_0').val(result['key'])
	  });


});

// 动态验证

$('#id_captcha_1').blur(function(){  // #id_captcha_1为输入框的id，当该输入框失去焦点是触发函数
	json_data={
		'response':$('#id_captcha_1').val(),  // 获取输入框和隐藏字段id_captcha_0的数值
		'hashkey':$('#id_captcha_0').val()
	}
	$.getJSON('/ajax_val', json_data, function(data){ //ajax发送
		$('#captcha_status').remove()
		if(data['status']){ //status返回1为验证码正确， status返回0为验证码错误， 在输入框的后面写入提示信息
			$('#id_captcha_1').after('<span id="captcha_status" style="color:blue">*验证码正确</span>')
		}else{
			 $('#id_captcha_1').after('<span id="captcha_status" style="color:red">*验证码错误</span>')
		}
	});

});


})

