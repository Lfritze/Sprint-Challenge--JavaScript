// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// function CuboidMaker(attr) {
//     this.length = attr.length;
//     this.width = attr.width;
//     this.height = attr.height;
//   };

//   CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;  //copy and paste this *******************
//   };

//   CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); // copy and paste this ************
//   };

// changed from CuboidMaker to CuboidMakerClass to get rid of error declaring from prototypes.jas

class CuboidMakerClass {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;    
    }
    volume() {
        return this.length * this.width * this.height; 
    }
    surfaceArea()  {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }  
}; 

//stretch --------------
// google javascript cube volume , .cube example math is (2 x 2 x 2)
// ** is for exponential values according to W3, so cube is X to the third power, meaning **3
// surface area is: (SA = 6 * a-squared)...so we need to return (6 times this.length **2)

// class CubeMaker extends CuboidMaker {
//     constructor(cubeAttr) {
//       super(cubeAttr);
//     }
//     cubeVol() {
//       return this.length **3;
//     }
//     cubeSurfArea() {
//       return 6 * this.length **2;
//     }
//   }

// this stays the same however I changed from cuboid to cuboidClass to get rid of error declaring from prototypes.js

  const cuboidClass = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// console.log(.cuboidClass());
// console.log(.cuboidClass());