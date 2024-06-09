const percent = (x, y) => {
  try {
    if (x === 0 && y === 0) {
      return 0;
    }

    // Add 1 decimal for values smaller than 1
    if ((x / y) * 100 < 1) {
      return Math.round((x / y) * 1000) / 10;
    }

    return Math.floor((x / y) * 100);
  } catch {
    return 0;
  }
};

export default percent;
