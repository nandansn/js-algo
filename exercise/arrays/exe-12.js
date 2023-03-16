/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {

    let persons = []


    for (let i = 0; i < names.length; i++) {
        
        let p = {}

        p["name"] = names[i]
        p["height"] = heights[i]

       

        persons.push(p)
    }

    persons.sort((a,b) =>  { return b.height - a.height })

    return persons.map(p => p.name);
};

sortPeople((names = ["Mary", "John", "Emma"]), (heights = [180, 165, 170]));