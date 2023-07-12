function promisesRejectionNumChecker(listOfPromises, rejectionThreshold) {
  return new Promise((resolve, reject) => {
    let resolvedCount = 0;
    let rejectedCount = 0;

    const handlePromise = function(promise) {
      promise
        .then(() => {resolvedCount++;})
        .catch(() => {rejectedCount++;})
        .finally(() => {
          if (rejectedCount > rejectionThreshold) {
            reject(`[Rejected]. Rejected: ${rejectedCount}, Limit: ${rejectionThreshold}`);
          }

          if (rejectedCount + resolvedCount === listOfPromises.length) {
            resolve(`[Resolved]. Resolved: ${resolvedCount}, Limit: ${rejectionThreshold}`);
          }
        });
    };

    for (let promise of listOfPromises) {
        handlePromise(promise);
    }
  });
}

module.exports = { promisesRejectionNumChecker }