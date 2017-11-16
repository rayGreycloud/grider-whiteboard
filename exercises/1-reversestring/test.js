const { reverse, esrever } = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Esrever function exists', () => {
  expect(esrever).toBeDefined();
});

test('Esrever reverses a string', () => {
  expect(esrever('abcd')).toEqual('dcba');
});

test('Esrever reverses a string', () => {
  expect(esrever('  abcd')).toEqual('dcba  ');
});
