import basics from '../_Basics';

/**
 * Cool Millions calculator 
 * @param {float} interest_rate Interest Rate from institution
 * @param {int} num_years Loan payment length in years
 * @param {int} principal Total amount of loan without interest
 * @returns {float} Monthly payment amount
 */
coolmil_calc_v1_0_0 = function(interest_rate, num_years, principal) {
  var rate = basics.rCalc(interest_rate);
  var pmts = basics.numP(num_years); 
  var m = principal * ((rate * (Math.pow((1 + rate), pmts))) / ((Math.pow((1 + rate), pmts)) - 1) );
  var v = basics.rUp(m, 2);
  return v; 
}