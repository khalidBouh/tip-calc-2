console.log("hello");
function calculateTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15;
    } else {
      tip = bill * 0.2;
    }
    return tip;
  }

const bill = 289;
const tip = calculateTip(bill);
console.log(`For bill of ${bill}, the tip is ${tip}`);