$(function(){
   //-----------------banner 轮播-------------------

   var arra=['beijing1','beijing2','beijing3','beijing4','beijing5','beijing6'];
   var index = 0,aa=0;
   var lunbo  =  function(){
      $('.img').hide();
      $('.img-a').hide();
      var el = $('.img-a')[index];
      $(el).show();
      $('.category').removeClass(arrb[bb]);
      $('.category').removeClass(arra[aa]);
      $('.category').addClass(arra[index]);

      aa=index;
      $('.btnm').removeClass('white');
      $($('.btnm')[index]).addClass('white');

      index += 1;
      if( index === $('.img-a').length ){
         index = 0;
      }
   };
   $('.btnm').each(function(i){
      $(this).data('index',i)
   });

   $('.btnm').hover(function(){
      clearInterval(timerId);
      $('.btnm').removeClass('white');
      $(this).addClass('white');
      var i = $(this).data('index');
      $('.img-a').hide();
      $( $('.img-a')[i] ).show();
      index = i;
   },function(){
      clearInterval(timerId);
      timerId = setInterval(lunbo,2000);
   });
   var timerId = setInterval(lunbo,2000);
   //--------------banner-right--------------
   var nums = 0,bb= 0;
   var arrb=['beijing1','beijing2','beijing3','beijing4','beijing5','beijing6','beijing7','beijing8','beijing9','beijing10','beijing11','beijing12','beijing13','beijing14','beijing15','beijing16'];
   $('.banner-right').each(function(i){
      $(this).data('index',i);
   });
   $('.img').each(function(j){
      $(this).data('index',j);
   });
   $('.tt').each(function(m){
      $(this).data('index',m);
   });
   $('.banner-right').hover(function(){
      var m = $(this).data('index');
      $($('.tt')[m]).animate({marginLeft: '-10px'}, 100);
      clearInterval(timerId);
      $('.img-rr').stop();
      $('.category').removeClass(arrb[bb]);

      var i = $(this).data('index');
      var j = $(this).data('index');
      bb=i;
      $('.img-rr').hide();
      $('.img').hide();
      $('.category').addClass(arrb[i]);
      $( $('.img-rr')[i] ).show();
      $( $('.img')[j] ).show();
      nums += 1;
      if( nums === $('.img').length ){
         nums = 0;
      }
   },function(){
      var m = $(this).data('index');
      $($('.tt')[m]).animate({marginLeft: '0px'}, 100);
      timerId = setInterval(lunbo,2000);
   });
   $('.btnm').hover(function(){
      clearInterval(timerId);
      timerId = setInterval(lunbo,1000);
   });
//----------------更换搜索框值-------------
   var text = document.getElementById('mq');
      text.onfocus=function(){
         if(text.value=='施华洛世奇华丽入住，璀璨好礼疯狂送'){
            text.value='';
         }
      }
      text.onblur=function(){
         if(text.value){

         }else{
            text.value='施华洛世奇华丽入住，璀璨好礼疯狂送';
         };
      }
   //---------------品牌 大牌---------------------------

   $('.clearfix-hot').each(function(k){
      $(this).data('index',k);
   });
   $('.clearfix-hot').click(function(){
      $('.brand-slide-po').hide();
      var k = $(this).data('index');
      $('.clearfix-hot').removeClass('heiti');
      $($('.clearfix-hot')[k]).addClass('heiti');
      $($('.brand-slide-po')[k]).show();
   });
   //------------换一批-------------------------
   var huan = function(){
      var dd=[],sss= 0,dict3={};
      while(dd.length<96){
         var h = Math.floor(Math.random()*96)+1;
         if(!dict3[h]){
            dd.push(h);
         }
      }
      while(sss<96){
         $($('.brand-item-x')[sss]).attr('src','./img/a'+dd[sss]+'.jpg');
         sss+=1;
      }
   }
   $('#huanyipi').click(function(){
      huan();
   });
   //-----下拉与banner右侧---------------
   $('.shang').hover(function(){
      $(this).find('.xia').show();
   },function(){
      $(this).find('.xia').hide();
   });
   //-----------桃心---------------
   $('.brand-slide-item').hover(function(){
      $(this).find('.brand-item-y').show();
   },function(){
      $(this).find('.brand-item-y').hide();
   });
   //---------------左侧轮播-----------------
    $('.cen').hover(function(){
       $(this).animate({marginLeft: '-5px'}, 200);
    },function(){
       $(this).animate({marginLeft: '0px'}, 200);
    });

   //var arr = [0,-190,-380],test=-1;
   //setInterval(function(){
   //   test+=1;
   //   $('.middle-sd').animate({marginLeft:arr[test]+'px'},1000);
   //   if(test==3){test=-1;}
   //
   //},3000);
   //-----------------轮播1---------------
   var num1=0;
   var lunbo1  =  function(){
      $('.middle-a').hide();
      var el = $('.middle-a')[num1];
      $(el).show();
      num1 +=1;
      if(num1 === $('.middle-a').length){
         num1=0;
      }
   };
   var timerId1 = setInterval(lunbo1,2000);
   var q =0;
   $('.nex1').click(function(){
      $('.middle-a').hide();
      $($('.middle-a')[q]).show();
      q +=1;
      if(q==3){q=0;}
   });
   $('.pre1').click(function(){
      $('.middle-a').hide();
      $($('.middle-a')[q]).show();
      q -=1;
      if(q==-1){q=2;}
   });
   //-----------------轮播2-------------------
   var num2=0;
   var lunbo2  =  function(){
      $('.middle-b').hide();
      var el = $('.middle-b')[num2];
      $(el).show();
      num2 += 1;
      if( num2 === $('.middle-b').length ){
         num2 = 0;
      }
   };
   var timerId2 = setInterval(lunbo2,2000);
   $('.nex2').click(function(){
      $('.middle-b').hide();
      $($('.middle-b')[q]).show();
      q +=1;
      if(q==3){q=0;}
   });
   $('.pre2').click(function(){
      $('.middle-b').hide();
      $($('.middle-b')[q]).show();
      q -=1;
      if(q==-1){q=2;}
   });
   //----------------轮播3-------------------------
   var num3=0;
   var lunbo3  =  function(){
      $('.middle-c').hide();
      var el = $('.middle-c')[num3];
      $(el).show();
      num3 += 1;
      if( num3 === $('.middle-c').length ){
         num3 = 0;
      }
   };
   var timerId3 = setInterval(lunbo3,2000);
   $('.nex3').click(function(){
      $('.middle-c').hide();
      $($('.middle-c')[q]).show();
      q +=1;
      if(q==3){q=0;}
   });
   $('.pre3').click(function(){
      $('.middle-c').hide();
      $($('.middle-c')[q]).show();
      q -=1;
      if(q==-1){q=2;}
   });
   //----------------轮播4---------------------------
   var num4=0;
   var lunbo4  =  function(){
      $('.middle-d').hide();
      var el = $('.middle-d')[num4];
      $(el).show();
      num4 += 1;
      if( num4 === $('.middle-d').length ){
         num4 = 0;
      }
   };
   var timerId4 = setInterval(lunbo4,2000);
   $('.nex4').click(function(){
      $('.middle-d').hide();
      $($('.middle-d')[q]).show();
      q +=1;
      if(q==3){q=0;}
   });
   $('.pre4').click(function(){
      $('.middle-d').hide();
      $($('.middle-d')[q]).show();
      q -=1;
      if(q==-1){q=2;}
   });
   //----------------轮播5---------------------------------
   var num5=0;
   var lunbo5  =  function(){
      $('.middle-e').hide();
      var el = $('.middle-e')[num5];
      $(el).show();
      num5 += 1;
      if( num5 === $('.middle-e').length ){
         num5 = 0;
      }
   };
   var timerId5 = setInterval(lunbo5,2000);
   $('.nex5').click(function(){
      $('.middle-e').hide();
      $($('.middle-e')[q]).show();
      q +=1;
      if(q==3){q=0;}
   });
   $('.pre5').click(function(){
      $('.middle-e').hide();
      $($('.middle-e')[q]).show();
      q -=1;
      if(q==-1){q=2;}
   });
   //-----------------轮播6-----------------
   var num6=0;
   var lunbo6  =  function(){
      $('.middle-f').hide();
      var el = $('.middle-f')[num6];
      $(el).show();
      num6 += 1;
      if( num6 === $('.middle-f').length ){
         num6 = 0;
      }
   };
   var timerId6 = setInterval(lunbo6,2000);
   $('.nex6').click(function(){
      $('.middle-f').hide();
      $($('.middle-f')[q]).show();
      q +=1;
      if(q==3){q=0;}
   });
   $('.pre6').click(function(){
      $('.middle-f').hide();
      $($('.middle-f')[q]).show();
      q -=1;
      if(q==-1){q=2;}
   });
//-------------图片微动--------------------------
   $('.img-s li').hover(function(){
      $(this).css({position:'relative'});
      $(this).stop();
      $(this).animate({left:-5},200);
   },function(){
      $(this).stop();
      $(this).animate({left:0},200);
   });
   $('.img-x li').hover(function(){
      $(this).css({position:'relative'});
      $(this).stop();
      $(this).animate({left:-5},200);
   },function(){
      $(this).stop();
      $(this).animate({left:0},200);
   });
//-----------------------------------------

//------回到顶部-------------
   $(".Totop").click(function(){
      $({top: $(window).scrollTop()}).animate(
          {top: 0},
          {
             duration: 700,
             step: function() {
                $(window).scrollTop(this.top);
             }
          }
      );
   });
//-------楼层动画----------
   $('.zuojie').each(function(i){
      $(this).data('index',i);
   });
   $('.zuojie').click(function(){
      var i = $(this).index();
      var newtop = $( $('.nvz')[i] ).offset().top - 50;
      $({top: $(window).scrollTop()}).animate(
          {top: newtop},
          {
             duration: 700,
             step: function() {
                $(window).scrollTop(this.top);
             }
          }
      );
      $('.zuojie').removeClass('addcolor');
      $($('.zuojie')[i]).addClass('addcolor');
   });


   //$(window).scroll(function(){
   //   var imp=0;
   //   //if(){}
   //   var index=parseInt(($(window).scrollTop()-1245)/450);
   //   $('.zuojie').removeClass('addcolor');
   //   $($('.zuojie')[index]).addClass('addcolor');
   //   console.log(index)
   //})



   //----------楼层变红--------------------
   var bian = function(){
      for(var j=0;j<$('.zuojie').length;j++){
         var wind = $(window).scrollTop();
         var floor = $($('.nvz')[j]).offset().top;
         if(wind >=floor && wind <= $( $('.nvz')[j+1] ).offset().top){
            $('.zuofl').show();
            $(".zuojie").removeClass("addcolor");
            $($(".zuojie")[j+1]).addClass("addcolor");
         }else if(wind < $($('.nvz')[0]).offset().top ){
            $('.zuofl').hide();
            $(".zuojie").removeClass("addcolor");
         }else if(wind > 6850){
            $('.zuofl').hide();
         }else{
            $('.zuofl').show();
         }
      }
   };
   $(window).scroll( function() {
      bian();
   })

//--------------右面定位-----------------------
   $('.tab-tab').hover(function(){
      $('.tab-tab').stop();
      $(this).find('.tab-tip-prof').show(0,function(){
         $(this).animate({left:-90},200);
      });
   },function(){
      $('.tab-tab').stop();
      $(this).find('.tab-tip-prof').css({left:-120}).hide(0);
   });

   $('.tab-logo3').hover(function(){
      $(this).find('.sn-qrcode-ad').show();
   },function(){
      $(this).find('.sn-qrcode-ad').hide();
   });

//-------------头部显示------------------------------------
   var ti;
   $(window).scroll(function(){
      if($(window).scrollTop() > 500){
         clearTimeout(ti);
         ti = setTimeout(function(){
            $('.win').slideDown();
         },500);
      }else{
         clearTimeout(ti);
         $('.win').slideUp();
      };
   });


















});