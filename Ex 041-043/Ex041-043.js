var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Step 1: Create an array of magician's names
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Step 2: Define a function to show the magician's names
function show_magicians(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
// Step 3: Define a function to make the magicians great
function make_great(names) {
    var greatMagicians = [];
    for (var _i = 0, names_2 = names; _i < names_2.length; _i++) {
        var name_2 = names_2[_i];
        greatMagicians.push("".concat(name_2, " the Great"));
    }
    return greatMagicians;
}
// Step 4: Call show_magicians() to display the original magicians
console.log('Original Magicians:');
show_magicians(magicians);
// Step 5: Call make_great() to modify the array and display the great magicians
var greatMagiciansArray = make_great(magicians);
console.log('\nGreat Magicians:');
show_magicians(greatMagiciansArray);
// Step 6: Create a copy of the original array to keep it unchanged
var unchangedMagicians = __spreadArray([], magicians, true);
// Step 7: Call make_great() with the copy to get a new array of great magicians
var newGreatMagiciansArray = make_great(__spreadArray([], unchangedMagicians, true));
// Step 8: Display the original and new great magicians
console.log('\nUnchanged Magicians:');
console.log('Original Magicians:');
show_magicians(unchangedMagicians);
console.log('\nNew Great Magicians:');
show_magicians(newGreatMagiciansArray);
