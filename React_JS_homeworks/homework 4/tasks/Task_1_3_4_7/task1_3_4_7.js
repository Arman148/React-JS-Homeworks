/* Task 1
1.	Create a function that takes an array of names and returns an array with the first letter capitalized.

Example. capMe(["mavis", "senaida"]) ➞ ["Mavis", "Senaida"]	

----------------------------------------------------------
    const upper = (arr) => {
        let newArr = [];
        arr.forEach(element => {
            let firstLetter = element[0].toUpperCase();        
            elementWithoutFirstLetter = element.substring(1)
            let newElem = firstLetter + elementWithoutFirstLetter;
            newArr.push(newElem);
        });
        return newArr    
    }
    
    const newArr = upper(['dave', 'john', 'Lucas']);
    console.log(newArr)
----------------------------------------------------------
*/

/* Task 3
3.	Create two functions that will add prefix and suffix to a string or number.
    If the given argument one of the falsy value function must return '--'.
    Example addPrefix(‘3500’, ‘$’) ➞ ‘$3500’ 
----------------------------------------------------------    
    const addPrefix = (num, pref) => {
        if (typeof num === "string" && typeof pref === "string"){
            return pref + num;
        }
        else{
            return '--'
        }
    }
    
    let price = addPrefix('500', '$');
    console.log(price)
----------------------------------------------------------
*/

/* Task 4

4.	Create a function which takes 3 parameters (name, surname, job),
    and will return a person object with given properties.
----------------------------------------------------------
    const createObj = (name, surname, job) => {
        return {
            name,
            surname,
            job,
        }
    }
    
    const obj = createObj('John', 'Doe', 'Developer')
    console.log(obj);
----------------------------------------------------------
*/

/* Task 7 */
