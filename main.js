const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
let countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
//level 1
// que 1
const set = new Set();
// que 2
for (let i = 0; i <= 10; i++) {
  set.add(i);
}
console.log(set);

// que 3
console.log("\n");
set.delete(1);
console.log(set);

// que 4
console.log("\n");
set.clear();
console.log(set);

// que 5
console.log("\n");
let arr = ["she", "he", "goat", "sheep", "ram"];
let set2 = new Set(arr);
console.log(set2);

// que 6
console.log("\n");
let map = new Map(countries2);
console.log(map);

for (const [country, city] of map) {
  console.log(`${country}: ${country.length}, ${city}: ${city.length}`);
}

// level 2
// que 1
console.log("\n");
let c = [...a, ...b];
let cSet = new Set(c);
console.log(cSet);

// que 2
console.log("\n");
let A = new Set(a);
let B = new Set(b);
let filter = a.filter((num) => B.has(num));
console.log(filter);

// que 3
console.log("\n");
let diffFilter = a.filter((num) => !B.has(num));
console.log(diffFilter);

// level 3
let languages = [
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 },
];

//   que 1
console.log("\n");
let langSet = new Set(languages);
console.log(langSet.size);

// que 2
console.log("\n");
function mostSpokenLanguages(num) {
  let slice = languages.slice(0, num);
  return slice;
}
console.log(mostSpokenLanguages(4));
