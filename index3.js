//console.log(document)
//console.log(document.getElementById("total"))
//console.log(document.getElementsByClassName("plus"))
//console.log(document.getElementsByTagName("p"))
//console.log(document.querySelector("#total"))
//console.log(document.querySelectorAll(minus))


const btnminus=document.querySelectorAll(".minus")
const btnlike=document.querySelectorAll(".like")
const btnplus=document.querySelectorAll(".plus")
const checkboxTag=document.getElementsByClassName("check")
const btndelete=document.querySelectorAll(".delete")
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click",incrament)
  checkboxTag[i].addEventListener("click",totalPrice)
  btnlike[i].addEventListener("click",wishlist)
  btnminus[i].addEventListener("click",decrement)
  btndelete[i].addEventListener("click",supprimer)
}


//incrament function 

function incrament(event) {
// console.log(event)
var btnplus=event.target
// console.log(btnplus)
var divelt=btnplus.parentElement
// console.log(divelt)
var qunetitytag=divelt.querySelector("p")
// console.log(qunetitytag)
var qunetityValue=Number (qunetitytag.innerHTML);
qunetityValue=qunetityValue+1;
//  console.log(typeof(qunetityValue))
qunetitytag.innerHTML=qunetityValue
var trElt=divelt.parentElement.parentElement
// console.log(trElt)
var unitePricevalue=Number(trElt.querySelector(".unitePrice").innerHTML )
// console.log(unitePricevalue)
var priceTag=trElt.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
// console.log(priceValue)
priceValue=qunetityValue*unitePricevalue
priceTag.innerHTML=priceValue
};


// function decrement

function decrement(event) {
  // console.log(event) 
  var btnplus=event.target
  // console.log(btnplus)
  var divelt=btnplus.parentElement
  // console.log(divelt)
  var qunetitytag=divelt.querySelector("p")
  // console.log(qunetitytag)
  var qunetityValue=Number (qunetitytag.innerHTML);
  qunetityValue=qunetityValue-1;
  //  console.log(typeof(qunetityValue))
  qunetitytag.innerHTML=qunetityValue
  var trElt=divelt.parentElement.parentElement
  // console.log(trElt)
  var unitePricevalue=Number(trElt.querySelector(".unitePrice").innerHTML )
  // console.log(unitePricevalue)
  var priceTag=trElt.querySelector(".price")
  var priceValue=Number(priceTag.innerHTML)
  // console.log(priceValue)
  priceValue=qunetityValue*unitePricevalue
  priceTag.innerHTML=priceValue
  };


// total price function

function totalPrice(e){
  var checkbox=e.target;
  var priceValue=Number(checkbox.parentElement.parentElement.querySelector(".price").innerHTML)
  var totalTag=document.getElementById("total")
  var totalValue=Number(totalTag.innerHTML)
  var btnplus=checkbox.parentElement.parentElement.querySelector(".plus")
  var btnminus=checkbox.parentElement.parentElement.querySelector(".minus")

  if(checkbox.checked===true){
    totalValue+=priceValue
    btnplus.setAttribute("disabled",true)
    btnminus.setAttribute("disabled",true)
  }
  else{
    totalValue+=priceValue
    btnplus.removeAttribute("disabled",true)
    btnminus.removeAttribute("disabled",true)
  }
  totalTag.innerHTML=totalValue
}


// function like

function wishlist(event) {

  var btnlike = event.target


  if(btnlike.style.color==="gray"){
      btnlike.style.color = "red"
  }
  else {
      btnlike.style.color = "gray"
  } 
}

// function delete

function supprimer(event){
  var btndelete= event.target
  var trElt=btndelete.parentElement.parentElement.parentElement.parentElement
  trElt.remove()
}
