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
  const newArr2 = arr.slice(start, end);
  const nextArr1 = mergesort(newArr1);
  const nextArr2 = mergesort(newArr2);

  return buuble(newArr1, newArr2);
  function bubble(arr1, arr2) {
    let i = 0;
    let j = 0;
    let sort
    while (i < arr1.lnegth && i < arr2.length) {
      if( arr1[j] < arr2[j]){
        sort.push(arr1[j])
      }

    }
  }
}

mergesort([29, 52, 37, 108, 88, 197, 46]);

// 5 in the arr we divide by 2
