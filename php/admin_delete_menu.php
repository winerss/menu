<?php
$id=$_POST["id"];
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'ljl12345';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
mysql_query("set names 'utf8'");
mysql_select_db("menu");
$sql="delete from food where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//��ȡ��¼����
if($num){
    echo "ɾ���ɹ���";
}else{
    echo "ɾ��ʧ�ܣ�";
}
$sql="delete from soul where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//��ȡ��¼����
if($num){
    echo "ɾ���ɹ���";
}else{
    echo "ɾ��ʧ�ܣ�";
}
$sql="delete from zhushi where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//��ȡ��¼����
if($num){
    echo "ɾ���ɹ���";
}else{
    echo "ɾ��ʧ�ܣ�";
}
$sql="delete from water where id='{$id}'";
$result=mysql_query($sql,$conn);
$num=mysql_num_rows($result);//��ȡ��¼����
if($num){
    echo "ɾ���ɹ���";
}else{
    echo "ɾ��ʧ�ܣ�";
}
mysql_close($conn);
?>
