let arr1 = [
  {
    date: '9',
    data: [
      {
        amount: 775,
        price: 665,
        tax: 55,
      },
    ],
  },
  {
    date: '10',
    data: [
      {
        amount: 159,
        price: 4756,
        tax: 5895,
      },
    ],
  },
  {
    date: '11',
    data: [
      {
        amount: 521,
        price: 463,
        tax: 9400,
      },
    ],
  },
  {
    date: '10',
    data: [
      {
        amount: 568,
        price: 971,
        tax: 409,
      },
    ],
  },
  {
    date: '11',
    data: [
      {
        amount: 891,
        price: 128,
        tax: 649,
      },
    ],
  },
  {
    date: '11',
    data: [
      {
        amount: 782,
        price: 269,
        tax: 741,
      },
    ],
  },
];

for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i].date === arr1[j].date) {
      for (let k = 0; k < arr1[j].data.length; k++) {
        arr1[i].data.push(arr1[j].data[k]);
      }
      arr1.splice(j, 1);
      j--;
    }
  }
}

console.log(arr1);
