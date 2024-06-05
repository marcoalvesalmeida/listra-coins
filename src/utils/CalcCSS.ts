export function calc(expression: string): number {
  const sanitizedExpression = expression.replace(/\s+/g, "");

  const evaluate = (expr: string): number => {
    const operators = /[+\-*/]/;
    if (!operators.test(expr)) {
      return parseFloat(expr);
    }

    const parts = expr.split(operators);
    const numbers = parts.map(parseFloat);
    const ops = expr.match(operators);

    if (!ops) {
      return numbers[0];
    }

    let result = numbers[0];
    for (let i = 0; i < ops.length; i++) {
      const num = numbers[i + 1];
      switch (ops[i]) {
        case "+":
          result += num;
          break;
        case "-":
          result -= num;
          break;
        case "*":
          result *= num;
          break;
        case "/":
          result /= num;
          break;
      }
    }
    return result;
  };

  try {
    const result = evaluate(sanitizedExpression);
    return result;
  } catch (error) {
    throw new Error(`Invalid expression: ${expression}`);
  }
}
