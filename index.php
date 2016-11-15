<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wxf43ae2d0c7f1861c", "9c16ec27bf36ab65235f64720f26b040");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>爱鲜蜂</title>
  <!--<link rel="stylesheet" href="css/reset.css">-->
  <link rel="stylesheet" href="css/common.css">
  	<script type="text/javascript" src="js/resize.js"></script>
  	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
</head>
<body>
  <div class="container">

  </div>
   <footer>
    	<dl>
    		<dt><img src="images/footer/footer_cl_01.png"/></dt>
    		<dd><a href="#home">首页</a></dd>
    	</dl>
    	<dl>
    		<dt><img src="images/footer/footer_02.png"/></dt>
    		<dd><a href="#shop">闪送超市</a></dd>
    	</dl>
    	<dl>
    		<dt><img src="images/footer/footer_03.png"/></dt>
    		<dd><a href="#order">新鲜预定</a></dd>
    	</dl>
    	<dl>
    		<dt><img src="images/footer/footer_04.png"/></dt>
    		<dd><a href="#cart">购物车</a></dd>
    		<span id="cart_num">0</span>
    	</dl>
    	<dl>
    		<dt><img src="images/footer/footer_05.png"/></dt>
    		<dd><a href="#mine">我的</a></dd>
    	</dl>
    </footer>
    <script src="lib/require.js" data-main='main'></script>
  <script type="text/javascript" src="js/resize.js"></script>
</body>
<script type="text/javascript">
	wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
        'checkJsApi',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
</script>
</html>