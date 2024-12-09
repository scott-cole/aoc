const increasing = (report: number[]) => {
  for (let i = 0; i < report.length - 1; i++) {
    if ( report[i] < report[i + 1]) {
      return false;
    }
  }
  
  return true;
};

const decreasing = (report: number[]) => {
  for (let i = 0; i < report.length - 1; i++) {
    if ( report[i] < report[i + 1]) {
      return false;
    }
  }
  
  return true;
};

const oneway = (report: number[]) => {
  return increasing(report) || decreasing(report)
};

const text = await Deno.readTextFile("input.txt")
const splitLines = text.split("\n").slice(0, -1);

const reports = splitLines
.map((line) => {
  const elems = line.split(" ");
  return elems.map((elem) => parseInt(elem))
})
.filter(report => oneway(report))
.map((report) => {
  return report.sort((i, j) => i - j);
});

let sum = 0;

reports.forEach(report => {
  for (let i = 0; i < reports.length - 1; i++){
    const diff = report[i + 1] - report[i];

   if (diff <= 0 || diff > 3) {
    return;
   }
  }

  sum += 1;
});

console.log(sum);
