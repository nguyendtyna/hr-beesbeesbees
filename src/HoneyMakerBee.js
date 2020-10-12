/*

HoneyMakerBee = Subclass of Bee (superclass of HoneyMakerBee)
Implement in pseudoclassical style

*/

var HoneyMakerBee = function() {
  // 'this' refers to Object.create(HoneyMakerBee.prototype)
  // Call the Bee superclass ('this' will be bound to the new object)
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.color = 'yellow';

  // Add new HoneyMakerBee properties
  this.honeyPot = 0;
};

// Inherit prototype methods from the superclass (Bee)
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// Set the prototype constructor to the subclass (HoneyMakerBee)
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// Add new methods
HoneyMakerBee.prototype.makeHoney = function() {
  // Increment honeyPot value by 1
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  // Decrement honeyPot value by 1
  this.honeyPot--;
}
