const btn1=document.getElementById("btn1")
const text1=document.getElementById("text1")

let text1Visible = false;
text1.style.display = "none";

btn1.onclick=function (){
  if(text1Visible === true){
   text1.style.display = "none";
   text1Visible = false;
 }else{
   text1.style.display = "block";
   text1Visible = true;
 } 
};

const btn2=document.getElementById("btn2")
const text2=document.getElementById("text2")

let=text2Visible = false;
text2.style.display = "none";

btn2.onclick=function (){
  if(text2Visible === true) {
    text2.style.display = "none";
    text2Visible = false;
  }else{
    text2.style.display = "block";
    text2Visible = true;
  }
}