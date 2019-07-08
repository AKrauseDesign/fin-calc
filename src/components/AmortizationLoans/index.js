import React from 'react';

class AmortizationLoans extends React.Component { 

  math(num1, num2) {
    return num1 + num2; 
  }

  render() { 
    return (
      <p>Hello {this.math(2,4)}</p>
    ) 
  };
}

export default AmortizationLoans; 