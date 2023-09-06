var guestsNames15 = ["David", "John", "Smith"];
var quitGuest = guestsNames15.pop();
console.log("Guest not comming to dinner: ".concat(quitGuest));
var newGuest = guestsNames15.push("Amjad");
console.log("New guest coming to dinner: ".concat(guestsNames15[2]));
for (var _i = 0, guestsNames15_1 = guestsNames15; _i < guestsNames15_1.length; _i++) {
    var newGuestsList = guestsNames15_1[_i];
    console.log("Invinted guest on dinner: ".concat(newGuestsList));
}
