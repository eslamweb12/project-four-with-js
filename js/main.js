let btn=document.getElementById("btn");
btn.addEventListener('click',randmom);
console.log("fhaj");
function randmom(){
    document.body.style.backgroundColor =  '#' +Math.random().toString(16).slice(2,8);
}
