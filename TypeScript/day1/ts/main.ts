const text = await Deno.readTextFile("input.txt")

// Split List into 2 Arrays
const listA: number[] = [];
const listB: number[] = [];

const splitLines = text.split("\n");

splitLines.forEach(line => {
  const numbers = line.split(" ");
  const numberA = parseInt(numbers[0]);
  const numberB = parseInt(numbers[numbers.length - 1]);
  
  listA.push(numberA);
  listB.push(numberB);
})

// Sort Lists into order
const sortedListA = listA.sort();
const sortedListB = listB.sort();

const distances: number[] = [];

// Find lowest number listA and use index to index listB
sortedListA.forEach((aNum, i) => {
  const bNum = sortedListB[i];
  const distance = Math.abs(aNum - bNum);
  
  // Store the answer in new list
  distances.push(distance)
})

// add difference totals to get answer
let totalDistance = 0

distances.forEach((num) => {
  totalDistance += num 
})

console.log(totalDistance)
