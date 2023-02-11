export const debounce = (func: Function, timeout: number) => {
  let timer = 0;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
