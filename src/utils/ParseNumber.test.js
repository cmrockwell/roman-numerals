const parseNumber = require('./ParseNumber');

test('parse number', () => {
  expect(() => {
    parseNumber("?query=0")
  }).toThrowError('minimum number is 1');
  
  expect(() => {
    parseNumber("?query=-150")
  }).toThrowError('minimum number is 1');

  expect(() => {
    parseNumber("?number=11")
  }).toThrowError('incorrect query param');
  
  expect(parseNumber("?query=256")).toBe(256);
  
  expect(() => {
    parseNumber("?query=a22")
  }).toThrowError('entry is not an integer');

  expect(() => {
    parseNumber("?query=22.0")
  }).toThrowError('entry is not an integer');

  expect(() => {
    parseNumber("?query=4001")
  }).toThrowError('maximum value 3999');
  
  expect(parseNumber("?query=1")).toBe(1);
  
  expect(parseNumber("?query=255")).toBe(255);
});
