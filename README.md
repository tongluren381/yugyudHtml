#git是有限制大小的，所以说图片还是不要传上来了
这个网站没有数据库，不能生成php动态网站，就通过json，ajax动态生成页面 其中有些页面用了vue，
其实没有必要，完全就是练习vue seesion动态存储了id，然后跳转页面 json是用php生成的 有后台部分的页面
，可以下载到本地，用来改变json数据 心得： 1.用vue中的v-html生成的 试过各种方法添加class属性都失败，
我感觉原因就是我添加的时候vue生成的页面还没有生成。 
2.ajax网页面中遍历html，用拼接方法不好，感觉还是设置class名，再添加好，这两种方法我页面都有用。
不过class那个只有一组数据，如果遇到循环遍历的是不是就不好用了 还是得拼接或者还是vue的v-for更好一些。
3.通过ajax和json我感觉单页面可以达到和php页面一样动态切换内容的效果 
4.后台部分数据用正则过滤了数据，感觉正则很有用 
5.后台引用了百度富文本，用的是ue，不建议用um简化版，会出问题。
刚开始在本地测试一切正常，上传到网上却出了错误，原来是ajax跨域出了问题，即使同域也会有跨域问题
最后用jsonp解决了，解决过程出了很多问题，主要是jsonpCallback:"successCallback",这个设置一直没加，加了就没问题了
面包屑导航很适合做移动端列表类目.
