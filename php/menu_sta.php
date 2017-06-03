<?php
        $name=$_POST["name"];
        $key=$_POST["key"];
        $date=$_POST["date"];
        $dbhost = 'localhost';
        $dbuser = 'root';
        $dbpass = 'ljl12345';
        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
        mysql_query("set names 'utf8'");
        mysql_select_db("menu");
        $sql="UPDATE `menuinfo` SET `status`='已做' WHERE name='{$name}' and date='{$date}'and id='{$key}'";
        mysql_query($sql,$conn);
        mysql_close($conn);
        ?>