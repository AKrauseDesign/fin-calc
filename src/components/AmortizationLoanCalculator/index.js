import React from 'react';
import math from './math';

class AmortizationLoanCalculator extends React.Component { 
  render() { 
    return(
      <div>
        <p>{this.props.title}</p>
        <p>Payment Amount: {math(this.props.interest_rate,this.props.num_years,this.props.principal)}</p>
      </div>
    )
  }
}

export default AmortizationLoanCalculator; 