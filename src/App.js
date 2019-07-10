import React from 'react';

// @mataerial-ui core elemements
import Container from '@material-ui/core/Container'; 
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup'; 
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; 

import './App.scss';

// components
import AmortizationLoanCalculator from "./components/AmortizationLoanCalculator";

// forms 
import CalcForm from './layouts/forms/CalcForm';


function App() {
  
  return (
    <Container maxWidth="sm">
      <CalcForm></CalcForm>
      <AmortizationLoanCalculator title="Amortization Calculator" interest_rate={6} num_years={15} principal={10000} />

    </Container>
  );
}

export default App;