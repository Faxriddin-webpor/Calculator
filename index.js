"use script";
function calc() {
  let D = "";
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;
  if (input2 == "+") {
    D = input1 + input3;
  } else if (input2 == "-") {
    D = input1 - input3;
  } else if (input2 == "*") {
    D = input1 * input3;
  } else if (input2 == "/") {
    D = input1 / input3;
  } else if (input2 == "%") {
    D = input1 % input3;
  } else if (input2 == "==") {
    D = input1 == input3;
  } else {
    alert("Bunday Raqam Mavjud Emas !!!");
  }
  document.getElementById("result").innerHTML = D;
}
