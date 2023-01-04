function isNumber(n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
}

const inputNumber1 = document.querySelector("#number1");
const inputNumber2 = document.querySelector("#number2");
const inputResult = document.querySelector("#result");
const buttonSum = document.querySelector(".btn-sum");
const buttonMultiply = document.querySelector(".btn-multiply");
const buttonClear = document.querySelector(".btn-clear");

function clearForm() {
   inputNumber1.value = "";
   inputNumber2.value = "";
   inputResult.value = "0";
   inputNumber1.classList.remove("input-error");
   inputNumber2.classList.remove("input-error");
}

function calculateSum() {
   const n1 = inputNumber1.value;
   const n2 = inputNumber2.value;
   let result = 0;

   if (isNumber(n1) && isNumber(n2)) {
      result = parseFloat(n1) + parseFloat(n2);
      inputResult.value = result;
   } else {
      inputNumber1.classList.add("input-error");
      inputNumber2.classList.add("input-error");
   }
}

function calculateMultiply() {
   const n1 = inputNumber1.value;
   const n2 = inputNumber2.value;
   let result = 0;

   if (isNumber(n1) && isNumber(n2)) {
      result = parseFloat(n1) * parseFloat(n2);
      inputResult.value = result;
   } else {
      inputNumber1.classList.add("input-error");
      inputNumber2.classList.add("input-error");
   }
}

buttonSum.addEventListener("click", calculateSum);
buttonMultiply.addEventListener("click", calculateMultiply);
buttonClear.addEventListener("click", clearForm);