
var x=["blue","red","yellow"]
var i=0;
function colorFn() { 
  var o=document.getElementById("myDIV").style.backgroundColor;
  console.log(o)
if(o==="black"){
  document.getElementById("myDIV").style.backgroundColor ="white"
  document.getElementById("aside-right").style.backgroundColor ="white";
  document.getElementById("aside-left").style.backgroundColor ="white";
  document.getElementById("About").style.backgroundColor ="white";
  document.getElementById("Portfolio").style.backgroundColor ="white";
  document.getElementById("Skills").style.backgroundColor ="white";
  document.getElementById("Resume").style.backgroundColor ="white";
  document.getElementById("Contact").style.backgroundColor ="white";
  document.getElementById("About").classList.remove("pcolor")
  document.getElementById("Contact").classList.remove("pcolor")
 
  
}else{
  document.getElementById("myDIV").style.backgroundColor ="black";
  document.getElementById("aside-right").style.backgroundColor ="black";
  document.getElementById("aside-left").style.backgroundColor ="black";
  document.getElementById("About").style.backgroundColor ="black";
  document.getElementById("Portfolio").style.backgroundColor ="black";
  document.getElementById("Skills").style.backgroundColor ="black";
  document.getElementById("Resume").style.backgroundColor ="black";
  document.getElementById("Contact").style.backgroundColor ="black";
  document.getElementById("About").classList.add("pcolor")
  document.getElementById("Contact").classList.add("pcolor")
  
}
 
}
/*if(c=="red"){
    document.querySelector("h1").style.color="green"
}
   
    // i++
    // document.getElementById("myDIV").style.backgroundColor =`${x[i]}`;  
   
    // if(i>x.length){
    // i=0
    // document.getElementById("myDIV").style.backgroundColor =`${x[i]}`;
    // }

}*/
// var x=document.getElementById('#nav').text;
 
/*function scr(x){

  switch(x){
    case 1:
    document.getElementsByClassName("nav-link")[0].style.backgroundColor="#fe5e41"
    break;
  case 2:
    document.getElementsByClassName("nav-link")[1].style.backgroundColor="#44f0c2"
    break;
    case 3:
      document.getElementsByClassName("nav-link")[2].style.backgroundColor="#ffbf69"
      break;
      case 4:
        document.getElementsByClassName("nav-link")[3].style.backgroundColor="#44f0c2"
        break;
        case 5:
          document.getElementsByClassName("nav-link")[4].style.backgroundColor="#6ea9f2"
          break;
  default:
    // code block
  }
  console.log(x)
}*/

// var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
// firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function (x) {
//   // do something...
  
// })

function display(){
  var x=document.querySelector(".aside-left").style.display
  if(x==="inline"){
    document.querySelector(".aside-left").style.display="none";
  }else{
    document.querySelector(".aside-left").style.display="inline";
  }
 
}
// var t=document.querySelector(".btnav").style.display;
// console.log(t)

// document.getElementById("myDIV").addEventListener("change",function(){
//   var v=document.getElementById("Demo").addEventListener.innerHTML += 
//   "Screen width is " + screen.width;
//   console.log(v)
//   
// })


window.onresize = function(){
  var w = window.innerWidth;
  console.log( w )

  if(w>772){
        document.querySelector(".aside-left").style.display="inline-block !important";
        // alert("Please")
      }


  }