let debounceTimerId: NodeJS.Timeout | undefined;

export const debounceFunction = (
  value: string,
  time: number,
): Promise<string | null> => {
  return new Promise((resolve) => {
    clearTimeout(debounceTimerId);
    debounceTimerId = setTimeout(() => {
      if (value.length >= 3) {
        resolve(value);
      } else {
        resolve(null);
      }
    }, time);
  });
};
