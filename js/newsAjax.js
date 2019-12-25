$(function(){	
	

		
	$.ajax({
		type:'GET',		
		// url:'sever/xinwen.json',
		url:'http://www.yugyud.com/sever/xinwen.js',
		timeout:2000,
		// async:true, 
		// crossDomain:false,  //是否跨域
		// dataType:'json',
        dataType:'jsonp',  
        // data:'',  
        jsonp:'callback',  //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
        jsonpCallback:"successCallback",  //必须加这个,之前没加都不行  原因: 用jsonp跨域访问, 会注册callback, 生产一个随机的callback，正确的jsonp格式应该是 callback({"id" : "1","name" : "小王"}); 
                                          // 所以我们需要定义callback，前台指定回调函数jsonpCallback：successCallback，后台指定返回的json格式：String jj = "successCallback("+aapJson+")";

    		
		success:function(data,textStatus){
			
			console.log("ok");
			console.log(data);
			var jsondatas = eval(data);
			// $.each(jsondatas, function (i, item) {
			for(var i=0;i<12;i++){	
				
												
			jsondatas[i].jianjie = jsondatas[i].jianjie.substring(0, 53) + "..."	;		
				
			 var newsHtml = $("<div class='col-sm-6 col-md-4'><a  href='javascript:void(0);' onclick='cunIdtiao("
			  +jsondatas[i].id
			  +")'><div class='thumbnail'>"
              +jsondatas[i].imgH      
              +"<div class='caption' ><h4 style='height: 50px;'>"
              +jsondatas[i].title
              +"</h4><p style='height: 60px;'>"
              +jsondatas[i].jianjie
              +"...</p><p><small>"
              +jsondatas[i].author
              +"</small><small style='margin-left:10px;'>"
              +jsondatas[i].date
              +"</small><small style='margin-left:10px;'>"
              +jsondatas[i].weight
              +"星</small></p></div></div></a></div>");
    　　　　

//          <div class="col-sm-6 col-md-4">
//             	<a  href="/yugyud/newcontent.php?id=$id " >
//                  <div class="thumbnail">             
//                      {imgeUrl}

	//                  <div class="caption">
	//                      <h4 >{title}</h4>
	//                      <p>{jianjie}</p>
	//                      <p>
	//                        <small>{author}</small>  <small style='margin-left:10px;'>{date}</small><small style='margin-left:10px;'>{weight}</small>
	//                      </p>
	//                  </div>
//                  </div>
//              </a>
//          </div>









				 $("#news").append(newsHtml);
			}
			
		// )	
			
		},
		error: function(e){
			console.log("错误");
            /*错误信息处理*/
			 
			 alert(e.readyState);
			 alert(e.status);
			 alert(e.statusText);
			 alert(e.responseText);
			
		}
	});
	

	
	
});

function cunIdtiao(id) {
		
		sessionStorage.setItem('id', id);
		location.href="newscontent.html";
	}
	