define(['text!./home.html','css!./home.css','css!./swiper.min.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			dataType:"json",
			success:function(data){
				console.log(data);
				var strH = "";
				$.each(data.data.slide, function(i,ele) {
					console.log(ele.activity.img);
					strH+='<div class="swiper-slide"><img src="'+ele.activity.img+'" alt=""></div>'
				});
				//给页面添加轮播图activity
				$(".swiper-wrapper").html(strH);
			}
		});
    }

    function bindEvent(){
		
    }
    
    function wxjk(){
    	saoyisao();
    	getLocation();
    }

    function swiper(){
       var mySwiper = new Swiper('.swiper-container', {
            initialSlide: 0,
            effect: 'slide',
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable: true,

            // 如果需要前进后退按钮
//          nextButton: '.swiper-button-next',
//          prevButton: '.swiper-button-prev',

            // 如果需要滚动条
//          scrollbar: '.swiper-scrollbar',
            autoplay: 2000,
            autoplayDisableOnInteraction: false
        })
    }

    return {
      render:render,
      getData:getData,
      wxjk:wxjk
    }
})

function saoyisao(){
	$('.scan p').on('click',function(){
		wx.scanQRCode({
		    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
		    success: function (res) {
		    	var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
			}
		});
	})
}
function getLocation(){
	$('.location').on('click',function(){
		wx.getLocation({
		    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		    success: function (res) {
		        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		        var speed = res.speed; // 速度，以米/每秒计
		        var accuracy = res.accuracy; // 位置精度
		    }
		});
	})
}
