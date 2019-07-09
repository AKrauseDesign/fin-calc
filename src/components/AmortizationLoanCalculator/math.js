import basics from '../_Basics';

/**
* Amortizing loan calculator 
* @param {float} interest_rate Interest Rate from institution
* @param {int} num_years Loan payment length in years
* @param {int} principal Total amount of loan without interest
* @returns {float} Monthly payment amount
*/
function math(interest_rate, num_years, principal) {
  var rate = basics.rCalc(interest_rate);
  var pmts = basics.numP(num_years); 
  var total = 0; 
  var m = principal * ((rate * (Math.pow((1 + rate), pmts))) / ((Math.pow((1 + rate), pmts)) - 1) );
  total = basics.rUp(m, 2);
  return total; 
}

export default math;