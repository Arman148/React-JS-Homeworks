/* 5.	Create a function which will take two arrays of person objects,
      function must filter all same objects where id of person is equal.
      See attached file Exersise_2.js
*/

const users_group_one = [
  {
    "_id": "5d892f408bc8f51a1dd5fd8a",
    "name": "Crystal Cash"
  },
  {
    "_id": "5d892f40efc23a317901a700",
    "name": "Valenzuela Lowe"
  },
  {
    "_id": "5d892f406835c0ddc26ce5c0",
    "name": "Lloyd Cochran"
  },
  {
    "_id": "5d892f40b9a60fa2e589ce51",
    "name": "Crane Campbell"
  },
  {
    "_id": "5d892f402670c1dd6cbe4c4e",
    "name": "Eddie Ruiz"
  },
  {
    "_id": "5d892f4069da1a43f5d78625",
    "name": "Mcmahon Weeks"
  }
]

const users_group_two = [
  {
    "_id": "5d892f408bc8f51a1dd5fd8a",
    "name": "Crystal Cash"
  },
  {
    "_id": "5d892f708c77eec8d72d5cfe",
    "name": "Higgins Stewart"
  },
  {
    "_id": "5d892f7089672eb04afd3799",
    "name": "Shauna Roman"
  },
  {
    "_id": "5d892f700caff5c0d1835e4c",
    "name": "Oconnor Conrad"
  },
  {
    "_id": "5d892f402670c1dd6cbe4c4e",
    "name": "Eddie Ruiz"
  },
  {
    "_id": "5d892f70dcde6472f1238c35",
    "name": "Snow Thomas"
  },
  {
    "_id": "5d892f70e102a0d8e7bdfcf3",
    "name": "Liza Conley"
  }
]
/*
const filtered = (arr1, arr2) => {
  console.log(arr1);
  console.log(arr2);
  
  let newArr = arr2.map(item => {
    //console.log(item)
    arr1.push(item)
  });


  let newArr = []

  for (i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++){
    console.log(arr1[i]);
    console.log(arr2[j])
    console.log(arr1[i]._id)
    let id1 = arr1[i]._id;
    let id2 = arr2[j]._id;

    console.log(id1);
    console.log(id2)
    console.log('----------')

    if(id1 !== id2){
      let newId1 = id1;
      let newId2 = id2;
      console.log(newId1)
      console.log(newId2)

      newArr.push(newId1);
      console.log(newArr);
      newArr.push(newId2);
      console.log(newArr);

      
    }    
  }

}

filtered(users_group_one, users_group_two )
*/




/*
const filter = (arr1, arr2) => {
  let id1 = arr1[0]._id;
  let id2 = arr2[0]._id;
  for(i = 0; i < arr1.length; i++){
    
  }
}

filter(users_group_one, users_group_two)

*/
    const firstFilter = (arr1, arr2) => {
      let newArr = [];
    
      for( i = 0; i < arr2.length; i++ ){
        for( j = 0; j < arr1.length; j++ ){
          if (arr1[j]._id == arr2[i]._id){
            arr1 = arr1.filter(item => item !== arr1[j])
          }else{
            console.log('true')
          }          
        }
      }
      return arr1;
    }
    
    const newArr = firstFilter(users_group_one,users_group_two)

    console.log(newArr)