#readyLoadImg
**一个轻量级的图片预加载/替换库.在页面启动时使用有损压缩后的低质量图片,保证快速的渲染,随后在浏览器无压力时预加载相应图片,预加载完成后进行替换:**  
1. 页面默认加载有损压缩图片,如demo-min.png,在dom渲染完成后它们将会被自动替换成高质量图片,而且已经预加载完成,并不会出现卡屏现象  
2. css中背景图片也可以通过有损压缩,页面完成后替换.  
3. 指定某几张图片延时加载  
4. 指定预加载任意的图片数组    


**插件不依赖第三方库，同时支持AMD([requirejs](http://apps.bdimg.com/libs/require.js/2.1.9/require.js))方式引入.**
首先你需要通过'new'来创建一个实例,然后通过start启动:
```
var imgLoad = new readyLoadImg();
imgLoad.start();
```

readyLoadImg()下的参数简单说明:
```
var imgLoad = new readyLoadImg(attrName, srcName, timeOut);
```


- **attrName**: 图片上的标记属性,如<img load-img>.默认为'load-img',如果有冲突可以替换为其他字符串.
- **srcName**: 有损低质量图片与高质量图片命名区别,默认为'-min'.比如你可以将有损图片命名为'demo-min.png',而高质量图片为'demo.png'.
- **timeOut**: 在页面渲染完成后是否需要继续等待,默认为100ms.

  

背景图片参数:
```
  imgLoad.bgToggle(true);
```


- **bgToggle(true)**: 开启此模式后,'load-img'属性可以标记在任意HTML元素上,插件将去寻找它们的背景图片,在预加载完成后将它们逐一替换.






两个简单的使用示例:

```
<!--替换图片-->
<img src="./images/bower-min.png" alt="" load-img/>
		<script type="text/javascript">
			var RLI = new readyLoadImg ();
      RLI.start();
		</script>
```

```
<!--延时指定的图片-->
		<img src="./images/bower-logo.png" alt="" delay-img />
		<script type="text/javascript">
			var RLI = new readyLoadImg ();
      		RLI.delay(); 	//支持一个参数,为延时时间,单位:毫秒
      		RLI.old;		//被readyLoadImg覆盖的全局记录在old上
		</script>
```
