window.onload=function(){
    // var container = document.getElementById('container');
    // console.log(container)
    imgLocation('container','box')
}
// 第一行放了几张图
// 操作的下一张图，将其放在上一行高度最小的列中
function imgLocation(parent, content){ // 当前有多少张图片要摆放
    var cparent = document.getElementById(parent)
    // cparent中有多少个box
    var ccontent = getChildElement(cparent, content)
// 该操作第几张图
    // 读取一个容器的宽度（包含边框
    var imgWidth = ccontent[0].offsetWidth 
    // 获取一行放几张图 向下取整   clientWidth 获取屏幕宽度（不包括边框
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    // 设置cparent宽度
    cparent.style.width = imgWidth * num + 'px'
    
    var BoxHeightArr = []
    for(var i = 0; i < ccontent.length; i++){
        if(i < num){
            BoxHeightArr[i] = ccontent[i].offsetHeight
        } else{ // 第二行图片 
            var minHeight = Math.min.apply(null, BoxHeightArr) // 最小值
            var minIndex = BoxHeightArr.indexOf(minHeight) // 最小值下标

            ccontent[i].style.position = 'absolute' // 设为绝对定位
            ccontent[i].style.top = minHeight + 'px'
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'

            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
        }
    }

    console.log(ccontent)
}

function getChildElement(parent, content){ // 找到parent中所有的content
    var allContent = parent.getElementsByTagName('*') // * - parent下所以的标签名
    var contentArr = []
    for(var i = 0; i < allContent.length; i++){
        if(allContent[i].className == content){ // 注意大小写 className
            contentArr.push(allContent[i])
        }
    }
    return contentArr
    console.log(contentArr)

}
