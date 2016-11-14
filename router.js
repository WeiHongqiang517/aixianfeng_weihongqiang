define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "shop": "shopFn",
        "order": "orderFn",
        "cart": "cartFn",
        "mine": "mineFn",
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
            home.getData();
//          home.Swiper();
//          home.resize();
          })
      },
      shopFn: function() {
        require(['./modules/shop/shop.js'],function(shop){
          shop.render();
//        shop.resize();
					shop.getData("热销榜");
					shop.bindEvent();
        })
      },
      orderFn: function() {
      	require(['./modules/order/order.js'],function(order){
      		
				order.render();
//				order.resize();
      	})
      },
      cartFn: function() {
				require(['./modules/cart/cart.js'],function(cart){
				cart.render();
//				cart.resize();
      	})
      },
      mineFn: function() {
				require(['./modules/mine/mine.js'],function(mine){
      		
				mine.render();
//				mine.resize();
      	})
      },
      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
