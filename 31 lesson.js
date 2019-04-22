const myCar = {
    color: "red"
    , topSpeed: 300
    , model: "mustang"
    , company: "ford"
    , price: 50000
    , turnOn: function () {
        console.log("started")
    }
    , drive: function () {
        console.log("You " + this.model + " driving")
    }
    , works() {
        console.log("working")
    }
};