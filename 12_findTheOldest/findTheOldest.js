const findTheOldest = function(people)
{
    return people.reduce((obj, item) => {
        if (obj === undefined) return item;

        let objAge = (('yearOfDeath' in obj) ? obj.yearOfDeath : 2022)
                        - obj.yearOfBirth;
        let itemAge = (('yearOfDeath' in item) ? item.yearOfDeath : 2022)
                        - item.yearOfBirth;

        if (itemAge > objAge) return item;

        return obj;
    }, undefined);
};

// Do not edit below this line
module.exports = findTheOldest;
