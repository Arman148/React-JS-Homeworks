/* 2. Create a table according to data provided above.
    You can style it as you want. But that’s not required.

    const Data = [
	    { book: "Catcher in the Rye", readStatus: true, percent: 40},
	    { book: "Animal Farm", readStatus: true, percent: 20},
	    { book: "Solaris", readStatus: false, percent: 90 },
	    { book: "The Fall", readStatus: true, percent: 50 },
	    { book: "White Nights", readStatus: false, percent: 60 } ,
	    { book: "After Dark", readStatus: true, percent: 70 }
    ];

*/
/*
const createTable = function (data) {
    const tbody = document.getElementById('item-table')
    let template = '';
    for (let i = 0; i < data.length; i++) { // loop over array 
      // for each data in array create Template literals
      // see ref here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      const row = `
            <tr>
              <th>${data[i].book}</th>
              <td>${data[i].readStatus}</td>
              <td>${data[i].percent}</td>
            </tr >
        `;
  
      template += row // add each new row (string) in tamplate
    }
    // append created string with tags in to DOM 
    // please see how innerHTML works!
    tbody.innerHTML = template;
  }

  createTable(Data)

  */