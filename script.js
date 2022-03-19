//Element can be toggled on and off when checkbox is checked
const checkBox = document.getElementById("split_btn");
const people = document.getElementById("people");
const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const calculate = document.getElementById("calculate");
const results = document.getElementById("results");

//Element is displayed when checkbox is checked by passing var through an event
checkBox.addEventListener("click", (e)=>{
  if (checkBox.checked) {
    people.style.display = "block";
  } else {
    people.style.display = "none";
  }
});

calculate.addEventListener("click", (e)=>{
  if ((bill.value == "") || (people.value == "" )) {
    alert("Enter Value");
    return
  }

  let sum = (bill.value * (tip.value/100)/people.value)

  results.innerHTML = sum
})





