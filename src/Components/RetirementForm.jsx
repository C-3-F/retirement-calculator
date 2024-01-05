import React from "react";
import {
  Form,
  FormGroup,
  FormText,
  InputGroup,
  Col,
  Row,
} from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

const RetirementForm = ({
  onCurrentAgeChange,
  onRetirementAgeChange,
  onCurrentIncomeChange,
  onNeededIncomeChange,
  onSavingsPercentageChange,
  onSavingsAmountChange,
  onRateOfReturnChange,
  onInflationRateChange,
  onAnnualWithdrawalChange,
  currentAge,
  retirementAge,
  currentIncome,
  neededIncome,
  savingsPercentage,
  savingsAmount,
  rateOfReturn,
  inflationRate,
  annualWithdrawal,
}) => {
  const formatNumberWithCommas = (number) => {
    if (number === 0 || number === undefined) {
      return "";
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const removeCommas = (number) => {
    if (/^[\d,]*$/.test(number)) {
      return number.replace(/,/g, "");
    } else {
      return number.replace(/[^\d]/g,"");
    }
  };

  return (
    <Form className="">
      <FormGroup controlId="formAges" className="mb-4">
        <Form.Label>Current Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          onChange={(e) => onCurrentAgeChange(e.target.value)}
          value={currentAge}
        />
      </FormGroup>

      <FormGroup controlId="formRetire" className="mb-4">
        <Form.Label>Anticipated Retirement Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter age"
          onChange={(e) => onRetirementAgeChange(e.target.value)}
          value={retirementAge}
        />
      </FormGroup>

      <FormGroup controlId="formIncome" className="mb-4">
        <Form.Label>Current Annual Income</Form.Label>
        <InputGroup>
          <span className="input-group-text">$</span>
          <Form.Control
            type="text"
            placeholder="Enter income"
            step={1000}
            onChange={(e) =>
              onCurrentIncomeChange(Number(removeCommas(e.target.value)))
            }
            value={formatNumberWithCommas(currentIncome)}
          />
        </InputGroup>
      </FormGroup>

      <FormGroup controlId="formNeededIncome" className="mb-4">
        <Form.Label>
          If your current income seems insufficient for retirement needs,
          estimate the additional annual income required to meet your goals
        </Form.Label>
        <InputGroup>
          <span className="input-group-text">$</span>
          <Form.Control
            type="text"
            placeholder="Enter income"
            step={1000}
            onChange={(e) =>
              onNeededIncomeChange(Number(removeCommas(e.target.value)))
            }
            value={formatNumberWithCommas(neededIncome)}
          />
        </InputGroup>
      </FormGroup>

      <FormGroup controlId="formSavingsPercentage" className="mb-4">
        <Form.Label>
          Percentage of income saved annually for retirement
        </Form.Label>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <FormRange
              onChange={(e) => onSavingsPercentageChange(e.target.value)}
              step={0.1}
              value={savingsPercentage}
            />
          </Col>
          <Col md={2}>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Enter percentage"
                onChange={(e) => onSavingsPercentageChange(e.target.value)}
                value={savingsPercentage}
              />
              <span className="input-group-text">%</span>
            </InputGroup>
          </Col>
        </Row>
      </FormGroup>

      <FormGroup controlId="formSavingsAmount" className="mb-4">
        <Form.Label>Amount currently saved for retirement</Form.Label>
        <InputGroup>
          <span className="input-group-text">$</span>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            step={1000}
            onChange={(e) => onSavingsAmountChange(e.target.value)}
            value={savingsAmount}
          />
        </InputGroup>
      </FormGroup>

      <FormGroup controlId="formRateOfReturn" className="mb-4">
        <Form.Label>Anticipated rate of return on savings.</Form.Label>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <FormRange
              onChange={(e) => onRateOfReturnChange(e.target.value)}
              value={rateOfReturn}
              step={0.1}
            />
          </Col>
          <Col md={2}>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                onChange={(e) => onRateOfReturnChange(e.target.value)}
                value={rateOfReturn}
              />
              <span className="input-group-text">%</span>
            </InputGroup>
          </Col>
        </Row>
        <FormText>
          A balanced portfolio of stocks and bonds has historically averaged a
          rate of return of about 7%. We have chosen that for the default but
          you are welcome to adjust it.
        </FormText>
      </FormGroup>

      <FormGroup controlId="formInflation" className="mb-4">
        <Form.Label>
          Anticipated inflation rate (percentage increase in cost of living)
        </Form.Label>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Form.Range
              onChange={(e) => onInflationRateChange(e.target.value)}
              value={inflationRate}
              max={10}
              step={0.1}
            />
          </Col>
          <Col md={2}>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                onChange={(e) => onInflationRateChange(e.target.value)}
                value={inflationRate}
              />
              <span className="input-group-text">%</span>
            </InputGroup>
          </Col>
        </Row>
        <FormText className="text-center">
          Inflation has averaged about 2% per year over the last 20 years. We
          have chosen that for the default but you are welcome to adjust it.
        </FormText>
      </FormGroup>
      <FormGroup controlId="formAnnualWithdrawal" className="mb-4">
        <Form.Label>
          Annual withdrawal rate (percentage of retirement savings withdrawn
          each year)
        </Form.Label>
        <Row>
          <Col style={{ display: "flex", alignItems: "center" }}>
            <Form.Range
              onChange={(e) => onAnnualWithdrawalChange(e.target.value)}
              value={annualWithdrawal}
              max={10}
              step={0.1}
            />
          </Col>
          <Col md={2}>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                onChange={(e) => onAnnualWithdrawalChange(e.target.value)}
                value={annualWithdrawal}
              />
              <span className="input-group-text">%</span>
            </InputGroup>
          </Col>
        </Row>
        <FormText className="text-center">
          Annual withdrawal rate typically follow's the WQilliam Bengen rule of
          4%. We have chosen that for the default but you are welcom e to adjust
          it.
        </FormText>
      </FormGroup>
    </Form>
  );
};

export default RetirementForm;
