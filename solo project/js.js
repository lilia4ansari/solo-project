// create the variable

let plus=document.querySelectorAll(".plus")
console.log(plus);
let less=document.querySelectorAll(".less")
let btnlike=document.querySelectorAll(".like")
let like=document.querySelectorAll(".fa-heart")
let btnremove=document.querySelectorAll(".btnremove")
// looping througth the array of glasses to check the choice of the custmers
// create a click button
// input is array of glasses
// output is glasses choosen
for(let i=0; i<plus.length;i++){
    // incriment  the number of glasses in the basket
    plus[i].addEventListener("click", function(){
        plus[i].nextElementSibling.innerHTML++
        Total()
    })
    // decriment by click the button
    less[i].addEventListener("click", function(){
        if(less[i].previousElementSibling.innerHTML>1){
        less[i].previousElementSibling.innerHTML--
        Total()}
    })

btnlike[i].addEventListener("click", function(){
    // create a button to like or dislike with changing color
    if(like[i].style.color=="red")
{    like[i].style.color="black"

    }
    else{
        like[i].style.color="red"
    }
})
btnremove[i].addEventListener("click", function(){
    btnremove[i].parentElement.parentElement.remove();
    Total()
})
}
// create a function to calculate the total price
function Total(){
    let prx=document.querySelectorAll(".prx");
    let qte=document.querySelectorAll(".qte");
    let total=document.querySelector(".totalprice");
    var somme=0;
    for(let i=0; i<qte.length;i++){
        somme=somme + prx[i].innerHTML * qte[i].innerHTML;
    }
    total.innerHTML=somme;
}
