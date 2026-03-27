for (let num = 0; num < 10; num++) {
  //   console.log(num);
}
for (let i = 0; i < 10; i = i + 1) {
  //   console.log(i);
}
for (let i = 50; i < 100; i++) {
  //   console.log(i);
}

// ----------

let sum = 0;
for (let i = 11; i < 20; i++) {
  //   console.log(i);

  sum = sum + i;
  //   console.log(sum);
}
// console.log(sum);

// ----------

for (let i = 150; i < 170; i++) {
  //   console.log(i);
}

// ------
let stSum = 0;
for (let i = 31; i < 58; i++) {
  //   console.log(i);

  stSum += i;
}
// console.log(stSum);

// ---------

let sums = 0;
for (let i = 25; i < 75; i++) {
  sums += i;
}
// console.log(sums);

// ===========

// even number
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}
for (let i = 0; i < 10; i += 2) {
  //   console.log(i);
}
for (let i = 0; i <= 10; i += 2) {
  //   console.log(i);
}

// odd nubmer
for (let i = 0; i < 15; i++) {
  if (i % 2 == 1) {
    // console.log(i);
  }
}
for (let i = 1; i < 15; i += 2) {
  //   console.log(i);
}
for (let i = 1; i <= 15; i += 2) {
  //   console.log(i);
}


//! ---------even odd for loop

for (let i = 0; i < 30; i++) {
  if (i % 5 == 0) {
    // console.log(i);
  }
}

for (let i = 0; i < 30; i++) {
  if (i % 3 == 0) {
    // console.log(i);
  }
}

for (let i = 0; i < 30; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    // console.log(i);
  }
}

for (let i = 0; i < 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    // console.log(i);
  }
}

//! ---------- break for loop
for (let i = 0; i < 10; i++) {
  // console.log(i);

  if (i >= 3) {
    break
  }
}

for (let i = 0; i < 5; i++) {
  // console.log(i);

  if (i > 2) {
    break
  }
}

for (let i = 0; i < 50; i++) {
  // console.log(i);

  if (i > 20) {
    // console.log('stop the bus');
    break
  }
}

//! ----------- continue for loop
for (let i = 0; i < 5; i++) {

  if (i == 2) {
    // console.log(i, 'skip the bus station');
    continue
  }

  // console.log(i);
}

//* skip absence student
for (let i = 0; i < 10; i++) {

  if (i == 2 || i == 6) {
    // console.log(i, 'absence');
    continue
  }

  // console.log(i, 'calling the roll');
}

//* skip even number
for (let i = 0; i < 10; i++) {

  if (i % 2 == 0) {
    continue
  }

  // console.log(i);
}

//* skip odd number
for (let i = 0; i < 10; i++) {

  if (i % 2 == 1) {
    continue
  }

  // console.log(i);
}


//! ------practice
for (let i = 0; i < 30; i++) {
  // console.log(i);

  if (i >= 15) {
    break
  }
}

for (let i = 0; i < 40; i++) {
  if (i % 7 == 1) {
    // console.log(i);
  }
}

for (let i = 0; i < 15; i++) {
  if (i == 9) {
    continue
  }

  // console.log(i);
}

for (let i = 0; i < 20; i++) {
  if (i == 12) {
    continue
  }

  // console.log(i);
}

for (let i = 0; i < 25; i++) {
  if (i % 3 == 1) {
    // console.log(i);
  }
}

for (let i = 91; i < 120; i++) {
  // console.log(i);

  if (i % 10 == 0) {
    break
  }
}