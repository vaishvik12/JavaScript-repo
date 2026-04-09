function namePrint(){
  let name = document.getElementById("input");
  let result = document.querySelector("#js-result");
  result.innerHTML = `Your name is: ${name.value}`;
}