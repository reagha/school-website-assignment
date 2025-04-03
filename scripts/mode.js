
const content= document.querySelector("#almost");
let check=true;
let  switchCol= function (){
  if(check){
  content.classList.add("darkmode");
  check=false;
}
else{
  content.classList.remove("darkmode");
  check=true;
}
}
