// Creating a Map in JS
const map = new Map();

map.set("name", "Shubhanshu");
map.set(1, "one");
map.set(true, "yes");

console.log(map.get("name")); // 'Shubhanshu'
console.log(map.has(1)); // true
console.log(map.size); // 3

map.delete(true);
console.log(map.size); // 2

// ---------------------------
const arr = [2, 2, 1, 0, 2, 1, 0];

// Q. Store the number of occurance of each number in the above Map.

function countOccurance(arr) {
  const obj = new Map();

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];

    // Increase the value by 1 if obj has key
    if (obj.has(key)) {
      obj.set(key, obj.get(key) + 1);
    } else {
      obj.set(key, 1); // set value to 1 for new key
    }
  }

  console.log(obj); // Map(3) { 2 => 3, 1 => 2, 0 => 2 }
}

countOccurance(arr);

// Q. Traversing a Map
const myMap = new Map([
  ["name", "Shubhanshu"],
  ["age", 22],
  ["role", "MERN Developer"],
]);

for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}
