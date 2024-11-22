function fibs(num) {
  const fibsArr = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    const next = fibsArr[i] + fibsArr[i + 1];
    fibsArr.push(next);
  }
  console.log(fibsArr);
}

// fibs(8);

function fibsRec(num) {
  console.log("This was printed recursively");
  if (num === 2) {
    return [0, 1];
  }
  if (num <= 0) {
    return 0;
  } else {
    const sum = fibsRec(num - 1);
    sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
    return sum;
  }
}

// console.log(fibsRec(8));

// f(7)
// f(7- 1)
// f6(6-1) f5(5-1) f4(4-1) f3(3-1) f2([0,1])

function mergesort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  const end = arr.length;
  const mid = Math.ceil(end / 2);
  const newArr1 = arr.slice(0, mid);
  const newArr2 = arr.slice(mid, end);
  const nextArr1 = mergesort(newArr1); // 6,1
  const nextArr2 = mergesort(newArr2);

  function bubble(arr1, arr2) {
    let numSort = [...arr1, ...arr2]
    function compareNumbers(a, b) {
    return a - b;
  }
    numSort.join()
    numSort.sort()
    numSort.sort(compareNumbers)
    return numSort
  }
  return bubble(nextArr1, nextArr2);
}

const tik = mergesort([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(tik);

// function bubble(arr1, arr2) {
//   let numSort = [...arr1, ...arr2]
//   function compareNumbers(a, b) {
//   return a - b;
// }
//   numSort.join()
//   numSort.sort()
//   numSort.sort(compareNumbers)
//   return numSort
// }
// const change = bubble([12,3,1,6], [15,7])

// console.log(change);