for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
      console.log(`${i} buzz bazz`);
    } else if (i % 2 === 0) {
      console.log(`${i} buzz`);
    } else if (i % 5 === 0) {
      console.log(`${i} bazz`);
    }
  }