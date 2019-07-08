import React from 'react';
import './App.scss';
import Welcome from './components/Welcome';
import AmortizationLoans from "./components/AmortizationLoans";

function App() {
  return (
    <div>
      <Welcome name='Andrew' />
      <AmortizationLoans title="John" />
    </div>
  );
}

export default App;