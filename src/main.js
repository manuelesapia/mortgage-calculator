
document.addEventListener("DOMContentLoaded", function (event) {
    preCheck();
  });
  
  function preCheck() {
    init();
  }
  function init() {
    mortgageCalaculator.init();
  }

  const mortgageCalaculator = {
    init: function(){
 
        const btnSubmit = document.querySelector("#submit");
        btnSubmit.addEventListener("click", function(){
            calculateMortgage()
        });


        function calculateMortgage() {
            const principal = parseFloat(document.getElementById('loanAmount').value);
            const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
            const termYears = parseInt(document.getElementById('lengthLoan').value);
            const insurance = parseInt(document.getElementById('insurance').value);

            if (!principal || !annualInterestRate || !termYears) {
                document.getElementById('resultText').innerHTML = "Please fill all fields correctly.";
                return;
            }
        
            const monthlyInterestRate = annualInterestRate / 12 / 100;
            const totalPayments = termYears * 12;
        
            const monthlyInsurance = insurance;

            const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments);
            const denominator = Math.pow(1 + monthlyInterestRate, totalPayments) - 1;
        
            if (!insurance) {
                let monthlyPayment = principal * (numerator / denominator);
                 document.getElementById('resultText').innerHTML = "Your Monthly mortgage payment without Insurance will be:" + monthlyPayment.toFixed(2) + " euro";

            } else{
                let monthlyPayment = principal * (numerator / denominator) + monthlyInsurance;
                document.getElementById('resultText').innerHTML = "Your Monthly mortgage payment including Insurance will be:" + monthlyPayment.toFixed(2) + " euro";
            }            
        };
    },
  }
