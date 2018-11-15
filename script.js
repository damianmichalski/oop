function Phone(brand, price, color, discount) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.discount = discount;
    // this.discount = function() {
    //     this.discount = this.price - 100;
    // };
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.applyDiscount  = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the discounted price is " + (this.price - this.discount) + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung Galaxy S6", 1250, "gold");
var onePlusOne = new Phone("OnePlus One", 250, "brown");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

var iPhone6SNew = new Phone("Apple", 2250, "silver", 100);
var samsungGalaxyS6New = new Phone("Samsung Galaxy S6", 1250, "gold", 100);
var onePlusOne = new Phone("OnePlus One", 250, "brown", 100);

iPhone6SNew.applyDiscount();
samsungGalaxyS6New.applyDiscount();
onePlusOne.applyDiscount();

