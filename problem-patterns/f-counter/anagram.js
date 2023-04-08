function isAnagram(str1, str2) {
  if (str1 === str2) return true;

  if (!str1 || !str2) return false;

  if (str1.length !== str2.length) return false;

  let arr1 = str1.split("");
  let arr2 = str2.split("");

  let counter1 = {};
  let counter2 = {};

  for (let c = 0; c < arr1.length; c++) {
    let c1 = arr1[c];
    let c2 = arr2[c];
    counter1[c1] ? (counter1[c1] += 1) : (counter1[c1] = 1);
    counter2[c2] ? (counter2[c2] += 1) : (counter2[c2] = 1);
  }

  for (const c in counter1) {
    if (counter1[c] !== counter2[c]) return false;
  }

  return true;
}

console.log(isAnagram("silent", "listen"));

console.log(isAnagram("martin", "nitram"));

console.log(isAnagram("cat", "tag"));

console.log(isAnagram("rat", "atr"));
