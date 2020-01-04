<?php
	header("Content-type:text/html;charset=UTF-8");
	require "../admin/connet.php";   //导入mysql.php访问数据库 
	$conn=new Mysql();
	$sql="SELECT * FROM news WHERE type='新闻' order by id desc ";
    $result=$conn->sql($sql);

	
	$num_results = $result -> num_rows; //结果行数 
	$forHtml="";
	$w5Html="";
	 for($i =0  ;$i < $num_results ;$i++)//循环输出每组元素
	  {
	 	$row = $result -> fetch_assoc();
		echo $row['id'];
		if($row["weight"]==5){
			$weHtml="<span>影响力: <span class='star'><i>★★★★★</i></span></span>";
			$w5Html.="<li><a target='_blank' href='news/newscontent-".$row['id']."'>".$row['title']."</a></li>";
		}elseif($row["weight"]==4){
			$weHtml="<span>影响力: <span class='star'><i>★★★★</i>★</span></span>";
		}elseif($row["weight"]==3){
			$weHtml="<span>影响力: <span class='star'><i>★★★</i>★★</span></span>";
		}elseif($row["weight"]==2){
			$weHtml="<span>影响力: <span class='star'><i>★★</i>★★★</span></span>";
		}elseif($row["weight"]==1){
			$weHtml="<span>影响力: <span class='star'><i>★</i>★★★★</span></span>";
		};
		$row['jianjie']=mb_substr($row['jianjie'], 0, 53, 'utf-8')."...";

		
		
		
		$forHtml.="<a :href='newscontent-".$row['id'].".html'>
								<!-- 蜘蛛抓取不到js，所以为了优化最好的事href跳转，不用js，ajax -->
								
								<div class='row '>

									<div class='col-md-7'>

										<h3 >
											".$row['title']."
										</h3>
										<p>".$row['date']."</p>
										<p >
											".$weHtml."
										</p>
																																						

										<p class='text-muted' style='font-size: 16px;' >
											".$row['jianjie']."
										</p>

									</div>
									<div class='col-md-5'   >
										<img class='img-responsive center-block' src='".$row['imgUrl']."' alt='".$row['title']."'>
									</div>
								</div>
							</a>
							<hr>";
	





		
		
	 }	;

	$htmlContent="";

// 	echo  json_encode($data);
 file_put_contents("newslist1.html", $htmlContent);









	
// file_put_contents('test.html', $htmlContent);
// $jsonp="successCallback(".$json_string.")";
// echo $jsonp ;

// file_put_contents('zhishi.js', $jsonp);	




	