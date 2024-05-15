let rslt = document.querySelector(".rslt");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let a = 0;
inc.addEventListener('click',function(){
   
if(a === 5){
    alert("sorry!");
}else{
    a++;
    rslt.innerHTML = a;

}

});