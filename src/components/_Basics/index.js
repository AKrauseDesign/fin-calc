var basics = (function() {
  /**
   * Returns rate divided by 12
   * @param {float|int|double} rate APR / rate applied to loan
   * @returns {float} Pulls out the rate divided by 12 months
   */
  var rate_calc = function(rate) { 
    return parseFloat(((rate / 100) / 12).toFixed(3)); 
  };

  /**
   * Number of payments for a loan term, ex: 30 year term * 12 = 360 payments
   * @param {int} years
   * @returns {int} Total number of payments after amount of years
   */
  var num_payments = function(years) { 
    return years * 12; 
  }

  /**
   * @param num The number to round
   * @param precision The number of decimal places to preserve
   * @returns {float} Rounds up the nearest 100th cent for currency
   */
  var roundUp = function(num, precision) { 
    precision = Math.pow(10, precision); 
    return Math.ceil(num * precision) / precision; 
  };
  
  /**
   * Simple Interest Formula P = (1 + rt)
   * @param {float} principal The principal amount 
   * @param {float} rate The APR / percentage 
   * @param {float} time How many iterations the rate will be valid for
   * @returns {float} Returns Total Interest
   */
  var principalInterest = function(principal, rate, time) { 
    var a = rate * time; 
    var b = 1 + a; 
    return principal * b; 
  };

  /**
   * Compound Interest Formula A=P(1+ (r/n))^nt
   * @param {float} principal The principal amount
   * @param {float} interest_rate Interest Rate from institution 
   * @param {int} number Number of times interest is compounded per unit 't' (Time)
   * @param {int} time The total amount of time that the interest is in action
   * @returns {float} Returns the compound interest on a specific amount. 
   */
  var compoundInterest = function(principal, interest_rate, number, time) {
    return null;
  };

  var totalInterestAcrued = function(payments, paymentAmt, loanAmt) { 
    var paymentAmount = num_payments(payments);
    var amtAfterPayments = paymentAmt * paymentAmount; 
    var totalAcrued = roundUp((amtAfterPayments - loanAmt),2); 
    return totalAcrued;
  }

  return {
    rCalc: rate_calc, 
    numP: num_payments, 
    rUp: roundUp, 
    pI: principalInterest,
    cI: compoundInterest, 
    totalAcrued: totalInterestAcrued, 
  }
})();

export default basics;