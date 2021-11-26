function myName(){
  let content = "yeet";
  let secCon = document.getElementById("myname").innerHTML
  if(document.getElementById("myname").innerHTML != content){
    document.getElementById("myname").innerHTML = content;
    content = secCon;
  } else{
  document.getElementById("myname").innerHTML = content
  }
}
