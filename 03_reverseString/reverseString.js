const reverseString = function(string)
{
    let reversedString, arrayString, arrayStringReversed;

    arrayString = string.split("");
    arrayStringReversed = new Array(arrayString.length);
    
    let front = 0, end = arrayString.length;
    while (front < end)
    {
        arrayStringReversed[front] = arrayString[end];
        arrayStringReversed[end] = arrayString[front];

        front++;
        end--;
    }

    reversedString = arrayStringReversed.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
