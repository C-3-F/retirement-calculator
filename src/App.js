import { useMemo, useState } from "react";
import RetirementForm from "./Components/RetirementForm";
import { Container } from "react-bootstrap";

function App() {
  const [currentAge, setCurrentAge] = useState();
  const [retirementAge, setRetirementAge] = useState(60);
  const [currentIncome, setCurrentIncome] = useState();
  const [neededIncome, setNeededIncome] = useState();
  const [savingsPercentage, setSavingsPercentage] = useState(20);
  const [savingsAmount, setSavingsAmount] = useState();
  const [rateOfReturn, setRateOfReturn] = useState(7);
  const [inflationRate, setInflationRate] = useState(2);
  const [annualWithdrawal, setAnnualWithdrawal] = useState(4);

  // const [retirementFundAmount, setRetirementFundAmount] = useState();

  const handleFormChanges = useMemo(() => {

    
    const projectedRetirmentFundAmount = savingsAmount * (1 + rateOfReturn / 100) ** (retirementAge - currentAge);

    const projectedRetirementIncome = projectedRetirmentFundAmount * (annualWithdrawal / 100);





  }, [
    currentAge,
    retirementAge,
    currentIncome,
    neededIncome,
    savingsPercentage,
    rateOfReturn,
    inflationRate,
  ]);

  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Retirement Calculator</h1>
        <Container className="mb-5">
          <RetirementForm
            onCurrentAgeChange={setCurrentAge}
            onRetirementAgeChange={setRetirementAge}
            onCurrentIncomeChange={setCurrentIncome}
            onNeededIncomeChange={setNeededIncome}
            onSavingsPercentageChange={setSavingsPercentage}
            onSavingsAmountChange={setSavingsAmount}
            onRateOfReturnChange={setRateOfReturn}
            onInflationRateChange={setInflationRate}
            onAnnualWithdrawalChange={setAnnualWithdrawal}
            currentAge={currentAge}
            retirementAge={retirementAge}
            currentIncome={currentIncome}
            neededIncome={neededIncome}
            savingsPercentage={savingsPercentage}
            savingsAmount={savingsAmount}
            rateOfReturn={rateOfReturn}
            inflationRate={inflationRate}
            annualWithdrawal={annualWithdrawal}
          />

          <div>Test Values</div>
          <div>Current Age: {currentAge}</div>
          <div>Retirement Age: {retirementAge}</div>
          <div>Current Income: {currentIncome}</div>
          <div>Needed Income: {neededIncome}</div>
          <div>Savings Percentage: {savingsPercentage}</div>
          <div>Savings Amount: {savingsAmount}</div>
          <div>Rate of Return: {rateOfReturn}</div>
          <div>Inflation Rate: {inflationRate}</div>
        </Container>
        <Container>
          <h2 className="text-center mb-3">Results</h2>
          <h3>Projected Desired Income at Retirement:</h3>
        </Container>
      </Container>
    </div>
  );
}

export default App;
