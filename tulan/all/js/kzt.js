
// 返回首页
var qita_dugn = document.getElementsByClassName('qita_dugn')
qita_dugn[0].onclick = function () {
    　window.location.href="../../index.html";
}
//y.用户名称
var username =  document.getElementsByClassName("username")
    var userl = JSON.parse(localStorage.userl)
    var num = parseInt(localStorage.nowuseing)
    console.log(userl[num]);
username.innerText = userl[num].username;
// 我的信息


qita_dugn[6].onclick = function () {  
    var dangqian = document.getElementsByClassName("content")[0].lastElementChild;
    var xinyemian = document.createElement("div");
    xinyemian.className = "xymcon"
    var wdxx = document.createElement("div")
    wdxx.className = "xym"
    wdxx.innerHTML = '<p class="wdxx">我得信息</p><div class="bianji">编辑</div><div class="linekai"><p class=" vt ">头像</p><div class="x_headimg vt sadfww"><img src=""alt=""class="fiwjei"></div><input type="text"placeholder="填写图片链接"class="disb adsfer"></div><div class="linekai"><p class="ds vt ">昵称</p><p class="usernameee sadfww fiwjei">这里是你的名字</p><input type="text"class="disb adsfer dsfseweg"></div><div class="linekai"><p class="ds vt">性别</p><select name="sex"id=""class=" disb adsfer"><option value="男">男</option><option value="女">女</option></select><p class="jiowjewww sadfww fiwjei">男</p></div><div class="linekai"><p style="margin-bottom: 5px "class="ds vt">收货地址</p><textarea name=""id=""cols="95"rows="10"class="disb adsfer sdfafgadf"></textarea><p class="dfwerg sadfww fiwjei">这里是你的地址</p></div><button class="  disb ttrhr dsdssbtn ">保存</button>'
    tihuan(dangqian,xinyemian)
    xinyemian.appendChild(wdxx);

    var gai = document.getElementsByClassName("bianji")[0];
    gai.onclick = function () {
      var xian = document.getElementsByClassName("sadfww");
      var dfs = document.getElementsByClassName('adsfer');
      var ttrhr = document.getElementsByClassName("ttrhr")[0];
      ttrhr.style= "display:block"

      for(var i = 0 ; i < xian.length; i ++){
        xian[i].style = "display:none"
        dfs[i].style = "display:block"
      }
     
 
    }
    var baoc = document.getElementsByClassName("ttrhr")[0]
    var user = JSON.parse(localStorage.userl);
    var num= parseInt(localStorage.nowuseing)
    var fiwjei = document.getElementsByClassName("fiwjei")
      fiwjei[0].src = user[num].more[0]
      fiwjei[1].innerText = user[num].more[1]
      fiwjei[2].innerText = user[num].more[2]
      fiwjei[3].innerText = user[num].more[3]
      var dfs = document.getElementsByClassName('adsfer');
    dfs[0].value =    fiwjei[0].src           
    dfs[1].value =  fiwjei[1].innerText
    dfs[2].value =    fiwjei[2].innerText
    dfs[3].value =     fiwjei[3].innerText


    baoc.onclick = function () {
      var dfs = document.getElementsByClassName('adsfer');
      var xian = document.getElementsByClassName("sadfww");
  
        // var usermores = {
          headiimg = dfs[0].value ,               
          name = dfs[1].value,
          sex = dfs[2].value,
          home =  dfs[3].value 
        // } 

        var usermores=[headiimg,name,sex,home]
        console.log(usermores)


          user[num].more = usermores
          localStorage.userl = JSON.stringify(user)
       
          for(var i = 0 ; i < dfs.length; i ++){
        xian[i].style = "display:block"
        dfs[i].style = "display:none"
      }
      var ttrhr = document.getElementsByClassName("ttrhr")[0];
      ttrhr.style= "display:none"
      var fiwjei = document.getElementsByClassName("fiwjei")
      fiwjei[0].src = user[num].more[0]
      fiwjei[1].innerText = user[num].more[1]
      fiwjei[2].innerText = user[num].more[2]
      fiwjei[3].innerText = user[num].more[3]
    }
    
}
function tihuan(index1,index2){
    var content = document.getElementsByClassName("content")[0];
    content.replaceChild(index2,index1)
}
// 衣币充值
qita_dugn[1].onclick = function () {
    var dangxia = document.getElementsByClassName("content")[0].lastElementChild;
    var content = document.getElementsByClassName("content")[0];
    var chongzhizzz = document.createElement("div")
    chongzhizzz.className = "jiemian"
    chongzhizzz.innerHTML = '<div class="conon"><div class="chon"><div>100衣币</div><div>99RMB</div></div><div class="chon"><div>500衣币</div><div>480RMB</div></div><div class="chon"><div>900衣币</div><div>818RMB</div></div><div class="chon"><div>1520衣币</div><div>1450RMB</div></div><div class="chon"><div>2000衣币</div><div>1900RMB</div></div><div class="chon"><div>2500衣币</div><div>2300RMB</div></div><div class="chon"><div>3000衣币</div><div>2700RMB</div></div><div class="chon"><div>4000衣币</div><div>3500RMB</div></div></div><div class="zxcc"><p style="font-size: 26px">自行充值</p><br><input type="text"id="zixingchongzhi"><span>(单位:元)</span><button id="chongzhile">充值</button><p>充值方式</p><input name="sdsfwe"type="radio"id="an1"value="支付宝"><label class="zfimg"for="an1"><img src="../img/zfb.png"alt=""></label><input name="sdsfwe"type="radio"id="an2"value="微信"><label class="zfimg"for="an2"><img src="../img/wx.png"alt=""></label><input name="sdsfwe"type="radio"id="an3"value="银联"><label class="zfimg"for="an3"><img src="../img/5656.jpg"alt=""></label><div class="dfwerw">1衣币=1元</div></div>'
    content.removeChild(dangxia);
    content.appendChild(chongzhizzz);
     
    var num = parseInt(localStorage.nowuseing);
    var usell = JSON.parse(localStorage.userl);
var  username =document.getElementsByClassName("username")[0];
username.innerText = usell[num].email
var wodeyibi = document.getElementById("wodeyibi");
wodeyibi.innerText = usell[num].zongbi

// 自定义金额
var zixing = document.getElementById("zixingchongzhi");

zixing.onblur = function() {
  var zixingjine = zixing.value;
  var reg = /^[1-9]\d{2,3}$/;
  var fsfsf = reg.test(zixingjine);
  if (zixingjine == "") {
    alert("请输入金额");
  } else if (!fsfsf) {
    zixing.value = "";
    alert("您输入的格式不正确，请输入0-9的数字，最大一次性充值9999元");
  }
};

// 判断用什么支付；
var sdsfwe = document.getElementsByName("sdsfwe");
var chongzhile = document.getElementById("chongzhile");

chongzhile.onclick = function() {
  for (var i = 0; i < sdsfwe.length; i++) {
    if (sdsfwe[i].checked) {
      var zffs = sdsfwe[i].value;
    }
  }
  // 如果没选择用什么来支付
  if (!sdsfwe[0].checked && !sdsfwe[1].checked && !sdsfwe[2].checked) {
    alert("请先选择支付方式");
    return;
  }
  // 如果值不正确
  var reg = /^[1-9]\d{2,3}$/;
  if (reg.test(zixing.value)) {
    alert("您将通过" + zffs + "付款" + zixing.value + "元");
    var num = parseInt(localStorage.nowuseing);
    var usell = JSON.parse(localStorage.userl);
    // var sdfsdf = usell[num];
    // console.log( usell[num]);
    if (usell[num].yibi) {
      usell[num].yibi.push([zixing.value, zffs]);
    } else {
      var yibi = [[zixing.value, zffs]];
      usell[num].yibi = yibi;
      // sdfsdf == usell[num]
    }
    localStorage.userl = JSON.stringify(usell);
    // console.log( localStorage.userl)
  }
  if(usell[num].yibi){
    yibiaaa();
}
}
// 

// 总衣币计算

function yibiaaa() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var quanbucz = 0;
  for (var i = 0; i < usell[num].yibi.length; i++) {
    var dancicz = usell[num].yibi[i][0];
    quanbucz += Number(dancicz);
  }
  wodeyibi.innerText = quanbucz;
  console.log(quanbucz);
  //  if(usell[num].zongbi){

  //         }else{
  var zongbi = quanbucz;
  usell[num].zongbi = zongbi;
  // sdfsdf == usell[num]
  // }
  console.log(usell);

  localStorage.userl = JSON.stringify(usell);
  
}




//  快速充值
var chon = document.getElementsByClassName("chon");

chon[0].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[0].children[0].innerText);
  var shiji_ = parseInt(chon[0].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[1].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[1].children[0].innerText);
  var shiji_ = parseInt(chon[1].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[2].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[2].children[0].innerText);
  var shiji_ = parseInt(chon[2].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[3].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[3].children[0].innerText);
  var shiji_ = parseInt(chon[3].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[4].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[4].children[0].innerText);
  var shiji_ = parseInt(chon[4].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[5].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[5].children[0].innerText);
  var shiji_ = parseInt(chon[5].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[6].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[6].children[0].innerText);
  var shiji_ = parseInt(chon[6].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
chon[7].onclick = function() {
  var num = parseInt(localStorage.nowuseing);
  var usell = JSON.parse(localStorage.userl);
  var yibijin_ = parseInt(chon[7].children[0].innerText);
  var shiji_ = parseInt(chon[7].children[1].innerText);
  zixing.value = yibijin_;
  alert("您将通过活动冲" + shiji_ + "得" + yibijin_);
  usell[num].yibi.push([zixing.value, "活动充值"]);
};
// 列表
var qita_dugn = document.getElementsByClassName("qita_dugn");
// for(var j = 0;j <qita_dugn.length;j++ ){
//     qita_dugn[j].style.backgroundColor = "white"
// }
// for(var i = 0;i < qita_dugn.length;i++){
//     qita_dugn[i].onclick = function () {
//    `    this.style.backgroundColor = "red"
//     }

// }
    
}

// 超级管理员
qita_dugn[5].onclick = function () {  
    var dangqian = document.getElementsByClassName("content")[0].lastElementChild;
    var xinyemian = document.createElement("div");
    xinyemian.className = "xymcon"
    var wdxx = document.createElement("div")
    wdxx.className = "cjgl_wrap"
    wdxx.innerHTML = '<div class="list-group"><button type="button"class="list-group-item">商品管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button><button type="button"class="list-group-item">订单管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button><button type="button"class="list-group-item">新闻也面管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button><button type="button"class="list-group-item">轮播广告管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button><button type="button"class="list-group-item">公司简介管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button><button type="button"class="list-group-item">门店管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button><button type="button"class="list-group-item">人才招聘管理<span class="glyphicon glyphicon-chevron-right cjgl"></span></button></div>'
    tihuan(dangqian,xinyemian)
    xinyemian.appendChild(wdxx);

    var butsp = document.getElementsByClassName("list-group-item");
    butsp[0].onclick = function () {
    　window.location.href="../page/kzt.html";
}
butsp[2].onclick = function () {
    　window.location.href="../spxqy/news.html";
}
butsp[5].onclick = function () {
    　window.location.href="../spxqy/dian.html";
}
butsp[6].onclick = function () {
    　window.location.href="../spxqy/zhaopin.html";
}
butsp[3].onclick = function () {
    　window.location.href="../spxqy/guang.html";
}
butsp[1].onclick = function () {
    　window.location.href="../spxqy/dingdan.html";
}
butsp[4].onclick = function () {
    　window.location.href="../spxqy/gsjj.html";
}
}
qita_dugn[2].onclick = function () { 
    var dangqian = document.getElementsByClassName("content")[0].lastElementChild;
    var xinyemian = document.createElement("div");
    xinyemian.className = "xymcon"
    tihuan(dangqian,xinyemian)

    // 导入loacl
    var user = JSON.parse(localStorage.userl)
    var num = parseInt(localStorage.nowuseing)
    var shopcarlen = user[num].shopcar.length
    var shangpinas = JSON.parse(localStorage.shangping)


    var wddddfw = document.createElement("div")
    wddddfw.innerHTML = '<p class="gc_title">我的购物车</p>'
    xinyemian.appendChild(wddddfw)
    var jiksez = []
    for(var i = 0 ; i < shopcarlen; i ++){
     
      var jia = document.getElementsByClassName("jia_gouwu");
      var jian = document.getElementsByClassName("jian");
        var wdxx = document.createElement("div")
      var duoxuan = document.getElementsByClassName("gouxuan")
        wdxx.className = "gwc_wrap"
        wdxx.innerHTML = '<div class="xq_wrap"><div><img src="http://www.leagel.cn/upload/20180228/20180228142020.jpg"alt="" class="imgkkkkxq"></div><p class="xqfs18">这里是商品标题</p><!--这里是商品图--><p class="xq-more"><!--颜色-->颜色：<span class="gsdfwewews xaqred"></span><!--尺码-->尺码：<span class="gsdffsdwew xaqred"></span><!--数量-->数量：<span class="fweioow"></span></p><!--time--><span class="agjoiwwe">加入时间：<span class="sfrththsa"></span></span><!--价格--><span class="dfadseree">总价：<span class="xaqred dfwewthttr"></span></span><input type = "checkbox" name = "gouxuangw" class="gouxuan" <p class="jiajian"><button class="jia_gouwu">+</button> <button class="jian">-</button></p></div>'
        xinyemian.appendChild(wdxx);
        jiayijian(i)
        jianyijian(i)
        // duoxuans(i)
        xuanqushangpin(i)
       
        var imgsrc=document.getElementsByClassName("imgkkkkxq")
        var title = document.getElementsByClassName("xqfs18")
        var colorsd = document.getElementsByClassName("gsdfwewews")
        var numm = document.getElementsByClassName("fweioow")
        var sizef = document.getElementsByClassName("gsdffsdwew")
        var zong = document.getElementsByClassName("dfwewthttr")
        var time = document.getElementsByClassName("sfrththsa")
        imgsrc[i].src= shangpinas[user[num].shopcar[i].id].pic
        title[i].innerText = shangpinas[user[num].shopcar[i].id].title
        colorsd[i].innerText = user[num].shopcar[i].color
        numm[i].innerText = user[num].shopcar[i].num
        sizef[i].innerText = user[num].shopcar[i].size
        zong[i].innerText = user[num].shopcar[i].jiage
        time[i].innerText = user[num].shopcar[i].time
        duoxuan[i].value = i
       
    }

    

    var zongheji = document.createElement("div")
    zongheji.className="dfdfrwgyjl"
    zongheji.innerHTML = '<p class="ddfeiowo_gg"> <p class = jiewn_dfji>已选<span class="jianshunun">0</span>件，共<span class="jifwwor">0</span>RMB</p><button class="fweioa">结算</button></p>'
    xinyemian.appendChild(zongheji)
    // 选择商品付款
        // 复选框点击监听

        // 商品数组
        var ooow = []
        function xuanqushangpin (i){
          duoxuan[i].addEventListener("click",function(){
            if(duoxuan[i].checked == true  ){
           
              ooow.push(duoxuan[i].value)
              console.log(ooow);
              var jianshunun = document.getElementsByClassName("jianshunun")[0]
              var dfwjnjnww = 0
              for(var l = 0 ; l< ooow.length;l++){
                var addnum =  parseInt(user[num].shopcar[ ooow[l]].num) 
                dfwjnjnww +=addnum
               }
              jianshunun.innerText  = dfwjnjnww

          }else if(duoxuan[i].checked == false ){
            
            ooow.splice(duoxuan[i].value , 1)
            console.log(ooow);    
            var jianshunun = document.getElementsByClassName("jianshunun")[0] 
            var dfwjnjnww = 0
              for(var l = 0 ; l< ooow.length;l++){
                var addnum =  parseInt(user[num].shopcar[ ooow[l]].num) 
                dfwjnjnww +=addnum
               }
              jianshunun.innerText  = dfwjnjnww
             
           }
          }  )
        }



      // 购物车加减
 
      // 数组去重
      function uniq(array){
        var temp = []; //一个新的临时数组
        for(var i = 0; i < array.length; i++){
            if(temp.indexOf(array[i]) == -1){
                temp.push(array[i]);
            }
        }
        return temp;
    }
    
   
   
     
      
    // var newxxarray
    //   function duoxuans(i){

    //    duoxuan[i].addEventListener("click",function(){
    //     if(duoxuan[i].checked == true){   
    //      jiksez.push(duoxuan[i].value)
    //      newxxarray = uniq(jiksez);
    //       var zongshul = document.getElementsByClassName("jianshunun")[0]
    //       // 
    //       var dfwjnjnww = 0
    //       for(var l = 0 ; l< newxxarray.length;l++){
    //       var addnum =  parseInt(user[num].shopcar[ newxxarray[l]].num) 
    //       dfwjnjnww +=addnum
    //       }
    //       zongshul.innerText = dfwjnjnww
       
    //     }   else if (duoxuan[i].checked == false && newxxarray.length !== 0) {
    //          for(var o = 0 ; o < newxxarray.length ; o++){
    //          if( duoxuan[o].value == newxxarray[i])   {
    //            newxxarray.splice(duoxuan[i].value, 1);

    //           //  
    //           var zongshul = document.getElementsByClassName("jianshunun")[0]
    //           var dfwjnjnww = 0
    //           for(var l = 0 ; l< newxxarray.length;l++){
    //           var addnum =  parseInt(user[num].shopcar[ newxxarray[l]].num) 
    //           dfwjnjnww +=addnum
    //           }
    //           zongshul.innerText = dfwjnjnww
          
    //          }
    //          }
    //        }
         
   
       
    //    })

    //   }
      function jianyijian(i){
        jian[i].addEventListener("click" ,function(){
        var newnum =  parseInt(user[num].shopcar[i].num )  - 1;
        user[num].shopcar[i].num = newnum
        var newjiage = user[num].shopcar[i].jiage - shangpinas[user[num].shopcar[i].id].manay 
        user[num].shopcar[i].jiage = newjiage
        localStorage.userl =JSON.stringify(user)
        numm[i].innerText = user[num].shopcar[i].num
        zong[i].innerText = user[num].shopcar[i].jiage
        // var zongshul = document.getElementsByClassName("jianshunun")[0]
        // zongshul.innerText = parseInt(zongshul.innerText) - 1
        })
      }

      function jiayijian(i){
        jia[i].addEventListener("click" ,function(){
          var newnum =  parseInt(user[num].shopcar[i].num )  + 1;
          user[num].shopcar[i].num = newnum
          var newjiage = parseInt(user[num].shopcar[i].jiage ) + parseInt(shangpinas[user[num].shopcar[i].id].manay ) 
          user[num].shopcar[i].jiage = newjiage
          localStorage.userl =JSON.stringify(user)
          numm[i].innerText = user[num].shopcar[i].num
          zong[i].innerText = user[num].shopcar[i].jiage
          // var zongshul = document.getElementsByClassName("jianshunun")[0]
          // zongshul.innerText = parseInt(zongshul.innerText) + 1
        })
      }
 }
 
 qita_dugn[4].onclick = function () { 
    var dangqian = document.getElementsByClassName("content")[0].lastElementChild;
    var xinyemian = document.createElement("div");
    xinyemian.className = "xymcon"
    tihuan(dangqian,xinyemian)

    // 导入loacl
    var user = JSON.parse(localStorage.userl)
    var num = parseInt(localStorage.nowuseing)
    var shopcarlen = user[num].dingdan.length
    var shangpinas = JSON.parse(localStorage.shangping)


    var wddddfw = document.createElement("div")
        wddddfw.innerHTML = '<p class="gc_title">我的订单</p>'
        xinyemian.appendChild(wddddfw)

    
    for(var i = 0 ; i < shopcarlen; i ++){
        var wdxx = document.createElement("div")
        wdxx.className = "gwc_wrap"
        wdxx.innerHTML = '<div class="xq_wrap"><div class="imgkkkkxq"><img src="http://www.leagel.cn/upload/20180228/20180228142020.jpg"alt="" class="imgkkkkxq"></div><p class="xqfs18">这里是商品标题</p><!--这里是商品图--><p class="xq-more"><!--颜色-->颜色：<span class="gsdfwewews xaqred"></span><!--尺码-->尺码：<span class="gsdffsdwew xaqred"></span><!--数量-->数量：<span class="fweioow"></span></p><!--time--><span class="agjoiwwe">加入时间：<span class="xaqred sfrththsa"></span></span><!--价格--><span class="dfadseree">总价：<span class="xaqred"></span></span><p class="dooppepreds"></p></div>'
        xinyemian.appendChild(wdxx);
        var imgsrc=document.getElementsByClassName("imgkkkkxq")
        var title = document.getElementsByClassName("xqfs18")
        var colorsd = document.getElementsByClassName("gsdfwewews")
        var numm = document.getElementsByClassName("fweioow")
        var sizef = document.getElementsByClassName("gsdffsdwew")
        var zong = document.getElementsByClassName("dfadseree")
        var time = document.getElementsByClassName("sfrththsa")
        var zhuangtai = document.getElementsByClassName("dooppepreds")
        imgsrc[i].src= shangpinas[user[num].dingdan[i].id].pic
        title[i].innerText = shangpinas[user[num].dingdan[i].id].title
        colorsd[i].innerText = user[num].dingdan[i].color
        numm[i].innerText = user[num].dingdan[i].num
        sizef[i].innerText = user[num].dingdan[i].size
        zong[i].innerText = user[num].dingdan[i].jiage+"RMB"
        time[i].innerText = user[num].dingdan[i].time
        zhuangtai[i].innerText = user[num].dingdan[i].zhuangt
        zong[i].style = "color:red"
        
    }
    // for(var i = 0 ; i <shopcarlen; i++ )
    
    //     dsdfweow[i].onclick = function () {
    //       location.href = "../spxqy/fukuan.html?fsfswe=" + i
    //     }
        // var dsdfweow =document.getElementsByClassName("gwc_wrap")
        var li = document.getElementsByClassName("gwc_wrap")

        for(var i = 0; i < li.length; i++) {
  
        getConsole(i);
  
        }
  
        function getConsole(i){
  
        li[i].addEventListener("click", function() {
  
          location.href = "../spxqy/fukuan.html?fsfswe=" + i
  
        })
  
        }
   
 }
 
