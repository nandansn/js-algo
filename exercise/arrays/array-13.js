/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {

    let matchCount = 0

    for (let i = 0; i < items.length; i++) {
         let item = {}

         item["type"] = items[i][0]
         item["color"] = items[i][1];
         item["value"] = items[i][2];

         if (item[ruleKey] == ruleValue) {
            matchCount++
         }

         

         
        
    }

    return matchCount

};


countMatches(
  (items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "phone"],
    ["phone", "gold", "iphone"],
  ]),
  (ruleKey = "type"),
  (ruleValue = "phone")
);