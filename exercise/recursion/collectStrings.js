const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};




function collectStrings(obj) {

    let arr = []

    function helper(obj) {

        let keys = Object.keys(obj)

        if (keys.length === 0) {
            return 
        }

        for (const key of keys) {
            if (typeof obj[key] === 'string') {
                arr.push(obj[key]);
            } else if (typeof obj[key] === 'object') {
              return helper(obj[key]);
            }
        }
        
    }

    helper(obj)

    return arr;


}

console.log(collectStrings(obj));