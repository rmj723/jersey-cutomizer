export const getKeyByValue = (object: Object, value: number) => {
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key] === value) {
      return key;
    }
  }
};

export const getRandomPositionToPlace = (patchData: Object) => {
  const values = Object.values(patchData);
  const arr = [];
  for (let i = 1; i <= 6; ++i) {
    if (!values.includes(i)) arr.push(i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr[0];
};
