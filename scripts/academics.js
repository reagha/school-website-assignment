const divAccordContent= document.querySelector("#sciences");
const divAccord= document.querySelector("#arts");
const  height= document.querySelector(".accordion");
let check=true;

let showorhide = function(){
  if(check){
  divAccordContent.style.display="block";
  height.style.height="300px";
  check=false;
}
 else{
  divAccordContent.style.display="none";
  height.style.height="200px";
  check=true;
 }
}

let showOrhide = function(){
  if(check){
  divAccord.style.display="block";
  height.style.height="300px";
  check=false;
}
 else{
  divAccord.style.display="none";
  height.style.height="200px";
  check=true;
 }
}
