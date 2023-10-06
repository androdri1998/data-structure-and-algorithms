const countdown = (startNumber) => {
  if (startNumber < 0) {
    return;
  }

  console.log(startNumber);

  countdown(startNumber - 1);
};

countdown(10);
