/*

RetiredForagerBee = Subclass of ForagerBee (superclass of RetiredForager)
Implement in pseudoclassical style

*/

var RetiredForagerBee = function() {
  // 'this' refers to Object.create(RetiredForagerBee.prototype)
  // Call the ForagerBee superclass ('this' is now bound to the new object)
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.color = 'grey';
  this.canFly = false;
};

// Inherit prototype methods from the superclass (ForagerBee)
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// Set the prototype constructor to the subclass (RetiredForagerBee)
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// Add new RetiredForagerBee methods
RetiredForagerBee.prototype.forage = function() {
  // Return a string
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
// Add an input treasure to the treasureChest
  this.treasureChest.push(treasure);
};
