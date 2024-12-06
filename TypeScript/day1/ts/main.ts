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


const distances = sortedListA.map((aNum, i) => {
  const bNum = sortedListB[i];
  const distance = Math.abs(aNum - bNum);
  return distance
})

// add difference totals to get answer
const totalDistance = distances.reduce((curr, total) => {
  return curr + total
})

console.log(totalDistance)

// zip concenpt functional programming
const zipped = sortedListA.map((e, i) => ([e, sortedListB[i]]));
const diffs = zipped.map(([aNum, bNum]) => Math.abs(aNum - bNum));
const sum = diffs.reduce((aNum, bNum) => aNum + bNum, 0)

console.log(sum)

