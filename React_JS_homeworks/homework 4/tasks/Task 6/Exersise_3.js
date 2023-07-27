/*6.	Change isActive status of all customers which have balance less than 3000.
  See attached file Exersise_3.js.*/

const customers = [
  {
    "_id": "5d892e944aafb6d09eb51d48",
    "name": "Katrina Hopkins",
    "isActive": false,
    "balance": 2798.94
  },
  {
    "_id": "5d892e9480c9eca427a52b61",
    "name": "Rivera Harvey",
    "isActive": true,
    "balance": 4068.5
  },
  {
    "_id": "5d892e94313f586e61efd4f3",
    "name": "Noelle Franklin",
    "isActive": false,
    "balance": 3279.38
  },
  {
    "_id": "5d892e94585c9fd21438bf2e",
    "name": "Abby Sosa",
    "isActive": true,
    "balance": 1363.24
  },
  {
    "_id": "5d892e94c59cc1bd866be696",
    "name": "Dunn Gray",
    "isActive": true,
    "balance": 2105.55
  },
  {
    "_id": "5d892e943856f2a8fb66a572",
    "name": "Young Bonner",
    "isActive": false,
    "balance": 4355.81
  }
]



const changeIsActive =(arr) => {
  const newArr = arr.map(item => {
    if(item.balance < 3000){
      item.isActive = false;
    }
    else{
      item.isActive = true;
    }
  })
  return(arr)
}

const changed = changeIsActive(customers)
console.log(changed)