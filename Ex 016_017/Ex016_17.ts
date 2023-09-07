let guestsNames16=["David","John","Amjad"];
guestsNames16.push("End Guest");
guestsNames16.unshift("Start Guest");
guestsNames16.splice(2,0,"Middle Guest");
console.log("Found a bigger table,so three more person are joining us");
for (let guestsplit of guestsNames16)
console.log(`You are invited to dinner at 9:00 PM sharp Mr.: ${guestsplit} `);
console.log(`Sorry Mr. ${guestsNames16.shift()} we can not invite you `);
console.log(`Sorry Mr. ${guestsNames16.shift()} we can not invite you `);
console.log(`Sorry Mr. ${guestsNames16.shift()} we can not invite you `);
console.log(`Sorry Mr. ${guestsNames16.shift()} we can not invite you `);
for (let guestsplit of guestsNames16)
console.log(`Your are still invited Mr. ${guestsplit}`);
guestsNames16.pop();
guestsNames16.pop();
console.log(guestsNames16.length);




