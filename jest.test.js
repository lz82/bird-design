it('test common matcher', () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

it('test to be true or fasle', () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

it('test number', () => {
  expect(5).toBeGreaterThan(4);
  expect(4).toBeLessThan(5);
});

it('test object', () => {
  // expect({ name: 'lz', age: 18 }).toBe({ name: 'lz', age: 18 });
  expect({ name: 'lz', age: 18 }).toEqual({ name: 'lz', age: 18 });
});
