const rentInput = document.getElementById("input-rent");
const utilitiesInput = document.getElementById("input-utilities");
const salesInput1 = document.getElementById("input-sales1");
const salesInput2 = document.getElementById("input-sales2");
const additionalCostsInput = document.getElementById("input-additional-costs");
const btnCalculate = document.getElementById("btn-calculate");
const result = document.getElementById("result");

btnCalculate.onclick = function () {
  const rent = Number(rentInput.value);
  const utilities = Number(utilitiesInput.value);
  const sales1 = Number(salesInput1.value);
  const sales2 = Number(salesInput2.value);
  const additionalCosts = Number(additionalCostsInput.value);
  if (
    isNaN(rent) ||
    isNaN(utilities) ||
    isNaN(sales1) ||
    isNaN(sales2) ||
    isNaN(additionalCosts)
  ) {
    result.innerHTML =
      "<div class = 'error fade-in'><p>Будь ласка, введіть числові значення!</p></div>";
  } else {
    let goodSold = sales1 + sales2;
    let cost = goodSold / (1 + 0.3);
    goodSold -= cost;
    let tax1 = (goodSold / 100) * 18;
    let tax = tax1.toFixed(0);
    goodSold -= tax;
    let salary1 = (sales1 / 100) * 3;
    let salary2 = (sales2 / 100) * 3;
    const salaryToEmployees = salary1 + salary2;
    const total1 = rent + utilities + salaryToEmployees + additionalCosts;
    const total = total1.toFixed(0);
    const netProfit1 = goodSold - total;
    const netProfit = netProfit1.toFixed(0);
    result.innerHTML = `<div class = 'resultt fade-in'>
    <h3>Ось витрати за цей місяць:</h3>
     <h4 class=''>1: Оренда приміщення:<span class='costs'> - ${rent} грн</span> </h4>
     <h4>2: Комунальні послуги:<span class='costs'> - ${utilities} грн</span></h4>
     <h4>3: Зарплата працівникам:<span class='costs'> - ${salaryToEmployees} грн</span></h4>
     <h4>4: Податок:<span class='costs'> - ${tax} грн</span></h4>
     <h4>Загалом:<span class= 'costs'> - ${total} грн</span></h4>
     <h4>Чистий дохід:<span class='${netProfit >= 0 ? "profit" : "costs"}'>  ${
      netProfit >= 0 ? "+" : ""
    } ${netProfit}грн</span></>
     </div>`;
  }
};
