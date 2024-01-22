let year = +prompt(
  "Please input a year which you want to check if it's a leap year or not."
);
let leapYear =
  (((year % 4) == 0) && ((year % 100) != 0)) || ((year % 400) == 0)
    ? "It's a leapyear!"
    : "It's not a leapyear!";
alert(leapYear);
