// 1.Given the list of the following readers:
/*

[
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

*/
//Output the books sorted by the percent in descending order which readStatus is true.
/*

const bookList = [
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
];

function readStatus (arr) {
   return arr.filter(item => item.readStatus === true)
};

function sortByPercent (arr) {
    return arr.sort((item1, item2) => item1.percent - item2.percent);
}
const filtered = sortByPercent(readStatus(bookList));

console.log('filtered :',filtered );

*/


