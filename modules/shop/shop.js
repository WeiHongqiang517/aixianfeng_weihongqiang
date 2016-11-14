define(['text!./shop.html','css!./shop.css'],function(html){
    function render(){
      $('.container').html(html);
    }

   function resize() {
		window.onresize = function() {
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
		}
	}
    function getData(data){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php",
			async:true,
			dataType:'json',
			data:{
				category:data
			},
//			dataType:"json",
			success:function(req){
				console.log(req);
				var strH = "";
				$.each(req.data, function(i,ele) {
					strH+='<li class="cont_pro"><dl><dt><img src="'+ele.img+'"/></dt>';
					strH+='<dd><p>'+ele.name+'</p><p><span>精选</span>';
					
					if(ele.pm_desc){
						strH+='<span>'+ele.pm_desc+'</span>';
					}
					
					strH+='</p><p>'+ele.specifics+'</p>';
					strH+='<p>￥'+ele.price+'<del>￥'+ele.market_price+'</del>';
					strH+='</p><div class="numCtro">';
					strH+='<div class="cut"><img src="images/shop/add_33.png" /></div>';
					strH+='<span class="num">0</span>';
					strH+='<div class="add"><img src="images/shop/add_33.png" /></div>';
					strH+='</div></dd></dl></li>';
				});

				$("#shop .cont>ul .orderzw").after(strH);
//				console.log(strH);
				add();
				cut();
				
			}
			
		});
    }
    
    function bindEvent(){
    	var objLis = $("#shop .menu li");
		$.each(objLis, function(i,ele) {
			$(ele).on('click',function(){
				getData(ele.innerText);
				$(ele).siblings().find('.bor').css("background-color","transparent")
				$(ele).find('.bor').css("background-color","#ffd600")
//				alert(ele.innerHTML);
			})
		});
		
		
		
		
		
		
    }

	return {
		render: render,
//		resize: resize
		getData:getData,
		bindEvent:bindEvent
	}
	
	
})


function add(){
		$.each($('.numCtro .add'), function(i,ele) {
				$(ele).on('click',function(){
					var num = parseInt($(ele).prev('span').html());
					if(num==0){
						num=0;
						num+=1;
						$(ele).siblings().css('display','flex');
					}else{
						num+=1;
					}
					$(ele).prev('span').html(num);
					$('#cart_num').html(num);
					
				})
			});
	}
function cut(){
		$.each($('.numCtro .cut'), function(i,ele) {
				$(ele).on('click',function(){
					var num = parseInt($(ele).next('span').html());
					if(num==0){
						return;
					}else{
						num-=1;
						if(num==0){
							$(ele).next().next().siblings().css('display','none');
						}
					}
					$(ele).next('span').html(num);
				})
			});
	}
	
	
function cartNum(){
	var cartNum = parseInt($('#cart_num').html());
	if(cartNum==0){
		$('#cart_num').hide();
	}
}
