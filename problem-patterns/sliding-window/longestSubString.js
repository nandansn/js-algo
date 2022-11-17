// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.


function findLongestSubstring(str) {

    // input string
    // create len variable
    // need to iterate the str chars
    //  - create empty obj
    //  - check if char key exist? exit: add key in obj
    //  - now check the lenght of obj keys and assign if greate than len variable else skip


    // out put length of the sub string


    let len = 0

    for (let index = 0; index < str.length; index++) {
        let subStr = {

        }

        let j = index

        for (j; j < str.length; j++) {
            
              if (str[j] in subStr) {
                break;
              } else {
                subStr[str[j]] = 1;
              }
            
            
        }

        if (len < Object.keys(subStr).length) {
            len = Object.keys(subStr).length;
        }
    }
    return len

}

        findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6