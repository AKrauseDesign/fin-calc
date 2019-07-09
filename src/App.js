import React from 'react';
import './App.scss';
import AmortizationLoanCalculator from "./components/AmortizationLoanCalculator";

function App() {
  return (
    <div>
      <AmortizationLoanCalculator title="Amortization Calculator" interest_rate={6} num_years={15} principal={10000} />
    </div>
  );
}

export default App;