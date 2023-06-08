export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(arr, keys) {
  const sortObj = [];
  for (const key in arr) {
    if (key !== keys[0] && key !== keys[1]) {
      sortObj.push({ key, value: arr[key] });
    }
  }

  sortObj.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  sortObj.unshift({ key: keys[1], value: arr[keys[1]] });
  sortObj.unshift({ key: keys[0], value: arr[keys[0]] });
  return sortObj;
}
