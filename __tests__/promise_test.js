const { promisesRejectionNumChecker } = require('../promiseNumChecker')


let promises = [
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), 
  new Promise((resolve, reject) => setTimeout(() => reject(), 2000)), 
  new Promise(resolve => setTimeout(() => resolve(3), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(), 1000))
];

describe('Promises rejection checker', () => {
  test('returns resolved promise when rejected count is less than the rejection threshold', async () => {
    const exptectedResult = "[Resolved]. Resolved: 2, Limit: 3"

    await expect(promisesRejectionNumChecker(promises, 3)).resolves.toBe(exptectedResult);
  });

  test('returns resolved promise when rejected count is equal to the rejection threshold', async () => {
    const exptectedResult = "[Resolved]. Resolved: 2, Limit: 2";

    await expect(promisesRejectionNumChecker(promises, 2)).resolves.toBe(exptectedResult);
  });

  test('returns rejectes promise when rejected count is higher than the rejection threshold', async () => {
    const exptectedResult = "[Rejected]. Rejected: 2, Limit: 1";

    await expect(promisesRejectionNumChecker(promises, 1)).rejects.toMatch(exptectedResult);
  });
});