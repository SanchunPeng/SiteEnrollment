window.onload = function (){
	var boxDom=document.getElementById("boxDom");
	addHTML(boxDom,9);
	var ul=boxDom.getElementsByTagName("ul");
	var li_h=ul[0].getElementsByTagName("li")[0].offsetHeight;//获得一个li的高度
	var ul_len=ul.length;
	var num=200;//设置一个默认数值
	num += parseInt(Math.random()*100);
	var arry=[];//定义一个存放数值的数组
	number(num,ul_len);
	//每隔2s执行一次
	setInterval(function(){
		arry=[];
		number(num,ul_len);
		num += parseInt(Math.random()*100);
	},1500);
	function number(num,ul_len){
		if(num >10 && num % 10 >=0){
			arry.push(num%10);
			num=Math.floor(num/10);
			number(num);
		}else{
			arry.push(num);
		}
		for(var i=0;i<ul_len;i++){
			//改变每个ul的高度，记住这里要设置position：realtive
			//ul[ul_len-i-1].style.top=(-1)*arry[i]*li_h+"px";
			move(ul[ul_len-i-1]).y((-1)*arry[i]*li_h).end();
		}
	}
};
function addHTML(obj,n){
	for(var i=0;i<n;i++){
		var ul=document.createElement("ul");
		for(var j=0;j<10;j++){
			var li=document.createElement("li");
			var text=document.createTextNode(j);
			li.appendChild(text);
			ul.appendChild(li);
		}
		obj.appendChild(ul);
	}
}