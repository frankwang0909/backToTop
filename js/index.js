// JavaScript Document
// 加载后触发事件
window.onload = function() {
	var obtn = document.getElementById('gotop-btn');
	// 获取页面可视区域高度
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
	// 滚动条滚动时触发事件，清除定时器，停在当前位置。
	window.onscroll = function() {
		// 获取滚动条距离顶部的数值
		var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
		if(osTop >= clientHeight){
			// 显示返回按钮
			obtn.style.display = "block";
		}
		else{
			// 隐藏返回按钮
			obtn.style.display = "none";
		}
		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
	obtn.onclick = function() {
		// 设置定时器
		timer = setInterval(function() {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
			// chrome使用document.body.scrollTop 来获取滚动条到顶部的距离。
			// 滚动条滚动由快到慢，即减少的距离从大到小。
			var ispeed = Math.floor(-osTop /6);
			// Math.floor()向下取整, 如果ispeed去正数，会导致osTop最后无法等于0，从而无法消除定时器。
			document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			//滚动条到了顶部之后，清除定时器，否则会一直返回顶部没法下拉滚动条看底下的网页内容。
			isTop = true;
			// console.log(osTop-ispeed);
			if(osTop == 0){
				clearInterval(timer);
			}
		},50)
	}
}