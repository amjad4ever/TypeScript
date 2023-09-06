// Step 1: Create an array of magician's names
const magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];

// Step 2: Define a function to show the magician's names
function show_magicians(names: string[]) {
    for (const name of names) {
        console.log(name);
    }
}

// Step 3: Define a function to make the magicians great
function make_great(names: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const name of names) {
        greatMagicians.push(`${name} the Great`);
    }

    return greatMagicians;
}

// Step 4: Call show_magicians() to display the original magicians
console.log('Original Magicians:');
show_magicians(magicians);

// Step 5: Call make_great() to modify the array and display the great magicians
const greatMagiciansArray = make_great(magicians);
console.log('\nGreat Magicians:');
show_magicians(greatMagiciansArray);

// Step 6: Create a copy of the original array to keep it unchanged
const unchangedMagicians = [...magicians];

// Step 7: Call make_great() with the copy to get a new array of great magicians
const newGreatMagiciansArray = make_great([...unchangedMagicians]);

// Step 8: Display the original and new great magicians
console.log('\nUnchanged Magicians:');
console.log('Original Magicians:');
show_magicians(unchangedMagicians);
console.log('\nNew Great Magicians:');
show_magicians(newGreatMagiciansArray);
