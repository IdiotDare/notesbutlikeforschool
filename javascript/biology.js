function myName(){
  let content = "yeet";
  let secCon = "yeet again";
  if(document.getElementById("myname").innerHTML != content){
    document.getElementById("myname").innerHTML = content;
  } else{
  document.getElementById("myname").innerHTML = secCon;
  }
}
