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
      getData:getData
    }
})
