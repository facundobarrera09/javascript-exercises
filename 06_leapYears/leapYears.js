const leapYears = function(year)
{
    let isLeapYear;
    let isDivBy4 = (year % 4 == 0);
    let isDivBy100 = (year % 100 == 0);
    let isDivBy400 = (year % 400 == 0);

    if ((isDivBy4 && !isDivBy100) || (isDivBy100 && isDivBy400))
        isLeapYear = true;
    else
        isLeapYear = false;

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
