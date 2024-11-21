function fibs(num) {
  const fibsArr = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    const next = fibsArr[i] + fibsArr[i + 1];
    fibsArr.push(next);
  }
  console.log(fibsArr);
}

fibs(8);

function fibsRec(num) {
  const fibsArr = [0, 1];
  if (num === 1) {
    return fibsArr;
  } else {
   


  }
}


