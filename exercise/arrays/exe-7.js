/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  accounts.forEach((customer) => {
    let total = customer.reduce((tot, curr) => {
      return (tot = tot + curr);
    }, 0);
    if (maxWealth < total) {
      maxWealth = total;
    }
  });

  //console.log(maxWealth);
  return maxWealth;
};

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
