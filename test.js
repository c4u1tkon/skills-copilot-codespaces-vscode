// Simple test file
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Test cases
console.log('Running tests...');

// Test 1: Addition
const result1 = add(2, 3);
if (result1 === 5) {
  console.log('✓ Test 1 passed: add(2, 3) = 5');
} else {
  console.log('✗ Test 1 failed: add(2, 3) expected 5, got', result1);
}

// Test 2: Subtraction
const result2 = subtract(5, 3);
if (result2 === 2) {
  console.log('✓ Test 2 passed: subtract(5, 3) = 2');
} else {
  console.log('✗ Test 2 failed: subtract(5, 3) expected 2, got', result2);
}

// Test 3: This is a test
const testMessage = 'this is a test';
if (testMessage === 'this is a test') {
  console.log('✓ Test 3 passed: "this is a test" message verified');
} else {
  console.log('✗ Test 3 failed: message verification failed');
}

console.log('\nAll tests completed!');
