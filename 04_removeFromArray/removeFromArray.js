const removeFromArray = function(array, ...args)
{
    for (let arg = 0; arg < args.length; arg++)
    {
        for (let x = 0; x < array.length; x++)
        {
            if (array[x] === args[arg])
                array.splice(x, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
