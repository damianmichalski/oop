function Phone(brand, price, color, discount) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung Galaxy S6", 1250, "gold");
var onePlusOne = new Phone("OnePlus One", 250, "brown");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

Phone.prototype.applyDiscount  = function(discount) {
    this.discount = discount;
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the discounted price is " + (this.price - this.discount) + ".");
}

iPhone6S.applyDiscount(100);
samsungGalaxyS6.applyDiscount(100);
onePlusOne.applyDiscount(100);

