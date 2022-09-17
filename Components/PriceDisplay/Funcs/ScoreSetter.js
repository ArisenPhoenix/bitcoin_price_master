const scoreSetter = (subtract, setScore) => {
  setScore((prev) => {
    if (subtract) {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - 1;
      }
    } else {
      return prev + 1;
    }
  });
};

export default scoreSetter;
