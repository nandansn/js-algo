/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {

    let X = 0

    operations.forEach((opr) => {
        if (opr === "++X" || opr === "X++") {

            X = X + 1

        } else {
            X = X - 1
        }
    })

    return X
};


console.log(finalValueAfterOperations(["++X","++X","X++"]));