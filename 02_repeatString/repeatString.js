const repeatString = function(string, num)
{
    let repeatedString = "";

    if (num >= 0)
        for (let x = 0; x < num; x++)
            repeatedString += string;
    else
        repeatedString = "ERROR";

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
