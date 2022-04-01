const fibonacci = function(pos)
{
    if (pos < 0) return "OOPS";

    const aurea = (1 + Math.sqrt(5)) / 2;
    const num = (1 / Math.sqrt(5)) * (Math.pow(aurea, pos) - Math.pow(-1 / aurea, pos));

    return Math.trunc(num);
};

// Do not edit below this line
module.exports = fibonacci;
