import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateExpression } from '../src/calculator.js';

test('adds two numbers', () => {
  assert.equal(evaluateExpression('2+3'), '5');
});

test('supports multiplication and division', () => {
  assert.equal(evaluateExpression('8/2*4'), '16');
});

test('handles invalid expressions', () => {
  assert.equal(evaluateExpression('2+'), 'Error');
});

test('supports parentheses', () => {
  assert.equal(evaluateExpression('(2+3)*4'), '20');
});
