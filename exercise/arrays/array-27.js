/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {

    let max = 0

    // iterate the words
    // in each word, iterate size of s
    // 

    
    


    words.forEach(word => {
        // let count = word.length < s.length ? word.length : s.length

        // let i = 0
        
        // while(i < count) {
        //     if (word[i] == s[i]) {
        //         i++;
        //     } else {
        //         break
        //     }
        // }

        // if (i == count) {
        //     max++
        // }


        if (s.indexOf(word) == 0) {
            max++
        }
    })

    return max
};


console.log(countPrefixes((words = ["a", "b", "c", "ab", "bc", "abc"]), (s = "abc")));