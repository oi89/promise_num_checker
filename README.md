## Method operates with promises and tests to this method

### File promiseNumChecker.js:
Method receives Promise[] listOfPromises and number rejectionThreshold.
It returns promise, which: 
- resolves if count of rejected promises in listOfPromises is less than rejectionThreshold
- rejects otherwise.

### File \_\_tests__/promise_test.js:
Contain several tests to promisesRejectionNumChecker method with Jest framework.


### Run tests in console:
- npm install
- npm test