/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
let type = [
    quarter = 25,
    dime = 10,
    nickel = 5,
    penny = 1
];

class ChangeHandler {
    constructor(amountDue, type) {
        this.amountDue = 35;
        this.cashTendered = 0;
        this.insertCoin(type);

    }
    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        var insert = prompt("Enter a coin(quarter, dime, nickel, penny)");
        while (this.amountDue > this.cashTendered) {
            if (insert === "quarter") {
                this.cashTendered += quarter;
                console.log(`${this.cashTendered}` + " of " + `${this.amountDue}` + " is paid.");
            } else if (insert === "dime") {
                this.cashTendered += dime;
                console.log(`${this.cashTendered}` + " of " + `${this.amountDue}` + " is paid.");
            } else if (insert === "nickel") {
                this.cashTendered += nickel;
                console.log(`${this.cashTendered}` + " of " + `${this.amountDue}` + " is paid.");
            } else if (insert === "penny") {
                this.cashTendered += penny;
                console.log(`${this.cashTendered}` + " of " + `${this.amountDue}` + " is paid.");
            } else {
                console.log("sorry, you still owe money");
                return this.amountDue;
                console.log(insert);
            }
        }
        this.isPaymentSufficient();
        this.giveChange();

    }



    /**

     * Returns true if enough coins have been inserted to at least meet the amountDue

     */

    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            console.log("Payment complete")

        } else {
            this.insertCoin(type);
        }
    }



    giveChange() {
        // TODO return the correct change in the following format...
        let change = this.cashTendered - this.amountDue;
        let quarters = 0;
        let dimes = 0;
        let nickels = 0;
        let pennies = 0;
        if (this.cashTendered > this.amountDue) {
            console.log(`Your change is: ${change}`);
        do {
            if (change - 10 >= 0) {
                dimes++;
                change -= 10;
                console.log(`You received ${dimes} dime(s).`);
                console.log(change);
            } else if (change - 5 >= 0) {
                nickels++;
                change -= 5;
                console.log(`You received ${nickels} nickel(s).`);
                console.log(change);
            } else if (change - 1 >= 0) {
                pennies++;
                change -= 1;
                console.log(`You received ${pennies} pennies.`);
                console.log(change);
            } else {
                console.log(change);
                return change;
            }
            return {
                quarters: 0,
                dimes: 0,
                nickels: 0,
                pennies: 0
            }
        } while (change !== 0);
    }
    }
}
let begin = new ChangeHandler;
console.log(begin);