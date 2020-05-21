<?php
#var_dump($_GET); #superglobal(forms) -- update/create

#stops either
#die();
$all_name = $_GET['full-name'];
$age = $_GET['age'];
$gender = $_GET['gender'];

/*Getting the first name if it exists*/
$space_position = strpos($all_name,' ');

if($space_position == false){
  $first_name =  $all_name;
}else{
  $first_name =  substr($all_name,0,$space_position);
}

#echo $age;
$greeting = $first_name;
 
if($gender == "f"){


}else if($gender == "m"){
  if($age <= 12){
    //redirecting you to another page in PHP
    header("Location:index.php?msg= Sasa boi, ${greeting}&greet=yes");
  }else if($age >= 13 and $age <= 19){
    header("Location:index.php?msg=Wolan TeenieMan, ${greeting}&greet=yes");
  }else if($age >= 20 and $age <= 30){
    header("Location:index.php?msg=Wagwan Yout, ${greeting}&greet=yes");
  }else{
    header("Location:index.php?msg=Itakuwaje Bazzu, ${greeting}&greet=yes");
  }
}else{

}

