/*

Bee = Subclass of Grub
Implement in pseudoclassical style

*/

var Bee = function() {
  // Call the Grub superclass
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Inherit the prototype methods from the parent/superclass (Grub)
Bee.prototype = Object.create(Grub.prototype);

// Set the prototype constructor to the subclass (Bee)
Bee.prototype.constructor = Bee;