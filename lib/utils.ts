
const getValueCounts = (arr: any[]): { [key: string]: number } => 
  arr.reduce((acc, val) => ({ ...acc, [val]: ~~acc[val] + 1 }), {})
;

const getMinMax = (arr: number[]): [number, number] => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  return [min, max];
};

export {
  getValueCounts,
  getMinMax
};
