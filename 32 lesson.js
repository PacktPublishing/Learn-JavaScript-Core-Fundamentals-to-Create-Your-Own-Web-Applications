function car(miles, company, color) {
    this.color = color;
    this.miles = miles;
    this.company = company;
}
const myCar1 = new car(100, "honda", "pink");
console.log(myCar1);
myCar1.price = 2000;
console.log(myCar1);
const myCar2 = new car(100, "ford", "purple");