const asyncAwait = require('../src/2-asyncawait');
const forEach = require('mocha-each');
const { expect } = require('expect');

describe("Async/await", () => {

  forEach([
    [1, 2, 3],
    [4, 3, 7],
    [undefined, 2, 'error'],
    [1, undefined, 'error'],
    [undefined, undefined, 'error'],
  ])
  .it('Oefening 21 (getal1: %s, getal2: %s, verwacht: %s)', (getal1, getal2, expected) => {
    asyncAwait.oefening21(getal1, getal2, (err, result) => {
      if (expected === 'error') {
        expect(err).not.toBeNull();
        expect(err.message).toBe('Arguments must be integers');
      } else {
        expect(err).toBeNull();
        expect(result).toBe(expected);
      }
    });
  });

  forEach([
    [1, 2, 3],
    [4, 3, 7],
  ])
  .it('Oefening 22', async (getal1, getal2, expected) => {
    const result = await asyncAwait.oefening22(getal1, getal2);
    expect(result).toBe(expected);
  });

  forEach([
    [1, 2, 3],
    [4, 3, 7],
    [undefined, 2, 'Arguments must be integers'],
    [1, undefined, 'Arguments must be integers'],
    [undefined, undefined, 'Arguments must be integers'],
  ])
  .it('Oefening 23 (getal1: %s, getal2: %s, verwacht: %s)', async (getal1, getal2, expected) => {
    const result = await asyncAwait.oefening23(getal1, getal2);
    expect(result).toBe(expected);
  });

  forEach([
    [1],
    [4],
    [10],
    [0],
  ])
  .it('Oefening 24 (getal: %d)', async (getal) => {
    const result = await asyncAwait.oefening24(getal);
    expect(result).toBe(getal);
  });

  forEach([
    [-1],
    [-4],
    [-10],
  ])
  .it('Oefening 24 (getal: %d)', async (getal) => {
    expect.assertions(1);
    try {
      await asyncAwait.oefening24(getal);
    } catch (error) {
      expect(error.message).toBe('Getal moet groter of gelijk zijn aan 0');
    }
  });
});