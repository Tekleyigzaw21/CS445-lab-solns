"use strict";

window.onload = function () {
  document.getElementById("btn").onclick = function () {
    // document.getElementById("res").value =
    // parseInt(document.getElementById("num1").value) +
    // parseInt(document.getElementById("num2").value);
    let result = document.getElementById("res");
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    result.value = parseInt(num1.value) + parseInt(num2.value);
  };
};
