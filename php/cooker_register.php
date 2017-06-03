<?php
$name=$_POST["name"];
$pwd=$_POST["password"];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="
      insert into cooker(
                        name,
                        password
                        )
                 values(
                        '{$name}',
                        '{$pwd}'
                       )";
if(!mysql_query($sql,$conn)){
   echo "<script type='text/javascript'>alert('注册失败,请重新注册！！！')</script>";
   echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/cooker_register.html'</script>";
} else {
    echo "<script type='text/javascript'>alert('恭喜，你注册成功！！！')</script>";
    echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/cooker_login.html'</script>";
}
mysql_close($conn);

?>

