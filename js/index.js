/**
 * Created by yubowen on 2017/7/3.
 */
var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d")
var img = new Image()
img.src = "./images/space1.png";
var ul = $(".canv ul");
// 座位
var arr = [10,10,10,10,10,8,4,10,15]
// 双击放大缩小
var flagD = false
// 缩小比例
var scale = 1,sp = 1


// 最佳观影区
img.onload = function(){
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i]; j++) {
      ctx.drawImage(img,0,0,110,106,j*55+55,i*55,50,50);
    }
    ul.append("<li>"+i+"</li>")
  }
}

// 数组记录座位是否被点击过
var seat = []
// canvas添加单击事件


function selectSeat(e) {
  // console.log(e.offsetX);
  // var p=32*55/100;
  flagD?p = 320/1000*55:p=55
  var x = Math.floor(e.offsetX / p)
  var y = Math.floor(e.offsetY / p)
  if (e.offsetX<p) {
    return
  }
// console.log(seat)
<<<<<<< HEAD
=======
// console.log(x)
>>>>>>> origin/master
  // 首先判断原来这个地方是否有座位可点
  for (var k = 0; k < arr.length; k++) {
    if (x-1<arr[k]&&y==k) {
      break
    }
  }
  if (k == arr.length) {
    return
  }

  // 判断若已选,则返回
  for (var i = 0; i < seat.length; i++) {
    if (x==seat[i][0]&&y == seat[i][1]) {
      ctx.drawImage(img,0,0,110,106,x*55,y*55,50,50);
      seat.splice(i,1)
      // console.log(1)
      return
    }
  }
  // 判断若已选5个,则不能继续选取
  if(seat.length>=5){
    return
  }

  // 将座位改为选取
  seat.push([x,y])
  ctx.drawImage(img,110,106,110,106,x*55,y*55,50,50)
  ctx.fillStyle = "#ffffff";
  ctx.fillText(x+1+"排",x*55+15,y*55+18)
  ctx.fillText(y+1+"座",x*55+15,y*55+33)

}

// 记录x,y的初始值,位移值和结束的值
<<<<<<< HEAD
var px=0,py=0,movex=0,movey=0,endx=0,endy=0,time1 = null,time2 = null,mouse = null;
// 记录时间判断是否为双击
var time = {
  t1:0,
  t2:0
}
canvas.addEventListener("touchstart",function (e) {
=======
var px,py,movex=0,movey=0,endx=0,endy=0,time1 = null,time2 = null,mouse = null;
/*canvas.addEventListener("touchstart",function (e) {
>>>>>>> origin/master
  px = e.touches[0].clientX
  py = e.touches[0].clientY
  mouse = e
  removeTransition()
})
canvas.addEventListener("touchmove",function (e) {
  var x = e.touches[0].clientX
  var y = e.touches[0].clientY
<<<<<<< HEAD
=======

>>>>>>> origin/master
  if (e.touches[1]) {
    var x2 = e.touches[1].clientY
    var y2 = e.touches[1].clientY
  }
  // alert(x2-x)
  movex = x-px
  movey = y-py
<<<<<<< HEAD
  canvas.style.transform = "translate("+(movex+endx)+"px,"+(movey+endy)+"px)"
})
canvas.addEventListener("touchend",function (e) {
  time.t1 = +new Date()
  time.t1 = time.t2
  // console.log(time.t1)
  time.t2 = +new Date()
  canvas.style.transformOrigin = "left top"

=======
  canvas.style.left = (movex+endx) +"px"
  canvas.style.top = (movey+endy) +"px"

})
canvas.addEventListener("touchend",function (e) {
>>>>>>> origin/master

  endx = movex+endx
  endy = movey+endy
  if (endx>=0) {
    endx = 0
  }
  if (endx<=-680) {
    endx = -680
  }
  if (endy>=0) {
    endy = 0
  }
  if (endy<=-200) {
    endy = -200
  }
  // 若 true 说明是双击事件
  if (time.t2-time.t1<300) {
    // console.log("双击")
    transitionAll()
    flagD = !flagD
    if (flagD) {

      canvas.style.transform = "scale(0.32) "
    }else{
      canvas.style.transformOrigin = "0px 0px"
      canvas.style.transform = "translate(-"+(e.changedTouches[0].clientX/32*100-160)+"px,-"+(e.changedTouches[0].clientY-200)/32*100+"px) scale(1)"

    }
    setTimeout(removeTransition,400)
  }
  movex = 0
  movey = 0
  px = 0
  py = 0

})


// 过渡
function transitionAll() {
  canvas.style.transition = "all .3s"
}
function removeTransition() {
  canvas.style.transition = "none"
}


<<<<<<< HEAD
=======
canvas.style.transformOrigin = "left top"
 */

>>>>>>> origin/master


<<<<<<< HEAD

=======
} );

// 双击放大缩小
touch.on( "#canvas", "doubletap", function () {
  flagD = !flagD
  flagD?(canvas.style.width = "100%",canvas.style.left="0px"):canvas.style.width = "auto"
  canvas.style.transform = "scale(1)"
});

// 手指放大缩小
touch.on("#canvas","pinch",function (e) {
  // e.scale>=1?e.scale = 1:""
  // alert(e)
  // canvas.style.transformOrigin = 160+"px "+200+"px"
  canvas.style.transform = "scale("+e.scale*scale+")"
  sp = e.scale
})
touch.on("#canvas","pinchend",function () {
  scale = sp
})
*/
var app = new RTP.PinchZoom($("#canvas"),{})
>>>>>>> origin/master
// 点击事件
$("#canvas").on("click",function (e) {
  selectSeat(e)
})
<<<<<<< HEAD
// $("#canvas").on("dblclick",function (e) {
//   flagD = !flagD
//   console.log(flagD)
//   flagD?(canvas.style.width = "100%",canvas.style.left="0px"):canvas.style.width = "auto"
//   canvas.style.transform = "scale(1)"
// })
=======
>>>>>>> origin/master

