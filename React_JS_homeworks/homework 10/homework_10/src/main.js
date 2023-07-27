/*
1.	Create a Rectangle function constructor.Rectangle should have: length and width.
It should have getters and setters for all fields.
It should have getArea() method.
It should have getPerimeter() method.

class Rectangle {
    constructor(width, heigth){
        this.width = width;
        this.heigth = heigth;
    }

    getWidth(){        
        console.log('widht:',this.width );
    }

    setwidth(width){
        this.width = width;
    }

    getHeigth(){
        console.log('heigth:',this.heigth );
    }

    setHeigth(heigth){
        this.heigth = heigth
    }
    
    getArea(){
        let area = this.width * this.heigth;
        console.log('Area:',area );
        return area;
    }

    getPerimeter(){
        let perimeter = 2 * (this.width + this.heigth);
        console.log('perimeter:',perimeter );
        return perimeter;
    }
}
*/

/*
2.	Create an Employee function constructor. Employee should have: id, firstName, lastName, position, salary, workingHours.
It should have setters and getters for appropriate fields.
It should have a method: getFullName().
It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.

class Employe {
    constructor(id, name, surname, position, sallary){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.sallary = sallary;
        this.position = position;
        this.id++;
    }

    getID(){
        console.log('ID:',this.id);
    }

    getName(){
        console.log('name:',this.name );
    }

    getSurname(){
        console.log('surname:',this.surname );
    }

    getSallary(){
        console.log('salary:',`$${this.sallary}` );
    }

    getFullName(){
        let fullName = `${this.name} ${this.surname}`
        console.log('fulname is:',fullName );
        return fullName;
    }

    getAnnularSallary(){
        let annSall = this.sallary * 12;
        console.log('annular Sallary is:',`$${annSall}`);
        return annSall;
    }

    raiseSalary(percent){
        this.sallary = this.sallary + ( (this.sallary * percent) / 100 );
        console.log('new sallary is:', `$${this.sallary}`);
        return this.sallary;
    }
}

*/
/*
3. Create an Account function constructor. Account should have: id,  name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance, if the amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”

class Account {
    constructor(id= '', name = '', balance = ''){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    getID(){
        console.log('ID:',this.id );
    }

    getName(){
        console.log('name:',this.name);
    }

    getBalance(){
        console.log('balance:',`$${this.balance}`);
    }

    Credit(sum){
        this.balance += sum;
        console.log('new balance is:', this.balance );
        return this.balance;
    }

    Debit(sum){
        this.balance -= sum;
        console.log('new balance is:', this.balance );
        return this.balance;
    }

    transferTo(anotherAccount, amount)  {
        if(amount < this.balance){
        anotherAccount.balance += amount;
        console.log('anotheracc balance is', anotherAccount.balance );
        this.balance -= amount;
        console.log('balance is:', this.balance );
        }
        else{
            console.log('blanace is less then trasfer sum');
        }
    }  
}

*/

