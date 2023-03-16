/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;

  sentences.forEach((sentence) => {
    let wordsLen = sentence.split(" ").length;
    if (wordsLen > max) {
      max = wordsLen;
    }
  });

  

  return max;
};

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
