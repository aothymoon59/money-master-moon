function getInputAmountById(inputId) {
  let inputField = document.getElementById(inputId);
  let inputAmountStr = inputField.value;
  let inputAmount = parseFloat(inputAmountStr);
  return inputAmount;
}
function setElementValueById(elementId, value) {
  let element = document.getElementById(elementId);
  element.innerText = value;
}

document.getElementById("calculate").addEventListener("click", function () {
  let income = getInputAmountById("income");
  let foodAmount = getInputAmountById("food");
  let rentAmount = getInputAmountById("rent");
  let clothesAmount = getInputAmountById("clothes");

  if (
    isNaN(income) ||
    isNaN(foodAmount) ||
    isNaN(rentAmount) ||
    isNaN(clothesAmount)
  ) {
    alert("Input valid number");
    return;
  } else if (
    income <= 0 ||
    foodAmount < 0 ||
    rentAmount < 0 ||
    clothesAmount < 0
  ) {
    alert("Input positive amount");
  }

  let totalExpenseAmount = foodAmount + rentAmount + clothesAmount;

  if (totalExpenseAmount > income) {
    alert("আয় বুঝে ব্যয় কর. You have not enough money for expense");
    return;
  }
  //   total expense
  setElementValueById("total-expense", totalExpenseAmount);
  //   balance
  let balance = income - totalExpenseAmount;
  setElementValueById("balance", balance);
});

document.getElementById("saveBtn").addEventListener("click", function () {
  //   saving
  let income = getInputAmountById("income");
  let saveAmount = getInputAmountById("save-Field");
  let balance = document.getElementById("balance");
  let balanceAmountStr = balance.innerText;
  let balanceAmount = parseFloat(balanceAmountStr);

  if (isNaN(saveAmount)) {
    alert("Input valid saving amount");
    return;
  } else if (isNaN(balanceAmount)) {
    alert("You must have balance for savings");
    return;
  }

  let savingBalance = (income * saveAmount) / 100;
  if (saveAmount > 100) {
    alert("Save amount could not greater than 100 percent");
    return;
  } else if (savingBalance > balanceAmount) {
    alert("আয় বুঝে সঞ্চয় করো. You have not enough money for savings");
    return;
  }

  let remainingBalance = balanceAmount - savingBalance;

  setElementValueById("saving-amount", savingBalance);
  setElementValueById("remaining-balance", remainingBalance);
});
