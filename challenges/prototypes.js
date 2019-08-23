/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

// Prototypes are the mechanism by which objects inherit features from one another
// the prototype properties and methods are defined on the prototype property on the objects constructor(), not the object instances themselves.

//constructor functions are templates //prototype template to link to instance
// will link via prototype to object below (CuboidMaker)
//build template

function CuboidMaker(attr) {
  this.length = attr.length;
  this.width = attr.width;
  this.height = attr.height;
};

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
// use 'volume' as the method name per the console log below

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;  
};


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

// use 'surfaceArea' as the method name per the console log below

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

//prototype links this to the constructor function above
//remember commas not ;

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


