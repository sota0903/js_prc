
var numbers = [];
var numbers_object = {};

numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

console.log(numbers.length);

numbers_object = {
    '0': 'one', '1': 'two', '2': 'three'
};

console.log(numbers_object);

numbers[10000] = 'HogeFuga';

console.log(numbers[10000].length);
