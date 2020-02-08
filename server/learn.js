function employee(name, job, born) {
    var x = 0;
    this.name = name;
    this.job = job;
    this.born = born;
    this.A = function(){
        console.log(x);
    }
}
var bill = new employee("Bill Gates", "Engineer", 1985);
employee.prototype.salary = 20000;
console.log(bill.salary);
bill.__proto__.salary=2;
console.log(1e3);
console.log(bill.salary);
console.log(bill.A());
console.log(global);