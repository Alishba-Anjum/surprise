//page one
let page1 = document.querySelector(".page1");
let button = document.querySelector("#page1-btn");

//page three
let page3 = document.querySelector(".page3");
let icon = document.querySelector("#icon")
let icon4 = document.querySelector("#icon4");
let page4 = document.querySelector(".page4");
let page5 = document.querySelector(".page5");
let icon5 = document.querySelector("#icon5");
let page6 = document.querySelector(".page6")


button.addEventListener("click", function () {
  page1.style.display = "none";
  page3.style.display = "block";
  page3.style.display= "flex";
});
 icon.addEventListener("click",function(){
  page3.style.display = "none";
  page4.style.display = "block";
  page4.style.display = "flex";
 })
icon4.addEventListener("click", function(){
  page4.style.display = "none";
  page5.style.display = "block";

})
icon5.addEventListener("click", function(){
  page5.style.display = "none";
  page6.style.display = "block";

})