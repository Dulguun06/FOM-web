window.onscroll=function(){
    scrollFunction()
};
function scrollFunction(){
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("mainheader").style.padding = "10px 10px";
document.getElementById("logo").style.height = "60px";
} else {
document.getElementById("mainheader").style.padding = "4vh 110px";
document.getElementById("logo").style.height = "100px";

}
}