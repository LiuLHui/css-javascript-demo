$(function(){
    var box = $("#banner-box"),
        $pic = $("#pic li"),
        $list =$("#list li"),
        timer = null,
        index = 0;

    function autoplay(){
        index ++;
        if(index >= $list.length){
            index = 0;
        }
        change(index);
    }
    function change (curIndex){
        $list.eq(curIndex).addClass("on").siblings().removeClass("on");
        $pic.eq(curIndex).fadeIn().siblings().fadeOut();
        index = curIndex;
    }

    //给li加事件
    $list.on("click",function(){
        clearInterval(timer)
        var index = $(this).index();
        change(index);
    })

    //鼠标移入 关闭定时器 自由点击 
    // 鼠标移出 重新打开定时器
    box.hover(function(){
        clearInterval(timer)
    },function(){
       timer = setInterval(autoplay,3000)
    })
    //设置定时器
    clearInterval(timer)
    timer = setInterval(autoplay,3000)


})



// $(function () {
//     var $list = $("#list li"),
//         $pic = $("#pic li"),
//         box = $("#banner-box"),
//         index = 0,
//         timer = null;
//     //li点击事件切换图片
//     $list.on("click", function () {
//         clearInterval(timer)
//         var index = $(this).index();
//         $(this).addClass("on").siblings().removeClass("on");
//         $pic.eq(index).fadeIn().siblings().fadeOut();
//     })

//     //给页面加事件 当鼠标移入 关掉定时器移出重新打开
//     box.hover(function () {
//         clearInterval(timer)
//     }, function () {
//         timer = setInterval(function () {
//             index++;
//             if (index >= $list.length) {
//                 index = 0;
//             }
//             $list.eq(index).addClass("on").siblings().removeClass("on");
//             $pic.eq(index).fadeIn().siblings().fadeOut();
//         }, 3000)
//     })
// //设置定时器之前要先清除定时器
//     clearInterval(timer);
//     timer = setInterval(function () {
//         index++;
//         if (index >= $list.length) {
//             index = 0;
//         }
//         $list.eq(index).addClass("on").siblings().removeClass("on");
//         $pic.eq(index).fadeIn().siblings().fadeOut();
//     }, 3000)
// })