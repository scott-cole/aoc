const input = await Deno.readTextFile("input.txt");

const regex = /mul\(\d{1,3},\d{1,3}\)/g;

const matches = input.match(regex) || [];

const sum = matches.reduce((total, match) => {
    const [x, y] = match.match(/\d+/g)!.map(Number);
    return total + x * y;
}, 0);

console.log(sum);
