const text = await Deno.readTextFile("input.txt")

const splitLines = text.split("\n");

function countAscending(arr: string[]): number {
  const isAscending = (str: string): boolean => {
    const numbers = str.split(" ").map(Number);

    for ( let i = 1; i < numbers.length; i++ ) {
      if ( numbers[i] - numbers[i + 1] > 2) {
        return false;
      }
    }
    return true;
  };
  return arr.reduce((count, str) => count + (isAscending(str) ? 1 : 0), 0);
}

// const totalSafe = countAscending(splitLines) + countDescending(splitLines)
// 


// console.log(totalSafe);