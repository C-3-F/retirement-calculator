import { useEffect, useState } from "react";
import RetirementForm from "./Components/RetirementForm";
import { Container } from "react-bootstrap";

function App() {
  const [currentAge, setCurrentAge] = useState();
  const [retirementAge, setRetirementAge] = useState(60);
  const [sustainabilityAge, setSustainabilityAge] = useState(90);
  const [currentIncome, setCurrentIncome] = useState();
  const [neededIncome, setNeededIncome] = useState();
  const [savingsPercentage, setSavingsPercentage] = useState(20);
  const [savingsAmount, setSavingsAmount] = useState();
  const [rateOfReturn, setRateOfReturn] = useState(5.25);
  const [inflationRate, setInflationRate] = useState(2);
  const [
    projectedDesiredIncomeAtRetirement,
    setProjectedDesiredIncomeAtRetirement,
  ] = useState();
  const [retirementSavings, setRetirementSavings] = useState();
  const [projectedRetirementIncome, setProjectedRetirementIncome] = useState();
  const [retirementIncomeGap, setRetirementIncomeGap] = useState();

  useEffect(() => {
    const timeUntilRetirement = retirementAge - currentAge;

    const income = neededIncome === undefined || neededIncome === null || neededIncome === 0 ? currentIncome : neededIncome;
    console.log('income', income);

    const _projectedDesiredIncomeAtRetirement = timeValueOfMoney(
      income,
      inflationRate,
      timeUntilRetirement
    );
    setProjectedDesiredIncomeAtRetirement(_projectedDesiredIncomeAtRetirement);

    const _retirementSavings = timeValueOfMoney(
      savingsAmount,
      rateOfReturn,
      timeUntilRetirement
    );
    setRetirementSavings(_retirementSavings);

    const _timeOfSustainability = sustainabilityAge - retirementAge;
    const _projectedRetirementIncome = timeValueOfMoney(
      retirementSavings,
      rateOfReturn,
      _timeOfSustainability
    );
    setProjectedRetirementIncome(_projectedRetirementIncome);

    const _retirementIncomeGap =
      projectedDesiredIncomeAtRetirement - projectedRetirementIncome;
    setRetirementIncomeGap(_retirementIncomeGap);
  }, [
    currentAge,
    retirementAge,
    sustainabilityAge,
    currentIncome,
    neededIncome,
    savingsPercentage,
    rateOfReturn,
    inflationRate,
    savingsAmount,
    projectedDesiredIncomeAtRetirement,
    retirementSavings,
    projectedRetirementIncome,
    retirementIncomeGap,
  ]);

  const timeValueOfMoney = (amount, rate, time) => {
    return amount * (1 + rate / 100 / 12) ** (12 * time);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Retirement Calculator</h1>
        <Container className="mb-5">
          <RetirementForm
            onCurrentAgeChange={setCurrentAge}
            onRetirementAgeChange={setRetirementAge}
            onSustainabilityAgeChange={setSustainabilityAge}
            onCurrentIncomeChange={setCurrentIncome}
            onNeededIncomeChange={setNeededIncome}
            onSavingsPercentageChange={setSavingsPercentage}
            onSavingsAmountChange={setSavingsAmount}
            onRateOfReturnChange={setRateOfReturn}
            onInflationRateChange={setInflationRate}
            currentAge={currentAge}
            retirementAge={retirementAge}
            sustainabilityAge={sustainabilityAge}
            currentIncome={currentIncome}
            neededIncome={neededIncome}
            savingsPercentage={savingsPercentage}
            savingsAmount={savingsAmount}
            rateOfReturn={rateOfReturn}
            inflationRate={inflationRate}
          />
        </Container>
        <Container>
          <h2 className="text-center mb-3">Results</h2>
          {projectedDesiredIncomeAtRetirement === undefined || Number.isNaN(projectedDesiredIncomeAtRetirement) ||
          retirementSavings === undefined || Number.isNaN(retirementSavings) ||
          projectedRetirementIncome === undefined || Number.isNaN(projectedDesiredIncomeAtRetirement) ||
          retirementIncomeGap === undefined || Number.isNaN(retirementIncomeGap) ? (
            <div>
              <div>Fill out the form to see your results</div>
              <p>{console.log('og', projectedDesiredIncomeAtRetirement)}</p>
            </div>
          ) : (
            <div>
              <h3>Projected Desired Income at Retirement:</h3>
              <p>{console.log(projectedDesiredIncomeAtRetirement)}</p>
              <p>${projectedDesiredIncomeAtRetirement.toFixed(2)}</p>
              <h3>Retirement Savings:</h3>
              <p>${retirementSavings.toFixed(2)}</p>
              <h3>Projected Retirement Income:</h3>
              <p>${projectedRetirementIncome.toFixed(2)}</p>
              <h3>Retirement Income Gap:</h3>
              <p>${retirementIncomeGap.toFixed(2)}</p>
            </div>
          )}
        </Container>
      </Container>
    </div>
  );
}

export default App;
