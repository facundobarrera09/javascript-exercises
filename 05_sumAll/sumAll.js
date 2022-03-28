const sumAll = function(first, last)
{
    let sum = 0, aux;

    if (first < 0 || last < 0 || typeof first != "number" || typeof last != "number")
        return "ERROR";

    if (last < first)
    {
        aux = last;
        last = first;
        first = aux;
    }

    for (let x = first; x <= last; x++)
        sum += x;


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
