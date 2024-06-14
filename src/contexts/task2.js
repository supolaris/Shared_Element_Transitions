let myNewArray = [];
const arr1 = [
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
    date: '10',
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
  let myNewData = {
    title: arr1[i].date,
    data: [
      {
        amount: arr1[i].data[0].amount,
        price: arr1[i].data[0].price,
        tax: arr1[i].data[0].price,
      },
    ],
  };

  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i].date === arr1[j].date) {
      myNewData.data.push(arr1[j].data[0]);
      //myNewData.data[0].price += arr1[j].data[0].price;
      //myNewData.data[0].tax += arr1[j].data[0].tax;
      i++;
    }
  }
  myNewArray.push(myNewData);
}
//console.log(myNewArray);
console.log(myNewArray[1].data);
// console.log(myNewArray[1])
// console.log(myNewArray[1].data[0])
