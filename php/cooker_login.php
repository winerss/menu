<?php
$name=$_POST["name"];
$pwd=$_POST["password"];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="select * from cooker WHERE  name='{$name}'";
$rs=mysql_query($sql);//执行sql查询
$num=mysql_num_rows($rs);//获取记录数；
if($num){ // 用户存在；
    $row=mysql_fetch_array($rs);
    if($pwd===$row['password']){ //对密码进行判断。
        echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/cooker_index.html'</script>";
    }else{
        echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/cooker_login.html'</script>";
    }
}else{
    echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/cooker_register.html'</script>";
}

?>

