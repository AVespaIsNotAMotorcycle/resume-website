import React from 'react';
import checkForTests from './TestCheck';

it("checks that all exported functions have associated tests", () => {
  return checkForTests('./').then((data) => expect(data).toBe(false));
});
