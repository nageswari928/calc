export function evaluateExpression(expression) {
  const sanitized = expression.replace(/[^0-9.+\-*/()]/g, '');
  if (!sanitized) {
    return '0';
  }

  try {
    const value = Function(`"use strict"; return (${sanitized});`)();
    if (!Number.isFinite(value)) {
      return 'Error';
    }
    return String(value);
  } catch {
    return 'Error';
  }
}
