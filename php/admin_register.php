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
      insert into admin(
                        name,
                        password
                        )
                 values(
                        '{$name}',
                        '{$pwd}'
                       )";
if(!mysql_query($sql,$conn)){
   echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/admin_register.html'</script>";
} else {
    echo "<script type='text/javascript'>window.location.href='http://localhost/menu/html/admin_login.html'</script>";
}
mysql_close($conn);

?>

