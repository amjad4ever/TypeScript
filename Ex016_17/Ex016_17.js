var guestsNames16 = ["David", "John", "Amjad"];
guestsNames16.push("End Guest");
guestsNames16.unshift("Start Guest");
guestsNames16.splice(2, 0, "Middle Guest");
console.log("Found a bigger table,so three more person are joining us");
for (var _i = 0, guestsNames16_1 = guestsNames16; _i < guestsNames16_1.length; _i++) {
    var guestsplit = guestsNames16_1[_i];
    console.log("You are invited to dinner at 9:00 PM sharp Mr.: ".concat(guestsplit, " "));
}
console.log("Sorry Mr. ".concat(guestsNames16.shift(), " we can not invite you "));
console.log("Sorry Mr. ".concat(guestsNames16.shift(), " we can not invite you "));
console.log("Sorry Mr. ".concat(guestsNames16.shift(), " we can not invite you "));
console.log("Sorry Mr. ".concat(guestsNames16.shift(), " we can not invite you "));
for (var _a = 0, guestsNames16_2 = guestsNames16; _a < guestsNames16_2.length; _a++) {
    var guestsplit = guestsNames16_2[_a];
    console.log("Your are still invited Mr. ".concat(guestsplit));
}
guestsNames16.pop();
guestsNames16.pop();
console.log(guestsNames16.length);
