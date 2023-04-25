let debounceTimerId: NodeJS.Timeout | undefined;

export const debounceFunction = (
  value: string,
  time: number,
): Promise<string> => {
  return new Promise(resolve => {
    clearTimeout(debounceTimerId);
    debounceTimerId = setTimeout(() => {
      if (value.length >= 1) {
        resolve(value);
      } else {
        resolve('');
      }
    }, time);
  });
};
