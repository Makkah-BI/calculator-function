function calculate(a, operator, b) {
  // Coerce inputs to numbers
  const numA = Number(a);
  const numB = Number(b);

  // Validate operator
  const validOperators = ["+", "-", "*", "/", "%"];
  if (!validOperators.includes(operator)) {
    return "Invalid operator";
  }

  // Handle division by zero for / and %
  if ((operator === "/" || operator === "%") && numB === 0) {
    return "Cannot divide by zero";
  }

  // Perform the operation
  switch (operator) {
    case "+":
      return numA + numB;
    case "-":
      return numA - numB;
    case "*":
      return numA * numB;
    case "/":
      return numA / numB;
    case "%":
      return numA % numB;
  }
}
