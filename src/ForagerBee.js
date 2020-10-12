/*

ForagerBee = Subclass of Bee (superclass of ForagerBee)
Implement in pseudoclassical style

*/

var ForagerBee = function() {
  // 'this' refers to Object.create(ForagerBee.prototype)
  // Call the Bee superclass ('this' will now be bound to the new object)
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';

  // Add new ForagerBee properties
  this.canFly = true;
  this.treasureChest = [];
};

// Inherit prototype methods from the superclass (Bee)
ForagerBee.prototype = Object.create(Bee.prototype);

// Set the prototype constructor to the subclass (ForagerBee)
ForagerBee.prototype.constructor = ForagerBee;

// Add new methods
ForagerBee.prototype.forage = function(treasure) {
  // Add an input treasure to the treasureChest
  this.treasureChest.push(treasure);
}
